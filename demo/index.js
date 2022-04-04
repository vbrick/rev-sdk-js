import { init, stringifyJson } from './demo.js';

console.log('Demo, API: ', window.revSdk);

let formValues = init('webcast', {
	webcastId: '',
	baseUrl: '',
	jwtToken: '',
	accessToken: '',
	issuer: 'vbrick_rev'
});

const token = {
	type: formValues.jwtToken ? 'JWT' : 'AccessToken',
	issuer: formValues.issuer,
	value: formValues.jwtToken || formValues.accessToken
};


const webcast = revSdk.embedWebcast('#embed', formValues.webcastId, {
	showVideo: true,
	log: true,
	token,
	baseUrl: formValues.baseUrl
});

const statusEl = document.getElementById('status');
const logEl = document.getElementById('logMessages');

['error', 'load', 'webcastLoaded', 'webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded', 'volumeChanged', 'captionsChanged', 'playerStatusChanged']
	.forEach(e => webcast.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:${stringifyJson(data)}`;
		logEl.appendChild(li);
	}));

window.setInterval(() => statusEl.innerHTML = webcast.status || 'undefined', 1000);
