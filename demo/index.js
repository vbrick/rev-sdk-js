import { init, formToSettings, stringifyJson } from './demo.js';

console.log('Demo, API: ', window.revSdk);

/** @type {import("../dist/IVbrickApi").IVbrickBaseEmbed} */
let currentEmbed;

function onSubmit(formValues) {
	const isVod = !!formValues.videoId;
	document.body.classList.toggle('vod', isVod);
	console.log('Rendering video with settings', formValues);
	embedContent(formValues)
}

let initialValues = init({
	sourceUrl: '',
	baseUrl: '',
	videoId: '',
	webcastId: '',
	embedType: 'vod',
	tokenType: 'AccessToken',
	tokenValue: '',
	issuer: 'vbrick',
	config: '{}'
}, onSubmit);

if (initialValues.baseUrl && (initialValues.videoId || initialValues.webcastId)) {
	setTimeout(() => onSubmit(formToSettings()), 0);
}

const sharedEvents = ['error', 'load', 'volumeChanged', 'captionsChanged', 'playerStatusChanged'];

const vodEvents = ['videoLoaded', 'seeked'];

const webcastEvents = ['webcastLoaded', 'webcastStarted', 'webcastEnded',
'broadcastStarted', 'broadcastStopped']

function embedContent(payload) {
	const {
		baseUrl,
		webcastId,
		videoId,
		embedType,
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

	if (!isVod) {
		trackStatus(embed, 'status');
	}
}



function addLogging(embedObj, events) {
	const logEl = document.getElementById('logMessages');

	for (let eventName of events) {
		embedObj.on(eventName, data => {
			const li = document.createElement('li');
			li.innerHTML = `<span>${new Date().toLocaleTimeString()} ${eventName}:</span><code>${stringifyJson(data)}</code>`;
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
