/**
 * @typedef {object} DemoForm
 * @property {string} sourceUrl
 * @property {string} baseUrl
 * @property {string} videoId
 * @property {string} webcastId
 * @property {'webcast' | 'vod'} embedType
 * @property {'JWT' | 'AccessToken'} tokenType
 * @property {string} tokenValue
 * @property {string} tokenIssuer
 * @property {string} config
 */

const queryParams = Object.fromEntries( new URLSearchParams(window.location.search));

/**
 * Initializes the demo form
 * @param {any} formDefaults
 * @param {(config: any) => void} render
 */
export function init(formDefaults, render) {
	const form = document.querySelector('form');

	const formValues = readParams(formDefaults);
	writeFormData(form, formValues);

	if(queryParams.sourceUrl) {
		onSourceUrlChanged(form, queryParams.sourceUrl);
	}

	form.addEventListener('change', evt => {
		switch (evt.target.name) {
			case 'tokenType':
				onTokenTypeChanged(form);
				return;
			case 'sourceUrl':
				onSourceUrlChanged(form, form.elements.sourceUrl.value);
				break;
			case 'embedType':
				onEmbedTypeChanged(form);
				break;
		}
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		renderInternal();
	});

	form.addEventListener('reset', (e) => {
		const data = readParams(formDefaults);
		writeFormData(form, data);
		renderInternal();
	});

	setTimeout(renderInternal, 1000);

	function renderInternal() {
		const data = readFormData(form);
		storeParams(data);
		render(getConfig(data));
	}
}

function getConfig(formData) {
	const {
		config,
		tokenValue,
		tokenType,
		tokenIssuer,
		sourceUrl,
		...data
	} = formData

	return {
		...data,
		config: {
			...tryParse(config),
			token: tokenValue && {
				type: tokenType,
				value: tokenValue,
				issuer: tokenIssuer
			}
		},
	};
}

function onSourceUrlChanged(form, sourceUrl) {
	const settings = parseRevUrl(sourceUrl);
	if (!settings.videoId && !settings.webcastId) {
		return;
	}

	writeFormData(form, {
		sourceUrl,
		...settings,
	});
}

function onTokenTypeChanged(form) {
	onEmbedTypeChanged(form);

	const isJWT = form.elements.tokenType.value === 'JWT';
	form.elements.tokenIssuer.value = isJWT
		? 'vbrick_rev'
		: 'vbrick';
}

function onEmbedTypeChanged(form) {
	const isVOD = form.elements.embedType.value === 'vod';
	form.elements.webcastId.disabled = isVOD;
	form.elements.videoId.disabled = !isVOD;
}

export function stringifyJson(data, minify) {
	if (!data) {
		return '';
	}
	return JSON.stringify(data, (key, value) => value instanceof Error
		? e.toString() + '\n' + e.stack.toString()
		: value
	, minify ? 0 : 2);
}

function setCookie(cookie, value, isTransient) {
	const ONE_DAY = 1000 * 60 * 60 * 24;
	const expires = isTransient
		? new Date(Date.now() + ONE_DAY)
		: new Date('9999-01-01')
	document.cookie = `${cookie}=${encodeURIComponent(value)};expires=${expires.toUTCString()}`;
}

function getCookie(name) {
	let value = '; ' + document.cookie;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return decodeURIComponent(parts.pop().split(';').shift());
	}
}

function getParameterByName(name) {
	return queryParams[name] || getCookie(name) || '';
}

function readParams(defaults) {
	return Object.keys(defaults).reduce((acc, k) => {
		acc[k] = getParameterByName(k) || defaults[k];
		return acc;
	}, {});
}

function readFormData(form) {
	return Array.from(form.elements)
		.filter(el => el.name && (el.type !== 'radio' || el.checked))
		.reduce((acc, el) => Object.assign(acc, {[el.name]: el.value}), {});
}

function writeFormData(form, values) {
	Object.entries(values).forEach(([k, value]) => {
		const el = form.elements[k];
		if (!el) {
			return;
		}
		if (el.type === 'radio') {
			el.checked = el.value === value;
		} else {
			el.value = value || '';
		}
	});
	onTokenTypeChanged(form);
}

function storeParams(formData) {
	Object.entries(formData).forEach(([k, value]) => {
		setCookie(k, value);
	});
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
	url = url.trim();
	// attempt to read src parameter if embed code is pasted in
	if (url.startsWith('<')) {
		url = url.match(/src="([^"]+)"/)?.[1];
	}

	let urlObj;
	try {
		urlObj = new URL(url);
	} catch (err) {
		return {
			isValid: false,
			config: '{}'
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
		config: '{}'
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
		result.webcastId = guidInPath;
	}
	else if (hash) {
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
	const config = Array.from(searchParams.entries()).reduce((config, [key, value]) => {
		const configKey = queryConfigMap[key];
		if (configKey) {
			config[configKey] = value === '' ? true : value;
		}
		return config;
	}, {});

	result.config = stringifyJson(config, true);
	result.embedType = result.videoId ? 'vod' : 'webcast';

	if(result.webcastId) {
		result.tokenType = 'JWT';
		result.tokenIssuer = 'vbrick_rev';
		result.tokenValue = searchParams.get('token')
	}

	return result;
}

function tryParse(json) {
	try{
		return JSON.parse(json);
	}
	catch(e) {}
}
