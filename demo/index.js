import { init, stringifyJson } from './demo.js';

console.log('Demo, API: ', window.revSdk);

/** @type {import("../dist/IVbrickApi").IVbrickBaseEmbed} */
let currentEmbed;

let formValues = init({
	sourceUrl: '',
	baseUrl: '',
	videoId: '',
	webcastId: '',
	embedType: 'vod',
	tokenType: 'AccessToken',
	tokenValue: '',
	issuer: 'vbrick',
	config: '{}'
}, formValues => {
	embedContent(formValues)
});

const sharedEvents = ['error', 'load', 'volumeChanged', 'captionsChanged', 'playerStatusChanged'];

const vodEvents = ['videoLoaded', 'seeked'];

const webcastEvents = ['webcastLoaded', 'webcastStarted', 'webcastEnded',
'broadcastStarted', 'broadcastStopped']

function embedContent(payload) {
	const {
		baseUrl,
		webcastId,
		videoId,
		config
	} = payload;

	if (currentEmbed) {
		currentEmbed.destroy();
	}

	const isVod = !!videoId;
	
	const embedConfig = {
		showVideo: true,
		log: true,
		baseUrl,
		...config
	};

	const embed = isVod
		? revSdk.embedVideo('#embed', videoId, embedConfig)
		: revSdk.embedWebcast('#embed', webcastId, embedConfig);

	currentEmbed = embed;
	globalThis.currentEmbed = currentEmbed;

	const listenEvents = [
		...sharedEvents,
		...(isVod
			? vodEvents
			: webcastEvents
		)
	];
	addLogging(embed, listenEvents);

	trackStatus(embed, 'status');
}



function addLogging(embedObj, events) {
	const logEl = document.getElementById('logMessages');

	for (let eventName of events) {
		embedObj.on(eventName, data => {
			const li = document.createElement('li');
			li.innerHTML = `${new Date().toLocaleTimeString()} ${eventName}:${stringifyJson(data)}`;
			logEl.appendChild(li);
		});
	}
}

function trackStatus(embedObj, property = 'status') {
	const statusEl = document.getElementById('status');
	function updateStatus() {
		// cancel updates if reload called
		if (currentEmbed !== embedObj) {
			return;
		}
		statusEl.innerHTML = embedObj[property] || 'undefined';
		setTimeout(updateStatus, 1000);
	}
	updateStatus();
}
