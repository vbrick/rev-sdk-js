import { init } from './demoform.js';
import { stringifyJson, htmlEscape } from "./utils.js";

/**
 * A reference to the current Rev SDK VbrickEmbed instance
 * @type {import("..").IVbrickVideoEmbed & import("..").IVbrickWebcastEmbed}
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
	 * @type {import("..").VbrickEmbedConfig}
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
		? revSdk.embedVideo('#embed', videoId, embedConfig)
		: revSdk.embedWebcast('#embed', webcastId, embedConfig);

	// store a reference for interacting with on the devtools console
	globalThis.vbrickEmbed = currentEmbed;

	// add event listeners to log to screen + update volume
	monitorEmbed(currentEmbed);
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
			currentEmbed.updateToken(data.config.token)
				.then(() => console.log('Token update successful'))
				.catch(err => console.error('Error updating token', err));
		}
	});
}

/**
 * Add listeners for events emitted by the VbrickEmbed instance
 * @param {import("..").IVbrickVideoEmbed & import("..").IVbrickWebcastEmbed} currentEmbed
 */
 function monitorEmbed(currentEmbed) {
	const events = ['error', 'load', 'authChanged', 'playerStatusChanged', 'captionsChanged', 'volumeChanged', 'playbackSpeedChanged', 'videoLoaded', 'seeked',
	'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped'];

	events.forEach(e => currentEmbed.on(e, data => {
		logEvent(e, data);
		updateControls(currentEmbed);
	}));
}

/**
 * Updates the controls on the page
 * @param {import("..").IVbrickVideoEmbed | import("..").IVbrickWebcastEmbed} currentEmbed
 */
function updateControls(currentEmbed) {
	playerStatusEl.innerText = currentEmbed.playerStatus;
	webcastStatusEl.innerText = currentEmbed.webcastStatus;
	if(currentEmbed.volume >= 0) {
		volumeSlider.value = currentEmbed.volume;
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
