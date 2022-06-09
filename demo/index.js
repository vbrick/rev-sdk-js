import { init } from './demoform.js';
import { stringifyJson, htmlEscape } from "./utils.js";
import revSDK from '../dist/rev-sdk.esm.js';

/**
 * @typedef {import("../dist/rev-sdk").IVbrickWebcastEmbed} IVbrickWebcastEmbed
 * @typedef {import("../dist/rev-sdk").IVbrickVideoEmbed} IVbrickVideoEmbed
 * @typedef {import("../dist/rev-sdk").VbrickEmbedConfig} VbrickEmbedConfig
 */

/**
 * A reference to the current Rev SDK VbrickEmbed instance
 * @type {IVbrickVideoEmbed & IVbrickWebcastEmbed}
 */
let currentEmbed;

const webcastStatusEl = document.getElementById('webcastStatus');
const playerStatusEl = document.getElementById('playerStatus');
const volumeSlider = document.getElementById('volumeSlider');
const logEl = document.getElementById('logMessages');

// Initialize the configuration form and tell it what to do (embedContent) when form is submitted.
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

addPlayerControls();

/**
 * This is the main function for calling the revSDK and displaying a video/webcast
 * @param {import('./demoform.js').RevSDKDemoSettings} settings
 */
 function embedContent(settings) {
	const {
		baseUrl,
		webcastId,
		videoId,
		config
	} = settings;

	const isVod = !!videoId;

	/**
	 * construct the config for passing to sdk.
	 * "log" controls outputting debug messages to the console
	 * @type {VbrickEmbedConfig}
	 */
	const embedConfig = {
		log: true,
		baseUrl,
		...config
	};

	// stop playback of existing video and remove it from DOM
	if (currentEmbed) {
		currentEmbed.destroy();
	}

	// embed the specified video/webcast. Returns an instance of VbrickEmbed
	currentEmbed = isVod
		? revSDK.embedVideo('#embed', videoId, embedConfig)
		: revSDK.embedWebcast('#embed', webcastId, embedConfig);

	// store a reference for interacting with on the devtools console
	globalThis.vbrickEmbed = currentEmbed;

	// add event listeners to log to screen + update volume
	monitorEmbed(currentEmbed);

	document.body.classList.toggle('is-vod', isVod);
	document.body.classList.toggle('is-webcast', !isVod);
	document.body.classList.toggle('is-full-webcast', !isVod && config.showFullWebcast);
}

/**
 * bind elements to controlling the SDK player
 */
function addPlayerControls() {
	// play video (if not already playing)
	document.querySelector('#playButton')
		.addEventListener('click', () => currentEmbed?.play());

	// pause video on click
	document.querySelector('#pauseButton')
		.addEventListener('click', () => currentEmbed?.pause());

	// change the player volume using a slider, 0-1
	document.querySelector('#volumeSlider')
		.addEventListener('change', () => currentEmbed?.setVolume(volumeSlider.value));

	// If you have to generate a new access token for a playback session then you can call
	// 'updateToken' with the new value. This handler gets the new token from the demo page's form
	// and passes into the embed
	const updateTokenButton = document.querySelector('#updateToken');
	updateTokenButton.addEventListener('click', () => {
		const data = getData();
		if (currentEmbed) {
			currentEmbed.updateToken(data.config.token);
		}
	});

	/** @type {HTMLSelectElement} */
	const subtitlesSelect = document.querySelector('#subtitles');
	subtitlesSelect.addEventListener('change', () => {
		currentEmbed?.setSubtitles({
			enabled: !!subtitlesSelect.value,
			language: subtitlesSelect.value
		});
	});
}

/**
 * Add listeners for events emitted by the VbrickEmbed instance
 * @param {IVbrickVideoEmbed & IVbrickWebcastEmbed} currentEmbed
 */
 function monitorEmbed(currentEmbed) {
	const events = ['error', 'load', 'playerStatusChanged', 'subtitlesChanged', 'volumeChanged', 'playbackSpeedChanged', 'videoLoaded', 'seeked',
	'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped', 'layoutChanged', 'commentAdded', 'slideChanged', 'pollOpened', 'pollClosed', 'pollPublished', 'pollUnpublished'];

	events.forEach(e => currentEmbed.on(e, data => {
		logEvent(e, data);
		updateControls(currentEmbed, e);
	}));
}

/**
 * Updates the controls on the page
 * @param {IVbrickVideoEmbed | IVbrickWebcastEmbed} currentEmbed
 * @param {Parameters<IVbrickWebcastEmbed['on']>[0]} eventType
 */
function updateControls(currentEmbed, eventType) {
	playerStatusEl.innerText = currentEmbed.playerStatus;
	webcastStatusEl.innerText = currentEmbed.webcastStatus;
	if(currentEmbed.volume >= 0) {
		volumeSlider.value = currentEmbed.volume;
	}

	const subtitlesSelect = document.querySelector('#subtitles');
	if(eventType === 'videoLoaded' || eventType === 'webcastLoaded') {
		const subtitles = currentEmbed.videoInfo.subtitles || currentEmbed.webcastInfo.subtitles;
		for (let c of subtitles) {
			const el = document.createElement('option');
			el.value = c.language;
			el.text = c.language === 'captions' ? 'Closed Captions' : c.language;
			subtitlesSelect.appendChild(el);
		}
	}
	if (eventType === 'subtitlesChanged') {
		subtitlesSelect.value = currentEmbed.subtitles.enabled
			? currentEmbed.subtitles.language
			: '';
	}
}

/**
 * Adds an event and JSON data on the page
 * @param { string } e
 * @param { any } data
 */
function logEvent(e, data) {
	const li = document.createElement('li');
	li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:<pre>${htmlEscape(stringifyJson(data))}</pre>`;
	logEl.insertBefore(li, logEl.firstChild);
}

console.log('Demo, API: ', window.revSdk);
console.log('Welcome to the Vbrick SDK Embed Test page. When rendered the current video player instance is set to window.vbrickEmbed');
