import { init, stringifyJson } from './demo.js';

console.log('Demo, API: ', window.revSdk);

/** @type {import("../dist/IVbrickApi").IVbrickBaseEmbed} */
let currentEmbed;
let statusInterval;

init({
	sourceUrl: '',
	baseUrl: '',
	videoId: '',
	webcastId: '',
	embedType: 'vod',
	tokenType: 'AccessToken',
	tokenValue: '',
	issuer: 'vbrick',
	config: '{}'
}, embedContent);

const logEvents = ['error', 'load', 'volumeChanged', 'captionsChanged', 'playerStatusChanged', 'videoLoaded', 'seeked',
	'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped'];

function embedContent(payload) {
	const {
		baseUrl,
		webcastId,
		videoId,
		config
	} = payload;

	if (currentEmbed) {
		currentEmbed.destroy();
		window.clearInterval(statusInterval);
	}

	const isVod = document.forms["demoform"].elements['embedType'].value == 'vod';

	const embedConfig = {
		showVideo: true,
		log: true,
		baseUrl,
		...config
	};

	currentEmbed = isVod
		? revSdk.embedVideo('#embed', videoId, embedConfig)
		: revSdk.embedWebcast('#embed', webcastId, embedConfig);

	globalThis.vbrickEmbed = currentEmbed;

	const logEl = document.getElementById('logMessages');
	const statusEl = document.getElementById('status');

	logEvents.forEach(e => currentEmbed.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:<pre>${stringifyJson(data)}</pre>`;
		logEl.insertBefore(li, logEl.firstChild)
	}));

	statusInterval = window.setInterval(() => statusEl.innerHTML = currentEmbed.status || 'undefined', 1000);
}

console.log('Welcome to the Vbrick SDK Embed Test page. When rendered the current video player instance is set to window.vbrickEmbed');
