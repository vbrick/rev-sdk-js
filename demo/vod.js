
console.log('Demo, API: ', window.revSdk);

const queryParams = getQueryParams();
const videoId = getParameterByName('videoId');
const accessToken = getParameterByName('accessToken');
const baseUrl = getParameterByName('baseUrl');

const token = {
	type: 'AccessToken',
	issuer: 'vbrick',
	accessToken
};

console.log({ videoId, token, baseUrl });

document.getElementById('videoId').value = videoId;
document.getElementById('accessToken').value = accessToken;
document.getElementById('baseUrl').value = baseUrl;
document.querySelector('form').addEventListener('submit', reload);

function reload(e) {
	e.preventDefault();
	setCookie('videoId', document.getElementById('videoId').value);
	setCookie('accessToken', document.getElementById('accessToken').value);
	setCookie('baseUrl', document.getElementById('baseUrl').value);
	window.location.search = "";
}

const video = revSdk.embedVideo('#embed', videoId, {
	log: true,
	token,
	baseUrl
});

const statusEl = document.getElementById('status');
const logEl = document.getElementById('logMessages');

['error', 'load', 'videoLoaded', 'volumeChanged', 'captionsChanged', 'seeked']
	.forEach(e => video.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:${stringifyJson(data)}`;
		logEl.appendChild(li);
	}));

function setCookie(cookie, value) {
	document.cookie = `${cookie}=${encodeURIComponent(value)};expires=${ new Date('9999-01-01').toUTCString()}`;
}

function getCookie(name) {
	let value = '; ' + document.cookie;
	let parts = value.split('; '+name + '=');
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

function stringifyJson(data) {
	if (!data) {
		return '';
	}
	return JSON.stringify(data, replaceErrors);
}

function stringifyJson(data) {
	if (!data) {
		return '';
	}
	return JSON.stringify(data, (key, value) => value instanceof Error
		? e.toString() + '\n' + e.stack.toString()
		: value
	);
}

