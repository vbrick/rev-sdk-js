
console.log('Demo, API: ', window.revSdk);

const queryParams = getQueryParams();
const webcastId = getParameterByName('webcastId');
const jwtToken = getParameterByName('jwtToken');
const baseUrl = getParameterByName('baseUrl');

const token = {
	type: 'JWT',
	issuer: 'rev',
	value: jwtToken
};

console.log({ webcastId, jwtToken, baseUrl });

document.getElementById('webcastId').value = webcastId;
document.getElementById('jwtToken').value = jwtToken;
document.getElementById('baseUrl').value = baseUrl;
document.querySelector('form').addEventListener('submit', reload);

function reload(e) {
	e.preventDefault();
	setCookie('webcastId', document.getElementById('webcastId').value);
	setCookie('jwtToken', document.getElementById('jwtToken').value);
	setCookie('baseUrl', document.getElementById('baseUrl').value);
	window.location.search = "";
}

const webcast = revSdk.embedWebcast('#embed', webcastId, {
	showVideo: true,
	log: true,
	token,
	baseUrl
});

const statusEl = document.getElementById('status');
const logEl = document.getElementById('logMessages');

['error', 'load', 'webcastLoaded', 'webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded']
	.forEach(e => webcast.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${event}:${stringifyJson(data)}`;
		logEl.appendChild(li);
	}));

window.setInterval(() => statusEl.innerHTML = webcast.status || 'undefined', 1000);

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
