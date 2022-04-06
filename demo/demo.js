
let queryParams;
let form;

/**
 * @typedef {object} DemoForm
 * @property {string} sourceUrl
 * @property {string} baseUrl
 * @property {string} videoId
 * @property {string} webcastId
 * @property {'webcast' | 'vod'} embedType
 * @property {'JWT' | 'AccessToken'} tokenType
 * @property {string} tokenValue
 * @property {string} issuer
 * @property {string} config
 */

export function init(formDefaults, onSubmit = (payload) => console.log('Submit', payload)) {
	queryParams = getQueryParams();
	form = document.querySelector('form');

	const formValues = readForm(formDefaults);

	if (typeof formValues.config === 'object') {
		formValues.config = stringifyJson(formValues.config);
	}
	
	
	if (formValues.sourceUrl) {
		const newValues = sourceUrlToFormValues(formValues.sourceUrl, formValues.baseUrl);
		Object.assign(formValues, newValues);
	}
	
	writeForm(formValues);

	form.addEventListener('change', evt => {
		switch (evt.target.name) {
			case 'tokenType':
				updateDependentFields(form);
				return;
			case 'sourceUrl':
				const newValues = sourceUrlToFormValues(form.elements.sourceUrl.value, form.elements.baseUrl.value);
				writeForm(newValues);
				break;
			
		}
		if (evt.target.name !== 'tokenType') {
			return;
		}
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const payload = formToSettings();
		
		onSubmit(payload);
	});

	form.addEventListener('reset', (e) => {
		// also clear cookies
		Object.keys(formDefaults).forEach(k => {
			setCookie(k, formDefaults);
		});
	})

	return formValues;
}

export function formToSettings() {
	/** @type {ParsedRevUrl} */
	const payload = {
		config: {}
	};
	const token = {};

	for (let el of form.elements) {
		const key = el.name;
		const value = el.value;
		let isTransient = false;

		if (!key) {
			continue;
		}

		switch (key) {
		case 'tokenValue':
			token.value = value;
			isTransient = true;
			break;
		case 'tokenType':
			// skip non-selected radio button
			if (!el.checked) {
				continue;
			}
			token.type = value;
			break;
		case 'issuer':
			token.issuer = value;
			break;
		case 'config':
			try {
				payload.config = value
					? JSON.parse(value)
					: {};
			} catch (err) {}
			break;
		case sourceUrl:
			isTransient = true;
			// don't pass to embedding
			break;
		default:
			payload[key] = value;
		}
		setCookie(key, value, isTransient);
	}
	if (token.value) {
		payload.config.token = token;
	}
	return payload;
}

function sourceUrlToFormValues(sourceUrl, currentBaseUrl) {
	const settings = parseRevUrl(sourceUrl);
	const {
		baseUrl,
		videoId = '',
		webcastId = ''
	} = settings;

	// check if full URL
	const isEmbeddable = !!videoId || !!webcastId;
	if (!isEmbeddable) {
		return;
	}

	let {
		token,
		...config
	} = settings.config;

	/** @type {DemoForm} */
	const formValues = {
		sourceUrl,
		baseUrl,
		videoId,
		webcastId,
		embedType: videoId ? 'vod' : 'webcast'
	};

	const isSameDomain = currentBaseUrl === formValues.baseUrl;

	if (token) {
		formValues.tokenType = token.type;
		formValues.tokenValue = token.value;
		formValues.issuer = token.issuer;
	} else if (!isSameDomain) {
		// force token reset if switching accounts
		formValues.tokenType = 'AccessToken';
		formValues.tokenValue = '';
		formValues.issuer = 'vbrick';
	}

	if (Object.keys(config).length > 0) {
		formValues.config = stringifyJson(config);
	}
	return formValues;
}

function updateDependentFields(form) {
	const isVOD = form.elements.embedType.value === 'vod';
	form.elements.webcastId.disabled = isVOD;
	form.elements.videoId.disabled = !isVOD;

	const isJWT = form.elements.tokenType.value === 'JWT';
	form.elements.issuer.value = isJWT
		? 'vbrick_rev'
		: 'vbrick';
}

export function stringifyJson(data) {
	if (!data) {
		return '';
	}
	return JSON.stringify(data, (key, value) => value instanceof Error
		? e.toString() + '\n' + e.stack.toString()
		: value
	);
}

function setCookie(cookie, value, isTransient) {
	const ONE_DAY = 1000 * 60 * 60 * 24;
	const expires = isTransient
		? new Date(Date.now() + ONE_DAY)
		: new Date('9999-01-01')
	document.cookie = `revsdk-${cookie}=${encodeURIComponent(value)};expires=${expires.toUTCString()}`;
}

function getCookie(name) {
	let value = '; ' + document.cookie;
	let parts = value.split(`; revsdk-${name}=`);
	if (parts.length === 2) {
		return decodeURIComponent(parts.pop().split(';').shift());
	}
}

function getQueryParams() {
	return Object.fromEntries(
		new URLSearchParams(window.location.search)
	);
}

function getParameterByName(name) {
	return queryParams[name] || getCookie(name) || '';
}

function writeForm(values) {
	Object.entries(values).forEach(([k, value]) => {
		const el = form.elements[k];
		if (el) {
			el.value = value || '';
		}
	});
}

function readForm(defaults) {
	return Object.keys(defaults).reduce((acc, k) => {
		acc[k] = getParameterByName(k) || defaults[k];
		return acc;
	}, {});
}

/**
 * @typedef {{isValid: boolean, baseUrl?: string, videoId?: string, webcastId?: string, config: import("../src/IVbrickApi").IVbrickEmbedConfig}} ParsedRevUrl
 */
/**
 * attempt to parse a URL (or <iframe src=...> embed code) referencing a Rev webcast or vod)
 * @param {string | URL} url 
 * @returns {ParsedRevUrl}
 */
export function parseRevUrl(url) {
	// attempt to read src parameter if embed code is pasted in
	if (`${url}`.startsWith('<iframe')) {
		url = url.replace('.+src="([^"]+)".+', '$1');
	}

	let urlObj;
	try {
		urlObj = new URL(url);
	} catch (err) {
		return {
			isValid: false,
			config: {}
		};
	}
	
	const {
		searchParams,
		pathname,
		hash,
		origin: baseUrl
	} = urlObj;

	/** @type {ParsedRevUrl} */
	const result = {
		isValid: true,
		baseUrl,
		config: {}
	};

	// matches an id in the url path
	const guidInPath = (/[0-9a-f-]{36}/i.exec(pathname) || [])[0];

	if (searchParams.has('id')) {
		result.videoId = searchParams.get('id');
	} else if (pathname.includes('sharevideo')) {
		result.videoId = guidInPath;
	} else if (pathname.includes('embed/webcast')) {
		// embed code url
		result.webcastId = guidInPath;
	} else if (pathname.includes('public/events')) {
		// public event guest registration link
		Object.assign(result, {

		})
		result.webcastId = guidInPath;
		result.config.token = {
			type: 'JWT',
			issuer: 'vbrick_rev',
			value: searchParams.get('token')
		};
	} else if (hash) {
		const contentMatch = /\/(?<area>videos|events)\/(?<id>[0-9a-f-]{36})/.exec(hash);
		if (contentMatch) {
			const { id, area } = contentMatch.groups;

			const key = area === 'events'
				? 'webcastId'
				: 'videoId';

			result[key] = id;
		}
	} else {
		// just base URL passed
	}

	// add additional config options passed 
	const queryConfigMap = {
		accent: 'accentColor',
		autoplay: 'autoplay',
		forceClosedCaptions: 'forcedCaptions',
		loopVideo: 'playInLoop',
		noCc: 'hideCaptions',
		noCenterButtons: 'hideOverlayControls',
		noChapters: 'hideChapters',
		noFullscreen: 'hideFullscreen',
		noPlayBar: 'hidePlayControls',
		noSettings: 'hideSettings',
		placeholder: 'popOut',
		startAt: 'startAt'
	};
	for (let [key, value] of searchParams) {
		const configKey = queryConfigMap[key];
		if (configKey) {
			result.config[configKey] = value === ''
				? true
				: value;
		}
	}

	return result;
}