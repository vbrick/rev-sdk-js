
let prefix;
let queryParams;

export function init(prefixName, formDefaults) {
	prefix = prefixName;
	queryParams = getQueryParams();

	const formValues = readForm(formDefaults);
	writeForm(formValues);

	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		Object.keys(formValues).forEach(k => {
			setCookie(k, document.getElementById(k).value);
		});
		window.location.search = "";
	});

	return formValues;
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

function addPrefix(n) {
	return `${prefix}.${n}`
}

function setCookie(cookie, value) {
	document.cookie = `${addPrefix(cookie)}=${encodeURIComponent(value)};expires=${ new Date('9999-01-01').toUTCString()}`;
}

function getCookie(name) {
	let value = '; ' + document.cookie;
	let parts = value.split('; ' + addPrefix(name) + '=');
	if (parts.length === 2) {
		return decodeURIComponent(parts.pop().split(';').shift());
	}
}

function getQueryParams() {
	const query = window.location.search.substring(1);
	if(!query) {
		return {};
	}

	return query.split('&')
		.reduce((result, paramStr) => {
			const [key, value] = paramStr.split('=').map(decodeURIComponent);
			result[key] = value;
			return result
		}, {});
}

function getParameterByName(name) {
	return queryParams[name] || getCookie(name) || '';
}




function writeForm(values) {
	Object.keys(values).forEach(k => {
		document.getElementById(k).value = values[k] || '';
	});
}

function readForm(defaults) {
	return Object.keys(defaults).reduce((acc, k) => {
		acc[k] = getParameterByName(k) || defaults[k];
		return acc;
	}, {});
}

