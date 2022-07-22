/******/ var __webpack_modules__ = ({

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveConfig": function() { return /* binding */ resolveConfig; }
/* harmony export */ });
function resolveConfig(configuration) {
  const cfg = Object.assign({}, configuration);
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
    /**
     * @internal
     */
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
/**
 * @public
 */
var TokenType;

(function (TokenType) {
  TokenType["JWT"] = "JWT";
  TokenType["ACCESS_TOKEN"] = "AccessToken";
  TokenType["GUEST_REGISTRATION"] = "GuestRegistration";
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
 * Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.
 * @public
 * @param element - Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.
 * @param videoId - ID of the video to embed
 * @param config - A configuration object
 * @returns An {@link IVbrickVideoEmbed} object
 */

function embedVideo(element, videoId, config) {
  const el = (0,_util__WEBPACK_IMPORTED_MODULE_1__.lookupElement)(element);
  const cfg = (0,_Config__WEBPACK_IMPORTED_MODULE_2__.resolveConfig)(config);
  const video = new _VbrickVideoEmbed__WEBPACK_IMPORTED_MODULE_0__.VbrickVideoEmbed(videoId, cfg, el);
  video.initialize().catch(() => {});
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
 * @public
 * @param element - Either a CSS selector string or HTML Element where the embed content will be rendered
 * @param webcastId - ID of the webcast to embed
 * @param config - A configuration object
 * @returns An {@link IVbrickWebcastEmbed} object
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
  webcast.initialize().catch(() => {});
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
// default to 30 second timeout on authentication/SDK communication
const DEFAULT_TIMEOUT = 30 * 1000;
/**
 * @internal
 */

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

  awaitEvent(event) {
    let failEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';
    let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_TIMEOUT;
    const events = Array.isArray(event) ? event : [event];
    return new Promise((resolve, reject) => {
      const handler = fn => e => {
        fn(e);
        offHandlers.forEach(h => h());
      };

      const onEvent = handler(resolve);
      const onErr = handler(reject);
      const offHandlers = events.map(evt => this.on(evt, onEvent));

      if (failEvent) {
        offHandlers.push(this.on(failEvent, onErr));
      }

      if (timeout > 0) {
        const timer = setTimeout(() => {
          if (this.isDestroyed) {
            return;
          }

          onErr(event + ': timeout');
        }, timeout);
        offHandlers.push(() => clearTimeout(timer));
      }
    });
  }

  off(event, fn) {
    const handlers = this.getHandlers(event);
    const i = handlers.indexOf(fn);

    if (i >= 0) {
      handlers.splice(i, 1);
    }
  }
  /** Posts a message to the embed */


  publish() {
    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
      _ref[_key] = arguments[_key];
    }

    let [event, msg = undefined] = _ref;
    this.shouldLog && console.log('rev client posting message. ', event);
    this.win.postMessage({
      app: 'vbrick',
      event,
      msg
    }, this.baseUrl);
  }
  /** Posts an 'error' message to the embed */


  publishError(msg) {
    this.win.postMessage({
      app: 'vbrick',
      event: 'error',
      msg
    }, this.baseUrl);
  }
  /** Fires local event handlers */


  emitLocalEvent(event) {
    let msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    this.callHandlers(event, msg);
  }
  /** Calls the local 'error' event handlers */


  emitLocalError(msg, err) {
    this.callHandlers('error', {
      msg,
      err
    });
  }

  handleMessage(e) {
    const data = e.data || {};

    if (e.origin !== this.baseUrl || data.app !== 'vbrick' || !data.event) {
      this.shouldLog && console.log('rev SDK dropping inbound message. ', e.data);
      return;
    }

    const shouldLog = this.shouldLog && data.event !== 'currentTime';
    shouldLog && console.log('rev SDK inbound message. ', e.data);
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

/***/ "./src/embed/IVbrickApi.ts":
/*!*********************************!*\
  !*** ./src/embed/IVbrickApi.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerStatus": function() { return /* reexport safe */ _PlayerStatus__WEBPACK_IMPORTED_MODULE_1__.PlayerStatus; },
/* harmony export */   "WebcastStatus": function() { return /* reexport safe */ _WebcastStatus__WEBPACK_IMPORTED_MODULE_0__.WebcastStatus; }
/* harmony export */ });
/* harmony import */ var _WebcastStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebcastStatus */ "./src/embed/WebcastStatus.ts");
/* harmony import */ var _PlayerStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerStatus */ "./src/embed/PlayerStatus.ts");
/* harmony import */ var _IVbrickTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IVbrickTypes */ "./src/embed/IVbrickTypes.ts");




/***/ }),

/***/ "./src/embed/IVbrickTypes.ts":
/*!***********************************!*\
  !*** ./src/embed/IVbrickTypes.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/embed/PlayerStatus.ts":
/*!***********************************!*\
  !*** ./src/embed/PlayerStatus.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerStatus": function() { return /* binding */ PlayerStatus; }
/* harmony export */ });
/**
 * @public
 */
var PlayerStatus;

(function (PlayerStatus) {
  PlayerStatus["Initializing"] = "Initializing";
  PlayerStatus["Playing"] = "Playing";
  PlayerStatus["Paused"] = "Paused";
  PlayerStatus["Buffering"] = "Buffering";
  PlayerStatus["Seeking"] = "Seeking";
  PlayerStatus["Ended"] = "Ended";
  PlayerStatus["Error"] = "Error";
})(PlayerStatus || (PlayerStatus = {}));

/***/ }),

/***/ "./src/embed/VbrickEmbed.ts":
/*!**********************************!*\
  !*** ./src/embed/VbrickEmbed.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VbrickEmbed": function() { return /* binding */ VbrickEmbed; },
/* harmony export */   "getEmbedQuery": function() { return /* binding */ getEmbedQuery; }
/* harmony export */ });
/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventBus */ "./src/embed/EventBus.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Log */ "./src/Log.ts");
/* harmony import */ var _IVbrickApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IVbrickApi */ "./src/embed/IVbrickApi.ts");
/* harmony import */ var _VbrickSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VbrickSDK */ "./src/VbrickSDK.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./src/embed/auth.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






/**
 * Base class for embedded content.
 */

class VbrickEmbed {
  constructor(id, config, container) {
    this.config = config;
    this.container = container;
    this._playerStatus = _IVbrickApi__WEBPACK_IMPORTED_MODULE_2__.PlayerStatus.Initializing;
    this._currentSubtitles = {
      enabled: false
    };
    this.iframeUrl = this.getEmbedUrl(id, this.config);
    this.logger = (0,_Log__WEBPACK_IMPORTED_MODULE_1__.getLogger)(this.config);
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
   * Whether subtitles are enabled, and selected language
   */


  get currentSubtitles() {
    return this._currentSubtitles;
  }

  get isLive() {
    var _a;

    return (_a = this.info) === null || _a === void 0 ? void 0 : _a.isLive;
  }

  get info() {
    return this._info;
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
  /**
   * update the current subtitles settings
   * @param subtitles enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)
   */


  setSubtitles(subtitles) {
    this.eventBus.publish('setSubtitles', subtitles);
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
    const timeout = this.config.timeoutSeconds * 1000 || undefined;
    return this.init = Promise.all([this.initializeToken(), this.eventBus.awaitEvent('load', 'error', timeout)]).then(_ref => {
      let [token] = _ref;

      if (!token) {
        return;
      }

      this.logger.log('embed loaded, authenticating');
      this.eventBus.publish('authenticated', {
        token
      });
      this.eventBus.awaitEvent('authChanged', 'error', timeout);
    }).catch(err => {
      this._playerStatus = _IVbrickApi__WEBPACK_IMPORTED_MODULE_2__.PlayerStatus.Error;
      this.logger.error('Embed initialization error: ', err);
      this.eventBus.publishError('initializationFailed');
      this.eventBus.emitLocalError('Error loading embed content', err);
      return Promise.reject(err);
    });
  }

  initializeToken() {
    if (!this.config.token) {
      return Promise.resolve();
    }

    switch (this.config.token.type) {
      case _VbrickSDK__WEBPACK_IMPORTED_MODULE_3__.TokenType.ACCESS_TOKEN:
        return (0,_auth__WEBPACK_IMPORTED_MODULE_4__.authenticateAccessToken)(this.config);

      case _VbrickSDK__WEBPACK_IMPORTED_MODULE_3__.TokenType.JWT:
        return (0,_auth__WEBPACK_IMPORTED_MODULE_4__.authenticateJWT)(this.config);

      default:
        return Promise.reject('Unsupported token type');
    }
  }

  initializeEmbed() {
    this.eventBus.on('videoLoaded', e => {
      this._info = e;
      this._playerStatus = _IVbrickApi__WEBPACK_IMPORTED_MODULE_2__.PlayerStatus.Paused;
    }); //don't include status in information, since it can change

    this.eventBus.on('webcastLoaded', _a => {
      var {
        status
      } = _a,
          info = __rest(_a, ["status"]);

      this._info = info;
    });
    this.eventBus.on('playerStatusChanged', e => this._playerStatus = e.status);
    this.eventBus.on('subtitlesChanged', subtitles => {
      this._currentSubtitles = subtitles;
    });
  }

  on(event, listener) {
    //ensure internal updates take effect before calling client handlers
    this.eventBus.on(event, e => setTimeout(() => listener(e)));
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

  updateToken(newToken) {
    return __awaiter(this, void 0, void 0, function* () {
      this.config.token = newToken;

      try {
        const token = yield this.initializeToken();
        this.eventBus.publish('authChanged', {
          token
        });
        yield this.eventBus.awaitEvent('authChanged', 'error');
      } catch (error) {
        this.logger.error('Error updating token: ', error);
        throw error;
      }
    });
  }

}
/**
 * parses a config object and converts into query parameters for the iframe embed URL
 * @param config
 */

function getEmbedQuery(config) {
  return {
    tk: !!config.token,
    popupAuth: !config.token && (config.popupAuth ? 'true' : 'false'),
    accent: config.accentColor,
    autoplay: config.autoplay,
    forceClosedCaptions: config.forcedCaptions,
    loopVideo: config.playInLoop,
    noCc: config.hideSubtitles,
    noCenterButtons: config.hideOverlayControls,
    noChapters: config.hideChapters,
    noFullscreen: config.hideFullscreen,
    noPlayBar: config.hidePlayControls,
    noSettings: config.hideSettings,
    startAt: config.startAt
  };
}

/***/ }),

/***/ "./src/embed/VbrickEmbedConfig.ts":
/*!****************************************!*\
  !*** ./src/embed/VbrickEmbedConfig.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _VbrickEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VbrickEmbed */ "./src/embed/VbrickEmbed.ts");


/**
 * Internal class used to model an embedded video
 */

class VbrickVideoEmbed extends _VbrickEmbed__WEBPACK_IMPORTED_MODULE_1__.VbrickEmbed {
  constructor(id, config, container) {
    super(id, config, container);
  }
  /**
   * Current position in video in seconds
   */


  get currentTime() {
    return this._currentTime;
  }
  /**
   * Duration of video in seconds. Will be undefined for live content
   */


  get duration() {
    var _a;

    return (_a = this.info) === null || _a === void 0 ? void 0 : _a.duration;
  }
  /**
   * Contains metadata for the video
   * @deprecated Use `info` instead
   */


  get videoInfo() {
    return this.info;
  }
  /**
   * sets playback rate
   * @param speed {number} 0-16, default is 1
   */


  setPlaybackSpeed(speed) {
    if (this.isLive) {
      this.logger.log('Live video, cannot change speed');
      return;
    }

    this.eventBus.publish('setPlaybackSpeed', {
      speed
    });
  }
  /**
   * sets the current time in the video
   * @param currentTime {number} 0 - video duration
   */


  seek(currentTime) {
    if (this.isLive) {
      this.logger.log('Live video, seek');
      return;
    }

    this.eventBus.publish('seek', {
      currentTime
    });
  }

  initializeEmbed() {
    super.initializeEmbed();
    this.eventBus.on('currentTime', e => {
      this._currentTime = e.currentTime; // update duration in videoInfo?
    });
  }

  getEmbedUrl(id, config) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.getEmbedUrl)(config.baseUrl, '/embed', Object.assign({
      id
    }, (0,_VbrickEmbed__WEBPACK_IMPORTED_MODULE_1__.getEmbedQuery)(config)));
  }

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
/* harmony import */ var _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VbrickSDK */ "./src/VbrickSDK.ts");
/* harmony import */ var _IVbrickApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IVbrickApi */ "./src/embed/IVbrickApi.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/embed/auth.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _VbrickEmbed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VbrickEmbed */ "./src/embed/VbrickEmbed.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






class VbrickWebcastEmbed extends _VbrickEmbed__WEBPACK_IMPORTED_MODULE_4__.VbrickEmbed {
  constructor(webcastId, config, container) {
    super(webcastId, config, container);
    this.webcastId = webcastId;
    this._webcastStatus = _IVbrickApi__WEBPACK_IMPORTED_MODULE_1__.WebcastStatus.Loading;
  }

  get webcastStatus() {
    return this._webcastStatus;
  }

  initializeToken() {
    var _a;

    const {
      type,
      issuer
    } = (_a = this.config.token) !== null && _a !== void 0 ? _a : {};

    if (type === _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__.TokenType.GUEST_REGISTRATION || type === _VbrickSDK__WEBPACK_IMPORTED_MODULE_0__.TokenType.JWT && issuer === 'vbrick_rev') {
      return (0,_auth__WEBPACK_IMPORTED_MODULE_2__.authenticateGuestToken)(this.webcastId, this.config);
    }

    return super.initializeToken();
  }

  initializeEmbed() {
    const _super = Object.create(null, {
      initializeEmbed: {
        get: () => super.initializeEmbed
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      _super.initializeEmbed.call(this);

      ['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach(event => {
        this.eventBus.on(event, data => this._webcastStatus = data.status);
      });
      this.eventBus.on('webcastLoaded', e => {
        this._webcastStatus = e.status; // start initially with hidden slides

        if (this.config.showFullWebcast) {
          this.updateLayout({
            video: true,
            presentation: false
          });
        }
      }); // if a webcast is completed it may redirect to a recoreded version of it

      this.eventBus.on('videoLoaded', () => {
        this._webcastStatus = _IVbrickApi__WEBPACK_IMPORTED_MODULE_1__.WebcastStatus.Completed;
      });
    });
  }

  updateLayout(layout) {
    this.eventBus.publish('updateLayout', layout);
  }

  getEmbedUrl(id, config) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_3__.getEmbedUrl)(config.baseUrl, `/embed/webcast/${id}`, Object.assign({
      enableFullRev: config.showFullWebcast
    }, (0,_VbrickEmbed__WEBPACK_IMPORTED_MODULE_4__.getEmbedQuery)(config)));
  }

}

/***/ }),

/***/ "./src/embed/WebcastStatus.ts":
/*!************************************!*\
  !*** ./src/embed/WebcastStatus.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcastStatus": function() { return /* binding */ WebcastStatus; }
/* harmony export */ });
/**
 * @public
 */
var WebcastStatus;

(function (WebcastStatus) {
  /**
   * Embedded webcast is authenticating
   */
  WebcastStatus["Loading"] = "Loading";
  /**
   * Embedded webcast is authenticated and waiting for webcast to start
   */

  WebcastStatus["Scheduled"] = "Scheduled";
  /**
   * Webcast is active (but not currently Broadcasting)
   */

  WebcastStatus["InProgress"] = "InProgress";
  /**
   * Webcast is active with video stream
   */

  WebcastStatus["Broadcasting"] = "Broadcasting";
  /**
   * Webcast has ended
   */

  WebcastStatus["Completed"] = "Completed";
  /**
   * Fatal error embedding webcast
   */

  WebcastStatus["Error"] = "Error";
})(WebcastStatus || (WebcastStatus = {}));

/***/ }),

/***/ "./src/embed/auth.ts":
/*!***************************!*\
  !*** ./src/embed/auth.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticateAccessToken": function() { return /* binding */ authenticateAccessToken; },
/* harmony export */   "authenticateGuestToken": function() { return /* binding */ authenticateGuestToken; },
/* harmony export */   "authenticateJWT": function() { return /* binding */ authenticateJWT; }
/* harmony export */ });
function authenticateAccessToken(config) {
  var _a;

  return Promise.resolve({
    accessToken: (_a = config.token) === null || _a === void 0 ? void 0 : _a.value
  });
}
function authenticateGuestToken(webcastId, config) {
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
function authenticateJWT(config) {
  const issuer = config.token.issuer;
  const jwt = config.token.value;
  const url = new URL('/api/v2/jwtauthenticate', config.baseUrl);
  url.searchParams.set('jwt_token', jwt);
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'x-requested-with': 'xmlhttprequest'
    }
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
/* harmony export */   "getEmbedUrl": function() { return /* binding */ getEmbedUrl; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "lookupElement": function() { return /* binding */ lookupElement; }
/* harmony export */ });
/**
 * @internal
 */
function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
}
/**
 * @internal
 */

function lookupElement(element) {
  const el = element instanceof HTMLElement ? element : document.querySelector(element);

  if (!el) {
    throw new Error('Rev SDK Error: Could not resolve element');
  }

  return el;
}
function getEmbedUrl(baseUrl, endpoint, params) {
  const query = Object.entries(params).map(_ref => {
    let [key, value] = _ref;
    return !value ? undefined : value === true ? key : `${key}=${encodeURIComponent(value)}`;
  }).filter(Boolean).join('&');
  return `${baseUrl}${endpoint}?${query}`;
}

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
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
/* harmony export */   "PlayerStatus": function() { return /* reexport safe */ _embed_IVbrickApi__WEBPACK_IMPORTED_MODULE_4__.PlayerStatus; },
/* harmony export */   "TokenType": function() { return /* reexport safe */ _VbrickSDK__WEBPACK_IMPORTED_MODULE_2__.TokenType; },
/* harmony export */   "WebcastStatus": function() { return /* reexport safe */ _embed_IVbrickApi__WEBPACK_IMPORTED_MODULE_4__.WebcastStatus; },
/* harmony export */   "embedVideo": function() { return /* reexport safe */ _embed_EmbedVideo__WEBPACK_IMPORTED_MODULE_1__.embedVideo; },
/* harmony export */   "embedWebcast": function() { return /* reexport safe */ _embed_EmbedWebcast__WEBPACK_IMPORTED_MODULE_0__.embedWebcast; }
/* harmony export */ });
/* harmony import */ var _embed_EmbedWebcast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embed/EmbedWebcast */ "./src/embed/EmbedWebcast.ts");
/* harmony import */ var _embed_EmbedVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embed/EmbedVideo */ "./src/embed/EmbedVideo.ts");
/* harmony import */ var _VbrickSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VbrickSDK */ "./src/VbrickSDK.ts");
/* harmony import */ var _embed_VbrickEmbedConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embed/VbrickEmbedConfig */ "./src/embed/VbrickEmbedConfig.ts");
/* harmony import */ var _embed_IVbrickApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./embed/IVbrickApi */ "./src/embed/IVbrickApi.ts");
/* harmony import */ var _embed_PlayerStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./embed/PlayerStatus */ "./src/embed/PlayerStatus.ts");
/* harmony import */ var _embed_WebcastStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./embed/WebcastStatus */ "./src/embed/WebcastStatus.ts");
/**
 * A javascript SDK for embedding or calling rev APIs
 *
 * @packageDocumentation
 */










/**
 * @public
 */

const revSDK = {
  embedWebcast: _embed_EmbedWebcast__WEBPACK_IMPORTED_MODULE_0__.embedWebcast,
  embedVideo: _embed_EmbedVideo__WEBPACK_IMPORTED_MODULE_1__.embedVideo,
  TokenType: _VbrickSDK__WEBPACK_IMPORTED_MODULE_2__.TokenType,
  PlayerStatus: _embed_PlayerStatus__WEBPACK_IMPORTED_MODULE_5__.PlayerStatus,
  WebcastStatus: _embed_WebcastStatus__WEBPACK_IMPORTED_MODULE_6__.WebcastStatus
};
/* harmony default export */ __webpack_exports__["default"] = (revSDK);
}();
var __webpack_exports__PlayerStatus = __webpack_exports__.PlayerStatus;
var __webpack_exports__TokenType = __webpack_exports__.TokenType;
var __webpack_exports__WebcastStatus = __webpack_exports__.WebcastStatus;
var __webpack_exports__default = __webpack_exports__["default"];
var __webpack_exports__embedVideo = __webpack_exports__.embedVideo;
var __webpack_exports__embedWebcast = __webpack_exports__.embedWebcast;
export { __webpack_exports__PlayerStatus as PlayerStatus, __webpack_exports__TokenType as TokenType, __webpack_exports__WebcastStatus as WebcastStatus, __webpack_exports__default as default, __webpack_exports__embedVideo as embedVideo, __webpack_exports__embedWebcast as embedWebcast };

//# sourceMappingURL=rev-sdk.esm.js.map