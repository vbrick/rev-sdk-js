import { init, stringifyJson } from './demo.js';

let formValues = init('vod', {
	videoId: '',
	baseUrl: '',
	accessToken: '',
});

const token = {
	type: 'AccessToken',
	value: formValues.accessToken
};

const video = revSdk.embedVideo('#embed', formValues.videoId, {
	log: true,
	token,
	baseUrl: formValues.baseUrl
});

const logEl = document.getElementById('logMessages');

['error', 'load', 'videoLoaded', 'volumeChanged', 'captionsChanged', 'seeked', 'playerStatusChanged']
	.forEach(e => video.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:${stringifyJson(data)}`;
		logEl.appendChild(li);
	}));
