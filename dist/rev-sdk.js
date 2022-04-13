(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["revSdk"] = factory();
	else
		root["revSdk"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultConfig": function() { return /* binding */ setDefaultConfig; },
/* harmony export */   "resolveConfig": function() { return /* binding */ resolveConfig; }
/* harmony export */ });
let defaultConfig = {
  showVideo: true
};
/**
 * Assign default configuration values that will be applied to future api calls.
 * @param configuration A configuration object.
 *
 * @example
 * Presetting a rev URL:
 * ```
 * revSdk.setDefaultConfig({ baseUrl: 'https://rev1.site.com' })
 * ```
 */

function setDefaultConfig(configuration) {
  defaultConfig = Object.assign(Object.assign({}, defaultConfig), configuration);
}
function resolveConfig(configuration) {
  const cfg = Object.assign(Object.assign({}, defaultConfig), configuration);
  validateConfig(cfg);
  return cfg;
}

function validateConfig(cfg) {
  var _a;

  if (!((_a = cfg.baseUrl) === null || _a === void 0 ? void 0 : _a.match(/^https?:\/\//))) {
    throw new Error('Rev SDK Error: baseUrl invalid');
  }
}

/***/ }),

/***/ "./src/Log.ts":
/*!********************!*\
  !*** ./src/Log.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; }
/* harmony export */ });
function getLogger(cfg) {
  return cfg.log ? console : {
    log: noop,
    error: noop
  };
}

function noop() {}

/***/ }),

/***/ "./src/VbrickSDK.ts":
/*!**************************!*\
  !*** ./src/VbrickSDK.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenType": function() { return /* binding */ TokenType; }
/* harmony export */ });
var TokenType;

(function (TokenType) {
  TokenType["JWT"] = "JWT";
  TokenType["ACCESS_TOKEN"] = "AccessToken";
})(TokenType || (TokenType = {}));

/***/ }),

/***/ "./src/embed/EmbedVideo.ts":
/*!*********************************!*\
  !*** ./src/embed/EmbedVideo.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedVideo": function() { return /* binding */ embedVideo; }
/* harmony export */ });
/* harmony import */ var _VbrickVideoEmbed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VbrickVideoEmbed */ "./src/embed/VbrickVideoEmbed.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");



/**
 *
 * @param element Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.
 * @param videoId
 * @param config
 * @returns
 */

function embedVideo(element, videoId, config) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_1__.lookupElement)(element);
  const cfg = (0,_Config__WEBPACK_IMPORTED_MODULE_2__.resolveConfig)(config);
  const video = new _VbrickVideoEmbed__WEBPACK_IMPORTED_MODULE_0__.VbrickVideoEmbed(videoId, cfg, el);
  video.initialize();
  return video;
}

/***/ }),

/***/ "./src/embed/EmbedWebcast.ts":
/*!***********************************!*\
  !*** ./src/embed/EmbedWebcast.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedWebcast": function() { return /* binding */ embedWebcast; }
/* harmony export */ });
/* harmony import */ var _VbrickWebcastEmbed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VbrickWebcastEmbed */ "./src/embed/VbrickWebcastEmbed.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");



/**
 * Embeds a webcast on the page
 * @param element  Either a CSS selector string or HTML Element where the embed content will be rendered
 * @param webcastId
 * @param config A configuration object
 * @returns An {@linkcode IVbrickWebcastConfig} object
 *
 * @example
 * Embedding a webcast:
 * ```
 * //In HTML:  <div id="webcast-embed"></div>
 *
 * const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
 * revSdk.embedWebcast('#webcast-embed', webcastId, {
 *     showVideo: true,
 *     token
 * });
 * ```
 *
 */

function embedWebcast(element, webcastId, config) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_1__.lookupElement)(element);
  const cfg = (0,_Config__WEBPACK_IMPORTED_MODULE_2__.resolveConfig)(config);
  const webcast = new _VbrickWebcastEmbed__WEBPACK_IMPORTED_MODULE_0__.VbrickWebcastEmbed(webcastId, cfg, el);
  webcast.initialize();
  return webcast;
}

/***/ }),

/***/ "./src/embed/EventBus.ts":
/*!*******************************!*\
  !*** ./src/embed/EventBus.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBus": function() { return /* binding */ EventBus; }
/* harmony export */ });
class EventBus {
  constructor(iframe, config) {
    this.isDestroyed = false;
    this.eventHandlers = {};
    this.win = iframe.contentWindow;
    this.msgListener = this.handleMessage.bind(this);
    globalThis.addEventListener('message', this.msgListener);
    this.baseUrl = config.baseUrl;
    this.shouldLog = !!config.log;
  }

  on(event, fn) {
    const handlers = this.getHandlers(event);
    handlers.push(fn);
    return () => this.off(event, fn);
  }

  awaitEvent(event, failEvent, timeout = 30000) {
    return new Promise((resolve, reject) => {
      const handler = fn => e => {
        fn(e);
        this.off(event, onEvent);
        this.off(failEvent, onErr);
        clearTimeout(timer);
      };

      const onEvent = handler(resolve);
      const onErr = handler(reject);
      this.on(event, onEvent);

      if (failEvent) {
        this.on(failEvent, onErr);
      }

      const timer = setTimeout(() => {
        if (this.isDestroyed) {
          return;
        }

        onErr(event + ': timeout');
      }, timeout);
    });
  }

  off(event, fn) {
    const handlers = this.getHandlers(event);
    const i = handlers.indexOf(fn);

    if (i >= 0) {
      handlers.splice(i, 1);
    }
  }

  publish(event, msg) {
    this.shouldLog && console.log('rev client posting message. ', event);
    this.win.postMessage({
      app: 'vbrick',
      event,
      msg
    }, this.baseUrl);
  }

  publishError(msg, err) {
    this.callHandlers('error', {
      msg,
      err
    });
    this.win.postMessage({
      app: 'vbrick',
      event: 'error',
      msg
    }, this.baseUrl);
  }

  handleMessage(e) {
    const data = e.data || {};

    if (e.origin !== this.baseUrl || data.app !== 'vbrick' || !data.event) {
      this.shouldLog && console.log('rev SDK dropping inbound message. ', e.data);
      return;
    }

    this.shouldLog && console.log('rev SDK inbound message. ', e.data);
    this.callHandlers(data.event, data.msg);
  }

  callHandlers(event, data) {
    const handlers = Array.from(this.getHandlers(event));
    handlers.forEach(h => h(data));
  }

  getHandlers(event) {
    const h = this.eventHandlers;

    if (!h[event]) {
      h[event] = [];
    }

    return h[event];
  }

  destroy() {
    if (this.isDestroyed) {
      return;
    }

    this.isDestroyed = true;
    globalThis.removeEventListener('message', this.msgListener);
  }

}

/***/ }),

/***/ "./src/embed/VbrickEmbed.ts":
/*!**********************************!*\
  !*** ./src/embed/VbrickEmbed.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VbrickEmbed": function() { return /* binding */ VbrickEmbed; }
/* harmony export */ });
/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventBus */ "./src/embed/EventBus.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Log */ "./src/Log.ts");


/**
 * Base class for embedded content.
 */

class VbrickEmbed {
  constructor(iframeUrl, config, container) {
    this.iframeUrl = iframeUrl;
    this.config = config;
    this.container = container;
    this.logger = (0,_Log__WEBPACK_IMPORTED_MODULE_1__.getLogger)(this.config);
  }
  /**
   * Indicates the embedded content was initialized and authenticated.
   * If there was a problem loading the content, or a problem with the token, the promise will be rejected.
   */


  initialize() {
    if (this.init) {
      return this.init;
    }

    this.iframe = this.render();
    this.eventBus = new _EventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus(this.iframe, this.config);
    this.initializeEmbed();
    this.init = Promise.all([this.initializeToken(), this.eventBus.awaitEvent('load', 'error')]).then(([token]) => {
      this.logger.log('embed loaded, authenticating');
      this.eventBus.publish('authenticated', {
        token
      });
    }).catch(err => {
      this.logger.error('Embed initialization error: ', err);
      this.eventBus.publishError('Error loading embed content', err);
    });
    return this.init;
  }

  on(event, listener) {
    this.eventBus.on(event, listener);
  }

  off(event, listener) {
    this.eventBus.off(event, listener);
  }

  render() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowFullScreen', '');
    iframe.allow = 'autoplay';
    iframe.width = this.config.width || '100%';
    iframe.height = this.config.height || '100%';
    iframe.src = this.iframeUrl;

    if (this.config.className) {
      iframe.className = this.config.className;
    }

    this.container.appendChild(iframe);
    return iframe;
  }

  destroy() {
    var _a;

    this.iframe.remove();
    this.eventBus.destroy();
    this.init = null;
    (_a = this.unsubscribes) === null || _a === void 0 ? void 0 : _a.forEach(fn => fn());
  }

}

/***/ }),

/***/ "./src/embed/VbrickVideoEmbed.ts":
/*!***************************************!*\
  !*** ./src/embed/VbrickVideoEmbed.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VbrickVideoEmbed": function() { return /* binding */ VbrickVideoEmbed; }
/* harmony export */ });
/* harmony import */ var _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VbrickSDK */ "./src/VbrickSDK.ts");
/* harmony import */ var _VbrickEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VbrickEmbed */ "./src/embed/VbrickEmbed.ts");


/**
 * Internal class used to model an embedded video
 */

class VbrickVideoEmbed extends _VbrickEmbed__WEBPACK_IMPORTED_MODULE_1__.VbrickEmbed {
  constructor(videoId, config, container) {
    super(getEmbedUrl(videoId, config), config, container);
  }
  /**
  * video playing, buffering, etc
  */


  get playerStatus() {
    return this._playerStatus;
  }
  /**
  * Player Volume. 0-1
  */


  get volume() {
    return this._volume;
  }
  /**
   * Whether captions are enabled, and selected language
   */


  get captions() {
    return this._captions;
  }
  /**
   * Plays the video if it is paused.
   */


  play() {
    this.eventBus.publish('playVideo');
  }
  /**
    * Pauses the video if it is playing.
    */


  pause() {
    this.eventBus.publish('pauseVideo');
  }
  /**
   * Sets player volume
   * @param volume {number} 0-1
   */


  setVolume(volume) {
    this.eventBus.publish('setVolume', {
      volume
    });
  }

  initializeToken() {
    if (!this.config.token) {
      return Promise.resolve();
    }

    if (this.config.token.type !== _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__.TokenType.ACCESS_TOKEN) {
      return Promise.reject('Unsupported token type');
    }

    return Promise.resolve({
      accessToken: this.config.token.value
    });
  }

  initializeEmbed() {
    this.eventBus.on('playerStatusChanged', e => this._playerStatus = e.status), this.eventBus.on('volumeChanged', e => this._volume = e.volume), this.eventBus.on('captionsChanged', e => this._captions = e.captions);
  }

  destroy() {
    var _a;

    super.destroy();
    (_a = this.unsubscribes) === null || _a === void 0 ? void 0 : _a.forEach(fn => fn());
  }

}

function getEmbedUrl(id, config) {
  const query = [['tk', !!config.token], ['id', id], ['accent', config.accentColor], ['autoplay', config.autoplay], ['forceClosedCaptions', config.forcedCaptions], ['loopVideo', config.playInLoop], ['noCc', config.hideCaptions], ['noCenterButtons', config.hideOverlayControls], ['noChapters', config.hideChapters], ['noFullscreen', config.hideFullscreen], ['noPlayBar', config.hidePlayControls], ['noSettings', config.hideSettings], ['placeholder', config.popOut], ['startAt', config.startAt]].map(([key, value]) => !value ? undefined : value === true ? key : `${key}=${encodeURIComponent(value)}`).filter(Boolean).join('&');
  return `${config.baseUrl}/embed?${query}`;
}

/***/ }),

/***/ "./src/embed/VbrickWebcastEmbed.ts":
/*!*****************************************!*\
  !*** ./src/embed/VbrickWebcastEmbed.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VbrickWebcastEmbed": function() { return /* binding */ VbrickWebcastEmbed; }
/* harmony export */ });
/* harmony import */ var _VbrickEmbed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VbrickEmbed */ "./src/embed/VbrickEmbed.ts");
/* harmony import */ var _webcastAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcastAuth */ "./src/embed/webcastAuth.ts");


class VbrickWebcastEmbed extends _VbrickEmbed__WEBPACK_IMPORTED_MODULE_0__.VbrickEmbed {
  constructor(webcastId, config, container) {
    super(new URL(`/embed/webcast/${webcastId}${config.token ? '?tk' : ''}`, config.baseUrl).toString(), config, container);
    this.webcastId = webcastId;
  }

  get status() {
    return this._status;
  }

  initializeToken() {
    return (0,_webcastAuth__WEBPACK_IMPORTED_MODULE_1__.initializeWebcastToken)(this.webcastId, this.config);
  }

  initializeEmbed() {
    ['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach(event => {
      this.eventBus.on(event, data => this._status = data.status);
    });
    this.eventBus.awaitEvent('webcastLoaded').then(data => {
      this._status = data.status;
    });
  }

}

/***/ }),

/***/ "./src/embed/webcastAuth.ts":
/*!**********************************!*\
  !*** ./src/embed/webcastAuth.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeWebcastToken": function() { return /* binding */ initializeWebcastToken; }
/* harmony export */ });
/* harmony import */ var _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VbrickSDK */ "./src/VbrickSDK.ts");

let promise;
function initializeWebcastToken(webcastId, config) {
  if (!promise) {
    promise = getToken(webcastId, config);
  }

  return promise;
}

function getToken(webcastId, config) {
  var _a, _b;

  if (((_a = config.token) === null || _a === void 0 ? void 0 : _a.type) !== _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__.TokenType.JWT) {
    return Promise.resolve({
      accessToken: (_b = config.token) === null || _b === void 0 ? void 0 : _b.value
    });
  }

  const issuer = config.token.issuer;
  const token = config.token.value;
  return fetch(`${config.baseUrl}/external/auth/jwt/${webcastId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'xmlhttprequest'
    },
    body: `{
				"token": "${issuer} ${token}"
			}`
  }).then(response => {
    if (!response.ok) {
      return Promise.reject('Unable to authenticate jwt');
    }

    return response.json();
  }).then(response => Object.assign(Object.assign({}, response), {
    issuer
  }));
}

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "lookupElement": function() { return /* binding */ lookupElement; }
/* harmony export */ });
function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
}
function lookupElement(element) {
  const el = element instanceof HTMLElement ? element : document.querySelector(element);

  if (!el) {
    throw new Error('Rev SDK Error: Could not resolve element');
  }

  return el;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultConfig": function() { return /* reexport safe */ _Config__WEBPACK_IMPORTED_MODULE_0__.setDefaultConfig; },
/* harmony export */   "embedWebcast": function() { return /* reexport safe */ _embed_EmbedWebcast__WEBPACK_IMPORTED_MODULE_1__.embedWebcast; },
/* harmony export */   "embedVideo": function() { return /* reexport safe */ _embed_EmbedVideo__WEBPACK_IMPORTED_MODULE_2__.embedVideo; }
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/Config.ts");
/* harmony import */ var _embed_EmbedWebcast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embed/EmbedWebcast */ "./src/embed/EmbedWebcast.ts");
/* harmony import */ var _embed_EmbedVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embed/EmbedVideo */ "./src/embed/EmbedVideo.ts");
/**
 * A javascript SDK for embedding or calling rev APIs
 *
 * @packageDocumentation
 */



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rev-sdk.js.map