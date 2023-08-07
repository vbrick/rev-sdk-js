// src/util.ts
function lookupElement(element) {
  const el = element instanceof HTMLElement ? element : document.querySelector(element);
  if (!el) {
    throw new Error("Rev SDK Error: Could not resolve element");
  }
  return el;
}
function getEmbedUrl(baseUrl, endpoint, params) {
  const query = Object.entries(params).map(([key, value]) => !value ? void 0 : value === true ? key : `${key}=${encodeURIComponent(value)}`).filter(Boolean).join("&");
  return `${baseUrl}${endpoint}?${query}`;
}

// src/embed/EventBus.ts
var DEFAULT_TIMEOUT = 30 * 1e3;
var EventBus = class {
  constructor(iframe, config) {
    this.isDestroyed = false;
    this.eventHandlers = {};
    this.win = iframe.contentWindow;
    this.msgListener = this.handleMessage.bind(this);
    globalThis.addEventListener("message", this.msgListener);
    this.baseUrl = config.baseUrl;
    this.shouldLog = !!config.log;
  }
  on(event, fn) {
    const handlers = this.getHandlers(event);
    handlers.push(fn);
    return () => this.off(event, fn);
  }
  awaitEvent(event, failEvent = "error", timeout = DEFAULT_TIMEOUT) {
    const events = Array.isArray(event) ? event : [event];
    return new Promise((resolve, reject) => {
      const handler = (fn) => (e) => {
        fn(e);
        offHandlers.forEach((h) => h());
      };
      const onEvent = handler(resolve);
      const onErr = handler(reject);
      const offHandlers = events.map((evt) => this.on(evt, onEvent));
      if (failEvent) {
        offHandlers.push(this.on(failEvent, onErr));
      }
      if (timeout > 0) {
        const timer = setTimeout(() => {
          if (this.isDestroyed) {
            return;
          }
          onErr(event + ": timeout");
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
  publish(...[event, msg = void 0]) {
    this.shouldLog && console.log("rev client posting message. ", event);
    this.win.postMessage({
      app: "vbrick",
      event,
      msg
    }, this.baseUrl);
  }
  /** Posts an 'error' message to the embed */
  publishError(msg) {
    this.win.postMessage({
      app: "vbrick",
      event: "error",
      msg
    }, this.baseUrl);
  }
  /** Fires local event handlers */
  emitLocalEvent(event, msg = void 0) {
    this.callHandlers(event, msg);
  }
  /** Calls the local 'error' event handlers */
  emitLocalError(msg, err) {
    this.callHandlers("error", { msg, err });
  }
  handleMessage(e) {
    const data = e.data || {};
    if (e.origin !== this.baseUrl || data.app !== "vbrick" || !data.event) {
      this.shouldLog && console.log("rev SDK dropping inbound message. ", e.data);
      return;
    }
    const shouldLog = this.shouldLog && data.event !== "currentTime";
    shouldLog && console.log("rev SDK inbound message. ", e.data);
    this.callHandlers(data.event, data.msg);
  }
  callHandlers(event, data) {
    const handlers = Array.from(this.getHandlers(event));
    handlers.forEach((h) => h(data));
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
    globalThis.removeEventListener("message", this.msgListener);
  }
};

// src/Log.ts
function getLogger(cfg) {
  return cfg.log ? console : {
    /**
     * @internal
     */
    log: noop,
    error: noop
  };
}
function noop() {
}

// src/embed/WebcastStatus.ts
var WebcastStatus = /* @__PURE__ */ ((WebcastStatus2) => {
  WebcastStatus2["Loading"] = "Loading";
  WebcastStatus2["Scheduled"] = "Scheduled";
  WebcastStatus2["InProgress"] = "InProgress";
  WebcastStatus2["Broadcasting"] = "Broadcasting";
  WebcastStatus2["Completed"] = "Completed";
  WebcastStatus2["Error"] = "Error";
  return WebcastStatus2;
})(WebcastStatus || {});

// src/embed/PlayerStatus.ts
var PlayerStatus = /* @__PURE__ */ ((PlayerStatus2) => {
  PlayerStatus2["Initializing"] = "Initializing";
  PlayerStatus2["Playing"] = "Playing";
  PlayerStatus2["Paused"] = "Paused";
  PlayerStatus2["Buffering"] = "Buffering";
  PlayerStatus2["Seeking"] = "Seeking";
  PlayerStatus2["Ended"] = "Ended";
  PlayerStatus2["Error"] = "Error";
  return PlayerStatus2;
})(PlayerStatus || {});

// src/VbrickSDK.ts
var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2["JWT"] = "JWT";
  TokenType2["ACCESS_TOKEN"] = "AccessToken";
  TokenType2["GUEST_REGISTRATION"] = "GuestRegistration";
  return TokenType2;
})(TokenType || {});

// src/embed/auth.ts
function authenticateAccessToken(config) {
  var _a;
  return Promise.resolve({
    accessToken: (_a = config.token) == null ? void 0 : _a.value
  });
}
function authenticateGuestToken(webcastId, config) {
  const issuer = config.token.issuer;
  const token = config.token.value;
  return fetch(`${config.baseUrl}/external/auth/jwt/${webcastId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "xmlhttprequest"
    },
    body: `{
				"token": "${issuer} ${token}"
			}`
  }).then((response) => {
    if (!response.ok) {
      return Promise.reject("Unable to authenticate jwt");
    }
    return response.json();
  }).then((response) => ({
    ...response,
    issuer
  }));
}
function authenticateJWT(config) {
  const issuer = config.token.issuer;
  const jwt = config.token.value;
  const url = new URL("/api/v2/jwtauthenticate", config.baseUrl);
  url.searchParams.set("jwt_token", jwt);
  return fetch(`${url}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "x-requested-with": "xmlhttprequest"
    }
  }).then((response) => {
    if (!response.ok) {
      return Promise.reject("Unable to authenticate jwt");
    }
    return response.json();
  }).then((response) => ({
    ...response,
    issuer
  }));
}

// src/embed/VbrickEmbed.ts
var VbrickEmbed = class {
  constructor(id, config, container) {
    this.config = config;
    this.container = container;
    this._playerStatus = "Initializing" /* Initializing */;
    this._currentSubtitles = { enabled: false };
    this.iframeUrl = this.getEmbedUrl(id, this.config);
    this.logger = getLogger(this.config);
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
    return !!((_a = this.info) == null ? void 0 : _a.isLive);
  }
  get info() {
    return this._info;
  }
  /**
   * Plays the video if it is paused.
   */
  play() {
    this.eventBus.publish("playVideo");
  }
  /**
    * Pauses the video if it is playing.
    */
  pause() {
    this.eventBus.publish("pauseVideo");
  }
  /**
   * Sets player volume
   * @param volume {number} 0-1
   */
  setVolume(volume) {
    this.eventBus.publish("setVolume", { volume });
  }
  /**
   * update the current subtitles settings
   * @param subtitles enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)
   */
  setSubtitles(subtitles) {
    this.eventBus.publish("setSubtitles", subtitles);
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
    this.eventBus = new EventBus(this.iframe, this.config);
    this.initializeEmbed();
    const timeout = this.config.timeoutSeconds * 1e3 || void 0;
    return this.init = Promise.all([
      this.initializeToken(),
      this.eventBus.awaitEvent("load", "error", timeout)
    ]).then(([token]) => {
      if (!token) {
        return;
      }
      this.logger.log("embed loaded, authenticating");
      this.eventBus.publish("authenticated", { token });
      this.eventBus.awaitEvent("authChanged", "error", timeout);
    }).catch((err) => {
      this._playerStatus = "Error" /* Error */;
      this.logger.error("Embed initialization error: ", err);
      this.eventBus.publishError("initializationFailed");
      this.eventBus.emitLocalError("Error loading embed content", err);
      return Promise.reject(err);
    });
  }
  initializeToken() {
    if (!this.config.token) {
      return Promise.resolve();
    }
    switch (this.config.token.type) {
      case "AccessToken" /* ACCESS_TOKEN */:
        return authenticateAccessToken(this.config);
      case "JWT" /* JWT */:
        return authenticateJWT(this.config);
      default:
        return Promise.reject("Unsupported token type");
    }
  }
  initializeEmbed() {
    this.eventBus.on("videoLoaded", (e) => {
      this._info = e;
      this._playerStatus = "Paused" /* Paused */;
    });
    this.eventBus.on("webcastLoaded", ({ status, ...info }) => {
      this._info = info;
    });
    this.eventBus.on("playerStatusChanged", (e) => this._playerStatus = e.status);
    this.eventBus.on("subtitlesChanged", (subtitles) => {
      this._currentSubtitles = subtitles;
    });
    if (this.config.initialVolume != void 0 && isFinite(this.config.initialVolume)) {
      const volumeCallback = (evt) => {
        if (evt.status !== "Playing" /* Playing */) {
          return;
        }
        this.eventBus.off("playerStatusChanged", volumeCallback);
        this.setVolume(this.config.initialVolume);
      };
      this.eventBus.on("playerStatusChanged", volumeCallback);
    }
  }
  on(event, listener) {
    this.eventBus.on(event, (e) => setTimeout(() => listener(e)));
  }
  off(event, listener) {
    this.eventBus.off(event, listener);
  }
  render() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowFullScreen", "");
    iframe.allow = "autoplay";
    iframe.width = this.config.width || "100%";
    iframe.height = this.config.height || "100%";
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
    this.init = void 0;
    (_a = this.unsubscribes) == null ? void 0 : _a.forEach((fn) => fn());
  }
  async updateToken(newToken) {
    this.config.token = newToken;
    try {
      const token = await this.initializeToken();
      this.eventBus.publish("authChanged", { token });
      await this.eventBus.awaitEvent("authChanged", "error");
    } catch (error) {
      this.logger.error("Error updating token: ", error);
      throw error;
    }
  }
};
function getEmbedQuery(config) {
  return {
    tk: !!config.token,
    popupAuth: !config.token && config.popupAuth != void 0 ? (!!config.popupAuth).toString() : void 0,
    accent: config.accentColor ?? config.accent,
    autoplay: config.autoplay,
    forceClosedCaptions: config.forcedCaptions ?? config.forceClosedCaptions,
    loopVideo: config.playInLoop ?? config.loopVideo,
    noCc: config.hideSubtitles ?? config.noCc,
    noCenterButtons: config.hideOverlayControls ?? config.noCenterButtons,
    noChapters: config.hideChapters ?? config.noChapters,
    noFullscreen: config.hideFullscreen ?? config.noFullscreen,
    noPlayBar: config.hidePlayControls ?? config.noPlayBar,
    noSettings: config.hideSettings ?? config.noSettings,
    startAt: config.startAt
  };
}

// src/embed/VbrickVideoEmbed.ts
var VbrickVideoEmbed = class extends VbrickEmbed {
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
    return (_a = this.info) == null ? void 0 : _a.duration;
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
      this.logger.log("Live video, cannot change speed");
      return;
    }
    this.eventBus.publish("setPlaybackSpeed", { speed });
  }
  /**
   * sets the current time in the video
   * @param currentTime {number} 0 - video duration
   */
  seek(currentTime) {
    if (this.isLive) {
      this.logger.log("Live video, seek");
      return;
    }
    this.eventBus.publish("seek", { currentTime });
  }
  initializeEmbed() {
    super.initializeEmbed();
    this.eventBus.on("currentTime", (e) => {
      this._currentTime = e.currentTime;
    });
  }
  getEmbedUrl(id, config) {
    return getEmbedUrl(config.baseUrl, "/embed", {
      id,
      ...getEmbedQuery(config)
    });
  }
};

// src/embed/VbrickWebcastEmbed.ts
function isFullWebcastEnabled(config) {
  return config.showFullWebcast ?? config.enableFullRev;
}
var VbrickWebcastEmbed = class extends VbrickEmbed {
  constructor(webcastId, config, container) {
    super(webcastId, config, container);
    this.webcastId = webcastId;
    this._webcastStatus = "Loading" /* Loading */;
  }
  get webcastStatus() {
    return this._webcastStatus;
  }
  initializeToken() {
    const { type, issuer } = this.config.token ?? {};
    if (type === "GuestRegistration" /* GUEST_REGISTRATION */ || type === "JWT" /* JWT */ && issuer === "vbrick_rev") {
      return authenticateGuestToken(this.webcastId, this.config);
    }
    return super.initializeToken();
  }
  async initializeEmbed() {
    super.initializeEmbed();
    ["webcastStarted", "broadcastStarted", "broadcastStopped", "webcastEnded"].forEach((event) => {
      this.eventBus.on(event, (data) => this._webcastStatus = data.status);
    });
    this.eventBus.on("webcastLoaded", (e) => {
      this._webcastStatus = e.status;
      if (isFullWebcastEnabled(this.config)) {
        this.updateLayout({ video: true, presentation: false });
      }
    });
    this.eventBus.on("videoLoaded", () => {
      this._webcastStatus = "Completed" /* Completed */;
    });
  }
  updateLayout(layout) {
    this.eventBus.publish("updateLayout", layout);
  }
  getEmbedUrl(id, config) {
    return getEmbedUrl(config.baseUrl, `/embed/webcast/${id}`, {
      enableFullRev: isFullWebcastEnabled(config),
      ...getEmbedQuery(config)
    });
  }
};

// src/Config.ts
function resolveConfig(configuration) {
  const cfg = {
    ...configuration
  };
  validateConfig(cfg);
  return cfg;
}
function validateConfig(cfg) {
  var _a;
  if (!((_a = cfg.baseUrl) == null ? void 0 : _a.match(/^https?:\/\//))) {
    throw new Error("Rev SDK Error: baseUrl invalid");
  }
  cfg.baseUrl = new URL(cfg.baseUrl).origin;
}

// src/embed/index.ts
function embedVideo(element, videoId, config) {
  const el = lookupElement(element);
  const cfg = resolveConfig(config);
  const video = new VbrickVideoEmbed(videoId, cfg, el);
  video.initialize().catch(() => {
  });
  return video;
}
function embedWebcast(element, webcastId, config) {
  const el = lookupElement(element);
  const cfg = resolveConfig(config);
  const webcast = new VbrickWebcastEmbed(webcastId, cfg, el);
  webcast.initialize().catch(() => {
  });
  return webcast;
}

// src/index.ts
var revSDK = {
  embedWebcast,
  embedVideo
};
var src_default = revSDK;
export {
  PlayerStatus,
  TokenType,
  WebcastStatus,
  src_default as default,
  embedVideo,
  embedWebcast
};
//# sourceMappingURL=rev-sdk.esm.js.map