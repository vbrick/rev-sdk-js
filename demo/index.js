import { init, stringifyJson } from './demo.js';

console.log('Demo, API: ', window.revSdk);

/** @type {import("../dist/IVbrickApi").IVbrickBaseEmbed} */
let currentEmbed;

const getData = init({
	sourceUrl: '',
	baseUrl: '',
	videoId: '',
	webcastId: '',
	embedType: 'vod',
	tokenType: 'AccessToken',
	tokenValue: '',
	tokenIssuer: 'vbrick',
	config: '{}'
}, embedContent);

const logEvents = ['error', 'load', 'volumeChanged', 'captionsChanged', 'playerStatusChanged', 'videoLoaded', 'seeked',
	'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped'];

document.querySelector('#updateToken').addEventListener('click', () => {
	const data = getData();
	currentEmbed?.updateToken(data.config.token);
});

function embedContent({
	baseUrl,
	webcastId,
	videoId,
	config
}) {

	const isVod = !!videoId;
	const embedConfig = {
		showVideo: true,
		log: true,
		baseUrl,
		...config
	};

	currentEmbed?.destroy();
	currentEmbed = isVod
		? revSdk.embedVideo('#embed', videoId, embedConfig)
		: revSdk.embedWebcast('#embed', webcastId, embedConfig);

	globalThis.vbrickEmbed = currentEmbed;

	const logEl = document.getElementById('logMessages');
	const statusEl = document.getElementById('status');
	const playerStatusEl = document.getElementById('playerStatus');

	logEvents.forEach(e => currentEmbed.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:<pre>${stringifyJson(data)}</pre>`;
		logEl.insertBefore(li, logEl.firstChild);
		updateStatus();
	}));

	function updateStatus() {
		statusEl.innerHTML = currentEmbed.status || 'undefined';
		playerStatusEl.innerHTML = currentEmbed.playerStatus || 'undefined';
	}
}

console.log('Welcome to the Vbrick SDK Embed Test page. When rendered the current video player instance is set to window.vbrickEmbed');
