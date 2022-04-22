
/**
 * helper to pretty-print json
 * @param {any} data
 * @param {boolean} [minify]
 * @returns {string}
 */
export function stringifyJson(data, minify) {
	if (!data) {
		return '';
	}
	return JSON.stringify(data, (key, value) => value instanceof Error
		? value.toString() + '\n' + value.stack.toString()
		: value,
		minify ? 0 : 2);
}
/**
 * Replaces reserved html characters
 * @param {string} str
 * @returns {string}
 */
export function htmlEscape(str) {
	return str.replace(/[&<"']/g, c => {
		switch (c) {
			case '&': return '&amp;';
			case '<': return '&lt;';
			case '"': return '&quot;';
			default: return '&#039;';
		}
	});
}
export function tryParse(json) {
	try {
		return JSON.parse(json);
	}
	catch (e) { }
}

function setCookie(cookie, value, isTransient) {
	const ONE_DAY = 1000 * 60 * 60 * 24;
	const expires = isTransient
		? new Date(Date.now() + ONE_DAY)
		: new Date('9999-01-01');
	document.cookie = `${cookie}=${encodeURIComponent(value)};expires=${expires.toUTCString()}`;
}
function getCookie(name) {
	let value = '; ' + document.cookie;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return decodeURIComponent(parts.pop().split(';').shift());
	}
}

const queryParams = Object.fromEntries( new URLSearchParams(window.location.search));
function getParameterByName(name) {
	return queryParams[name] || getCookie(name) || '';
}
/**
 * 
 * @param {T} defaults 
 * @returns {T}
 * @template T
 */
export function readParams(defaults) {
	return Object.keys(defaults).reduce((acc, k) => {
		acc[k] = getParameterByName(k) || defaults[k];
		return acc;
	}, {});
}

export function storeParams(formData) {
	Object.entries(formData).forEach(([k, value]) => {
		setCookie(k, value);
	});
}
