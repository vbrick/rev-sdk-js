import { EventBus } from './EventBus';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';
import { getLogger, ILogger } from '../Log';
import { IVbrickBaseEmbed, PlayerStatus } from './IVbrickApi';
import { TokenType, VbrickSDKToken } from '../VbrickSDK';
import { TVbrickEvent, IListener } from './IVbrickEvents';
import { IBasicInfo, ISubtitles, VideoPlaybackSidebarButton } from './IVbrickTypes';
import { authenticateAccessToken, authenticateJWT } from './auth';

/**
 * Base class for embedded content.
 */
export abstract class VbrickEmbed<TInfo extends IBasicInfo> implements IVbrickBaseEmbed<TInfo> {

	/**
	* video playing, buffering, etc
	*/
	public get playerStatus(): PlayerStatus {
		return this._playerStatus;
	}
	private _playerStatus = PlayerStatus.Initializing;

	/**
	* Player Volume. 0-1
	*/
	public get volume(): number {
		return this._volume;
	}
	private _volume: number;

	/**
	 * Whether subtitles are enabled, and selected language
	 */
	public get currentSubtitles(): ISubtitles {
		return this._currentSubtitles;
	}
	private _currentSubtitles: ISubtitles = { enabled: false };

	public get isLive(): boolean {
		return !!this.info?.isLive;
	}

	public get info(): TInfo | undefined {
		return this._info as TInfo;
	}
	private _info?: TInfo;

	protected iframe: HTMLIFrameElement;
	protected readonly iframeUrl: string;
	protected eventBus: EventBus;
	private init?: Promise<any>;
	private unsubscribes: Array<() => void>;
	protected logger: ILogger;

	constructor(
		id: string,
		protected readonly config: VbrickEmbedConfig,
		protected readonly container: HTMLElement
	) {
		this.iframeUrl = this.getEmbedUrl(id, this.config);
		this.logger = getLogger(this.config);
	}

	/**
	 * Plays the video if it is paused.
	 */
	 public play(): void {
		this.eventBus.publish('playVideo');
	}
	/**
	  * Pauses the video if it is playing.
	  */
	public pause(): void {
		this.eventBus.publish('pauseVideo');
	}

	/**
	 * Sets player volume
	 * @param volume {number} 0-1
	 */
	public setVolume(volume: number): void {
		this.eventBus.publish('setVolume', { volume });
	}

	/**
	 * update the current subtitles settings
	 * @param subtitles enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)
	 */
	public setSubtitles(subtitles: ISubtitles) {
		this.eventBus.publish('setSubtitles', subtitles);
	}

	/**
	 * Indicates the embedded content was initialized and authenticated.
	 * If there was a problem loading the content, or a problem with the token, the promise will be rejected.
	 */
	public initialize(): Promise<void> {
		if (this.init) {
			return this.init;
		}
		this.iframe = this.render();
		this.eventBus = new EventBus(this.iframe, this.config);
		this.initializeEmbed();

		const timeout = (this.config.timeoutSeconds! * 1000) || undefined;

		return this.init = Promise.all([
			this.initializeToken(),
			this.eventBus.awaitEvent('load', 'error', timeout)
		])
			.then(([token]) => {
				if (!token) {
					return;
				}
				this.logger.log('embed loaded, authenticating');
				this.eventBus.publish('authenticated', { token });
				this.eventBus.awaitEvent('authChanged', 'error', timeout);
			})
			.catch(err => {
				this._playerStatus = PlayerStatus.Error;
				this.logger.error('Embed initialization error: ', err);
				this.eventBus.publishError('initializationFailed');
				this.eventBus.emitLocalError('Error loading embed content', err);
				return Promise.reject(err);
			});
	}

	protected initializeToken(): Promise<any> {
		if (!this.config.token) {
			return Promise.resolve()
		}

		switch (this.config.token.type) {
			case TokenType.ACCESS_TOKEN:
				return authenticateAccessToken(this.config);
			case TokenType.JWT:
				return authenticateJWT(this.config);
			default:
				return Promise.reject('Unsupported token type');
		}
	}
	protected initializeEmbed(): void {
		this.eventBus.on('videoLoaded', (e: any) => {
			this._info = e;
			this._playerStatus = PlayerStatus.Paused;
		});
		//don't include status in information, since it can change
		this.eventBus.on('webcastLoaded', ({status, ...info}: any) => {
			this._info = info;
		});

		this.eventBus.on('playerStatusChanged', e => this._playerStatus = e.status);
		this.eventBus.on('subtitlesChanged', subtitles => {
			this._currentSubtitles = subtitles;
		});

		// allow setting volume on player ready
		if (this.config.initialVolume != undefined && isFinite(this.config.initialVolume)) {
			const volumeCallback: IListener<'playerStatusChanged'> = (evt) => {
				if (evt.status !== PlayerStatus.Playing) {
					return;
				}
				this.eventBus.off('playerStatusChanged', volumeCallback);
				this.setVolume(this.config.initialVolume);
			};
			this.eventBus.on('playerStatusChanged', volumeCallback);
		}
	}
	protected abstract getEmbedUrl(id: string, config: VbrickEmbedConfig);

	public on<T extends TVbrickEvent>(event: T, listener: IListener<T>): void {
		//ensure internal updates take effect before calling client handlers
		this.eventBus.on<any>(event, (e: any) => setTimeout(() => listener(e)));
	}

	public off<T extends TVbrickEvent>(event: T, listener: IListener<T>): void {
		this.eventBus.off(event, listener);
	}

	private render(): HTMLIFrameElement {
		const iframe = document.createElement('iframe');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowFullScreen', '')
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

	public destroy(): void {
		this.iframe.remove();
		this.eventBus.destroy();
		this.init = undefined;
		this.unsubscribes?.forEach(fn => fn());
	}

	public async updateToken(newToken: VbrickSDKToken): Promise<void> {
		this.config.token = newToken;
		try {
			const token = await this.initializeToken();
			this.eventBus.publish('authChanged', { token });
			await this.eventBus.awaitEvent('authChanged', 'error');
		} catch (error) {
			this.logger.error('Error updating token: ', error);
			throw error;
		}
	}
}

/**
 * parses a config object and converts into query parameters for the iframe embed URL
 * @param config
 */
 export function getEmbedQuery(config: VbrickEmbedConfig): Record<string, undefined | boolean | string | number> {
	return {
		tk: !!config.token,
		popupAuth: (config.popupAuth != undefined)
			/* popupAuth requires a "true" value if set */
			? (!!config.popupAuth).toString()
			: undefined,
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
		sidebarFilterQuery: config.sidebarFilterQuery,
		startAt: config.startAt,
		// all sidebar tabs are by default true, so only include if explicitly false
		...config.showFullPlayer && {
			hideInfo: config.sidebarTabs[VideoPlaybackSidebarButton.INFO] === false || config.hideInfo === true,
			hideComments: config.sidebarTabs[VideoPlaybackSidebarButton.COMMENTS] === false || config.hideComments === true,
			hidePulse: config.sidebarTabs[VideoPlaybackSidebarButton.PULSE] === false || config.hidePulse === true,
			hideReview: config.sidebarTabs[VideoPlaybackSidebarButton.REVIEW] === false || config.hideReview === true,
			hidePlaylist: config.sidebarTabs[VideoPlaybackSidebarButton.PLAYLIST] === false || config.hidePlaylist === true,
			hideChapters: config.sidebarTabs[VideoPlaybackSidebarButton.CHAPTERS] === false || config.hideChapters === true,
			hideAnalytics: config.sidebarTabs[VideoPlaybackSidebarButton.REPORTS] === false || config.hideAnalytics === true,
		}
	};
}
