import { init } from './demoform.js';
import { stringifyJson, htmlEscape } from "./utils.js";
import revSDK from '../dist/rev-sdk.esm.js';

/**
 * @typedef {import("../dist/rev-sdk").IVbrickWebcastEmbed} IVbrickWebcastEmbed
 * @typedef {import("../dist/rev-sdk").IVbrickVideoEmbed} IVbrickVideoEmbed
 * @typedef {import("../dist/rev-sdk").IVbrickPlaylistEmbed} IVbrickPlaylistEmbed
 * @typedef {import("../dist/rev-sdk").VbrickEmbedConfig} VbrickEmbedConfig
 */

/**
 * A reference to the current Rev SDK VbrickEmbed instance
 * @type {IVbrickVideoEmbed & IVbrickWebcastEmbed & IVbrickPlaylistEmbed}
 */
let currentEmbed;

const webcastStatusEl = document.getElementById('webcastStatus');
const playerStatusEl = document.getElementById('playerStatus');
const volumeSlider = document.getElementById('volumeSlider');
const subtitlesEl = document.getElementById('subtitles');
const currentTimeEl = document.getElementById('currentTime');
const playlistEl = document.getElementById('playlistSelect');
const logEl = document.getElementById('logMessages');

// Initialize the configuration form and tell it what to do (embedContent) when form is submitted.
const getData = init({
	sourceUrl: '',
	baseUrl: '',
	videoId: '',
	webcastId: '',
	playlistId: '',
	embedType: 'vod',
	tokenType: '',
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
		playlistId,
		config
	} = settings;

	const isVod = !!videoId;
	const isWebcast = !!webcastId;
	const isPlaylist = !!playlistId;

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
	if (videoId) {
		currentEmbed = revSDK.embedVideo('#embed', videoId, embedConfig);
	} else if (webcastId) {
		currentEmbed = revSDK.embedWebcast('#embed', webcastId, embedConfig);
	} else if (playlistId) {
		currentEmbed = revSDK.embedPlaylist('#embed', playlistId, embedConfig);
	} else {
		throw new Error('No resource ID specified');
	}

	// store a reference for interacting with on the devtools console
	globalThis.vbrickEmbed = currentEmbed;

	// add event listeners to log to screen + update volume
	monitorEmbed(currentEmbed);

	document.body.classList.toggle('is-vod', !!videoId);
	document.body.classList.toggle('is-webcast', !!webcastId);
	document.body.classList.toggle('is-full-webcast', !!webcastId && config.showFullWebcast);
	document.body.classList.toggle('is-playlist', !!playlistId);
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

	
	subtitlesEl.addEventListener('change', () => {
		const val = subtitlesEl.value;
		currentEmbed?.setSubtitles({
			enabled: !!val,
			language: val === 'captions' ? undefined : val
		});
	});

	document.querySelector('#playlistPrev')
		.addEventListener('click', () => currentEmbed?.previous?.());

	document.querySelector('#playlistNext')
		.addEventListener('click', () => currentEmbed?.next?.());

	playlistEl.addEventListener('change', () => {
		const id = playlistEl.value;
		currentEmbed?.switchVideo?.(id, true);
	});
}

/**
 * Add listeners for events emitted by the VbrickEmbed instance
 * @param {IVbrickVideoEmbed & IVbrickWebcastEmbed} currentEmbed
 */
 function monitorEmbed(currentEmbed) {
	const events = ['error', 'load', 'playerStatusChanged', 'subtitlesChanged', 'volumeChanged', 'playbackSpeedChanged', 'videoLoaded', 'seeked',
	'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped', 'layoutChanged', 'commentAdded', 'slideChanged', 'pollOpened', 'pollClosed', 'pollPublished', 'pollUnpublished', 
	'playlistLoaded', 'playlistItem'];

	events.forEach(e => currentEmbed.on(e, data => {
		logEvent(e, data);
		updateControls(currentEmbed, e, data);
	}));

	currentEmbed.on('currentTime', data => {
		currentTimeEl.innerText = data.currentTime?.toPrecision(3);
	});
}

/**
 * Updates the controls on the page
 * @function
 * @template {import("../dist/rev-sdk").TVbrickEvent} Evt 
 * @param {IVbrickVideoEmbed | IVbrickWebcastEmbed | IVbrickPlaylistEmbed} currentEmbed
 * @param {Evt} eventType
 * @param {import("../dist/rev-sdk").TVbrickMessages[Evt]} data
 */
function updateControls(currentEmbed, eventType, data) {
	playerStatusEl.innerText = currentEmbed.playerStatus || '';
	webcastStatusEl.innerText = currentEmbed.webcastStatus || '';
	if(currentEmbed.volume >= 0) {
		volumeSlider.value = currentEmbed.volume;
	}

	if(eventType === 'videoLoaded' || eventType === 'webcastLoaded') {
		// clear out previous subtitles, leaving only the "None" option
		subtitlesEl.querySelectorAll('option:not([default])').forEach(el => el.remove());
		const subtitles = currentEmbed.info.subtitles;
		for (let c of subtitles) {
			const el = document.createElement('option');
			el.value = c.language;
			el.text = c.language === 'captions' ? 'Closed Captions' : c.language;
			subtitlesEl.appendChild(el);
		}
	}
	if(eventType === 'subtitlesChanged') {
		subtitlesEl.value = currentEmbed.currentSubtitles.enabled
			? currentEmbed.currentSubtitles.language || 'captions'
			: '';
	}
	if(eventType === 'playlistLoaded') {
		// clear out previous playlist items
		playlistEl.querySelectorAll('option:not([default])').forEach(el => el.remove());
		for (let vid of /** @type {IVbrickPlaylistEmbed} */(currentEmbed).playlist.videos) {
			const el = document.createElement('option');
			el.value = vid.id;
			el.text = vid.title;
			playlistEl.appendChild(el);
		}
	}
	if(eventType === 'playlistItem') {
		playlistEl.value = data.videoId;
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
