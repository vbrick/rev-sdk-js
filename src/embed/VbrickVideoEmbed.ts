import { getEmbedUrl } from '../util';
import { TokenType } from '../VbrickSDK';
import { IVbrickVideoEmbed, ICaptionSettings, ISDKVideoInfo } from './IVbrickApi';
import { PlayerStatus } from './PlayerStatus';
import { VbrickEmbed } from './VbrickEmbed';
import { VbrickEmbedConfig, VbrickVideoEmbedConfig } from './VbrickEmbedConfig';

/**
 * Internal class used to model an embedded video
 */
export class VbrickVideoEmbed extends VbrickEmbed implements IVbrickVideoEmbed {

	 /**
	 * video playing, buffering, etc
	 */
	public get playerStatus(): PlayerStatus {
		return this._playerStatus;
	}
	private _playerStatus

	 /**
	 * Player Volume. 0-1
	 */
	public get volume(): number {
		return this._volume;
	}
	private _volume: number;

	/**
	 * Current position in video in seconds
	 */
	public get currentTime(): number {
		return this._currentTime;
	}
	private _currentTime: number;

	/**
	 * Duration of video in seconds. Wil be undefined for live content
	 */
	public get duration(): number {
		return this._info?.duration;
	}

	/**
	 * Whether captions are enabled, and selected language
	 */
	public get captions(): ICaptionSettings {
		return this._captions;
	}
	private _captions: ICaptionSettings;

	public get isLive(): boolean {
		return this._info?.isLive;
	}

	/**
	 * Contains metadata for the video
	 */
	public get videoInfo(): ISDKVideoInfo {
		return this._info;
	}
	private _info: ISDKVideoInfo;

	constructor(
		id: string,
		config: VbrickVideoEmbedConfig,
		container: HTMLElement
	) {
		super(id, config, container);
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
	 * sets playback rate 
	 * @param speed {number} 0-16, default is 1
	 */
	public setPlaybackSpeed(speed: number): void {
		if (this.isLive) {
			this.logger.log('Live video, cannot change speed');
			return;
		}
		this.eventBus.publish('setPlaybackSpeed', { speed });
	}

	/**
	 * sets the current time in the video
	 * @param currentTime {number} 0 - video duration
	 */
	public seek(currentTime: number) {
		if (this.isLive) {
			this.logger.log('Live video, seek');
			return;
		}
		this.eventBus.publish('seek', { currentTime });
	}

	/**
	 * update the current captions settings
	 * @param captions enable/disable captions and set language (use 'captions' for closed captions encoded into video stream)
	 */
	public setCaptions(captions: ICaptionSettings) {
		this.eventBus.publish('setCaptions', captions);
	}

	protected initializeToken(): Promise<any> {
		if(!this.config.token) {
			return Promise.resolve()
		}

		if(this.config.token.type !== TokenType.ACCESS_TOKEN) {
			return Promise.reject('Unsupported token type');
		}

		return Promise.resolve({
			accessToken: this.config.token.value
		});
	}

	protected initializeEmbed(): void {
		this.eventBus.on('videoLoaded', e => this._info = e);
		this.eventBus.on('playerStatusChanged', e => this._playerStatus = e.status);
		this.eventBus.on('volumeChanged', e => this._volume = e.volume);
		this.eventBus.on('captionsChanged', e => {
			this._captions = e.captions;
		});
		this.eventBus.on('currentTime', e => {
			this._currentTime = e.currentTime;
			// update duration in videoInfo?
		});
	}
	protected getEmbedUrl(id: string, config: VbrickEmbedConfig): string {
		return getEmbedUrl(config.baseUrl, '/embed', {
			id,
			...getEmbedQuery(config)
		});
	}
}

/**
 * parses a config object and converts into query parameters for the iframe embed URL
 * @param config 
 */
export function getEmbedQuery(config: VbrickEmbedConfig): Record<string, undefined | boolean | string> {
	return {
		tk: !!config.token,
		popupAuth: !config.token && (config.popupAuth ? 'true' : 'false'), //popupAuth requires a true value
		// COMBAK temporary addition
		debug: (config as any).debug !== undefined && `${!!((config as any).debug)}`,
		accent: config.accentColor,
		autoplay: config.autoplay,
		forceClosedCaptions: config.forcedCaptions,
		loopVideo: config.playInLoop,
		noCc: config.hideCaptions,
		noCenterButtons: config.hideOverlayControls,
		noChapters: config.hideChapters,
		noFullscreen: config.hideFullscreen,
		noPlayBar: config.hidePlayControls,
		noSettings: config.hideSettings,
		startAt: config.startAt
	};
}
