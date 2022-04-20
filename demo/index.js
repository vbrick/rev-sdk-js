import { init, stringifyJson, htmlEscape } from './demo.js';

console.log('Demo, API: ', window.revSdk);

/** 
 * A reference to the current Rev SDK VbrickEmbed instance
 * @type {import("..").IVbrickVideoEmbed & import("..").IVbrickWebcastEmbed}
 */
let currentEmbed;

// see demo.js for details - this initializes the configuration form. "embedContent" is called when time to call the SDK
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
 * This demo page passes around data necessary for calling embedVideo or embedWebcast using this object interface
 * @typedef {object} RevSDKDemoSettings
 * @property {string} baseUrl
 * @property {string} videoId
 * @property {string} webcastId
 * @property {import("..").VbrickEmbedConfig} config
 */


/**
 * 
 * @param {RevSDKDemoSettings} settings 
 */
 function embedContent(settings) {
	const {
		baseUrl,
		webcastId,
		videoId,
		config
	} = settings;

	const isVod = !!videoId;

	/** @type {import("..").VbrickEmbedConfig} */
	const embedConfig = {
		showVideo: true,
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
	listenForEvents(currentEmbed);
	// add event listeners to track playback status
	trackStatusChangess(currentEmbed);
}

/**
 * bind elements to controlling the SDK player
 */
function addPlayerControls() {
	// play video (if not already playing)
	const playButton = document.querySelector('#playButton');
	playButton.addEventListener('click', function () {
		if (currentEmbed) {
			currentEmbed.play();
		}
	});

	// pause video on click
	const pauseButton = document.querySelector('#pauseButton');
	pauseButton.addEventListener('click', function () {
		if (currentEmbed) {
			currentEmbed.pause();
		}
	});

	// change the player volume using a slider
	const volumeSlider = document.querySelector('#volumeSlider');
	volumeSlider.addEventListener('click', function () {
		if (currentEmbed) {
			// volumeSlider's value is in range 0-1
			currentEmbed.setVolume(volumeSlider.value);
		}
	});

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
}


/**
 * Add listeners for events emitted by the VbrickEmbed instance
 * @param {import("..").IVbrickVideoEmbed | import("..").IVbrickWebcastEmbed} currentEmbed 
 */
 function listenForEvents(currentEmbed) {
	const logEvents = ['error', 'load', 'playerStatusChanged', 'captionsChanged', 'volumeChanged', 'playerStatusChanged', 'videoLoaded', 'seeked',
	'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped'];

	// log when any event is received as well as its data
	const logEl = document.getElementById('logMessages');
	logEvents.forEach(e => currentEmbed.on(e, data => {
		const li = document.createElement('li');
		li.innerHTML = `${new Date().toLocaleTimeString()} ${e}:<pre>${htmlEscape(stringifyJson(data))}</pre>`;
		logEl.insertBefore(li, logEl.firstChild);
	}));


	// update slider when volume is changed within the player
	const volumeSlider = document.querySelector('#volumeSlider');
	currentEmbed.on('volumeChanged', data => {
		// can use data.volume or currentEmbed.volume
		if(currentEmbed.volume >= 0) {
			volumeSlider.value = currentEmbed.volume;
		}
	});
}

/**
 * Add listener for status change events emitted by the VbrickEmbed instance
 * @param {import("..").IVbrickVideoEmbed | import("..").IVbrickWebcastEmbed} currentEmbed 
 */
function trackStatusChangess(currentEmbed) {
	const statusEvents = ['playerStatusChanged', 'videoLoaded', 'webcastLoaded', 'webcastStarted', 'webcastEnded', 'broadcastStarted', 'broadcastStopped'];

	const webcastStatusEl = document.getElementById('webcastStatus');
	const playerStatusEl = document.getElementById('playerStatus');

	statusEvents.forEach(e => currentEmbed.on(e, data => {
		playerStatusEl.innerText = currentEmbed.playerStatus;
		webcastStatusEl.innerText = currentEmbed.webcastStatus;
	}));
}


console.log('Welcome to the Vbrick SDK Embed Test page. When rendered the current video player instance is set to window.vbrickEmbed');
