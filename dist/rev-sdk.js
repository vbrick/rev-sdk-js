var revSdk = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    PlayerStatus: () => PlayerStatus,
    PlaylistLayout: () => PlaylistLayout,
    TokenType: () => TokenType,
    VideoPlaybackSidebarButton: () => VideoPlaybackSidebarButton,
    WebcastStatus: () => WebcastStatus,
    default: () => src_default,
    embedPlaylist: () => embedPlaylist,
    embedVideo: () => embedVideo,
    embedWebcast: () => embedWebcast
  });

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

  // src/embed/PlaylistLayout.ts
  var PlaylistLayout = /* @__PURE__ */ ((PlaylistLayout2) => {
    PlaylistLayout2["Filmstrip"] = "row";
    PlaylistLayout2["Grid"] = "grid";
    PlaylistLayout2["Slider"] = "slider";
    return PlaylistLayout2;
  })(PlaylistLayout || {});

  // src/embed/IVbrickTypes.ts
  var VideoPlaybackSidebarButton = /* @__PURE__ */ ((VideoPlaybackSidebarButton2) => {
    VideoPlaybackSidebarButton2["AI"] = "ai";
    VideoPlaybackSidebarButton2["CHAPTERS"] = "chapters";
    VideoPlaybackSidebarButton2["COMMENTS"] = "comments";
    VideoPlaybackSidebarButton2["INFO"] = "info";
    VideoPlaybackSidebarButton2["PLAYLIST"] = "playlist";
    VideoPlaybackSidebarButton2["PULSE"] = "pulse";
    VideoPlaybackSidebarButton2["REPORTS"] = "reports";
    VideoPlaybackSidebarButton2["REVIEW"] = "review";
    VideoPlaybackSidebarButton2["SHARE"] = "share";
    return VideoPlaybackSidebarButton2;
  })(VideoPlaybackSidebarButton || {});

  // src/VbrickSDK.ts
  var TokenType = /* @__PURE__ */ ((TokenType2) => {
    TokenType2["JWT"] = "JWT";
    TokenType2["ACCESS_TOKEN"] = "AccessToken";
    TokenType2["GUEST_REGISTRATION"] = "GuestRegistration";
    return TokenType2;
  })(TokenType || {});

  // src/embed/auth.ts
  function authenticateAccessToken(config) {
    return Promise.resolve({
      accessToken: config.token?.value
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
      this._volume = 1;
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
      return !!this.info?.isLive;
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
      this.eventBus.on("volumeChanged", (e) => this._volume = e);
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
      this.iframe.remove();
      this.eventBus.destroy();
      this.init = void 0;
      this.unsubscribes?.forEach((fn) => fn());
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
      popupAuth: config.popupAuth != void 0 ? (!!config.popupAuth).toString() : void 0,
      accent: config.accentColor ?? config.accent,
      autoplay: config.autoplay,
      defaultTheme: config.applyDefaultTheme,
      defaultSidebar: config.defaultSidebar,
      fullPlayer: config.showFullPlayer,
      mobileLayoutBreakPoint: config.mobileLayoutBreakPoint,
      forceClosedCaptions: config.forcedCaptions ?? config.forceClosedCaptions,
      loopVideo: config.playInLoop ?? config.loopVideo,
      noCc: config.hideSubtitles ?? config.noCc,
      noCenterButtons: config.hideOverlayControls ?? config.noCenterButtons,
      noChapters: config.hideChapters ?? config.noChapters,
      noFullscreen: config.hideFullscreen ?? config.noFullscreen,
      noPlayBar: config.hidePlayControls ?? config.noPlayBar,
      noSettings: config.hideSettings ?? config.noSettings,
      noChapterSeek: config.hideChapterNavigation ?? config.noChapterSeek,
      noChapterDisplay: config.hideChapterImages ?? config.noChapterDisplay,
      noChapterMenu: config.hideChapterMenu ?? config.noChapterMenu,
      sidebarFilterQuery: config.sidebarFilterQuery,
      startAt: config.startAt,
      // all sidebar tabs are by default true, so only include if explicitly false
      ...config.showFullPlayer && {
        hideInfo: config.sidebarTabs["info" /* INFO */] === false || config.hideInfo === true,
        hideComments: config.sidebarTabs["comments" /* COMMENTS */] === false || config.hideComments === true,
        hidePulse: config.sidebarTabs["pulse" /* PULSE */] === false || config.hidePulse === true,
        hideReview: config.sidebarTabs["review" /* REVIEW */] === false || config.hideReview === true,
        hidePlaylist: config.sidebarTabs["playlist" /* PLAYLIST */] === false || config.hidePlaylist === true,
        hideChapters: config.sidebarTabs["chapters" /* CHAPTERS */] === false || config.hideChapters === true,
        hideAnalytics: config.sidebarTabs["reports" /* REPORTS */] === false || config.hideAnalytics === true
      }
    };
  }

  // src/embed/VbrickVideoEmbed.ts
  var VbrickVideoEmbed = class extends VbrickEmbed {
    constructor(id, config, container) {
      super(id, config, container);
      this._playbackSpeed = 1;
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
      return this.info?.duration;
    }
    /**
     * Current playback speed
     */
    get playbackSpeed() {
      return this._playbackSpeed;
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
      this.eventBus.on("playbackSpeedChanged", (e) => {
        this._playbackSpeed = e;
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

  // src/embed/VbrickPlaylistEmbed.ts
  var VbrickPlaylistEmbed = class extends VbrickVideoEmbed {
    constructor(id, config, container) {
      super(id, config, container);
      this._index = 0;
    }
    get playlist() {
      return this._playlist;
    }
    get currentIndex() {
      return this._index;
    }
    initializeEmbed() {
      super.initializeEmbed();
      this.eventBus.on("playlistLoaded", (playlist) => {
        this._playlist = playlist;
        if (this.info?.videoId) {
          this._index = getPlaylistIndex(this.playlist, this.info?.videoId) ?? 0;
        }
      });
      this.eventBus.on("videoLoaded", (video) => {
        if (!this.playlist?.videos) {
          return;
        }
        this._index = getPlaylistIndex(this.playlist, video.videoId) ?? 0;
        this.eventBus.emitLocalEvent("playlistItem", {
          index: this._index,
          videoId: this.playlist.videos[this._index].id
        });
      });
    }
    previous() {
      const vid = wrapAt(this.playlist.videos, this._index - 1);
      this.switchVideo(vid.id, true);
    }
    next() {
      const vid = wrapAt(this.playlist.videos, this._index + 1);
      this.switchVideo(vid.id, true);
    }
    switchVideo(videoId, autoplay) {
      this.eventBus.publish("switchVideo", { videoId, autoplay });
    }
    getEmbedUrl(id, config) {
      return getEmbedUrl(config.baseUrl, "/embed", {
        playlist: id,
        layout: config.layout,
        noToolbar: config.hideToolbar,
        maxRow: config.videosPerRow,
        maxVideos: config.maxVideos,
        ...getEmbedQuery(config)
      });
    }
  };
  function getPlaylistIndex(playlist, videoId) {
    const idx = playlist.videos.findIndex(({ id }) => id === videoId);
    return idx >= 0 ? idx : void 0;
  }
  function wrapAt(arr, i) {
    const n = arr.length;
    return arr[(i % n + n) % n];
  }

  // src/Config.ts
  function resolveConfig(configuration) {
    const cfg = {
      ...configuration
    };
    validateConfig(cfg);
    return cfg;
  }
  function validateConfig(cfg) {
    if (!cfg.baseUrl?.match(/^https?:\/\//)) {
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
  function embedPlaylist(element, playlistId, config) {
    const el = lookupElement(element);
    const cfg = resolveConfig(config);
    const player = new VbrickPlaylistEmbed(playlistId, cfg, el);
    player.initialize().catch(() => {
    });
    return player;
  }

  // src/index.ts
  var revSDK = {
    embedWebcast,
    embedVideo,
    embedPlaylist,
    TokenType,
    PlayerStatus,
    WebcastStatus,
    PlaylistLayout
  };
  var src_default = revSDK;
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=rev-sdk.js.map