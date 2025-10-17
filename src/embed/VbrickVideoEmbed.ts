import { getEmbedUrl } from '../util';
import { IVbrickVideoEmbed } from './IVbrickApi';
import { IVideoInfo } from "./IVbrickTypes";
import { getEmbedQuery, VbrickEmbed } from './VbrickEmbed';
import { VbrickEmbedConfig, VbrickVideoEmbedConfig } from './VbrickEmbedConfig';

/**
 * Internal class used to model an embedded video
 */
export class VbrickVideoEmbed extends VbrickEmbed<IVideoInfo> implements IVbrickVideoEmbed {

	/**
	 * Current position in video in seconds
	 */
	public get currentTime(): number {
		return this._currentTime;
	}
	private _currentTime: number;

	/**
	 * Duration of video in seconds. Will be undefined for live content
	 */
	public get duration(): number | undefined {
		return this.info?.duration;
	}

	/**
	 * Current playback speed
	 */
	public get playbackSpeed(): number {
		return this._playbackSpeed;
	}
	private _playbackSpeed: number = 1;

	/**
	 * Contains metadata for the video
	 * @deprecated Use `info` instead
	 */
	public get videoInfo(): IVideoInfo | undefined {
		return this.info;
	}

	constructor(
		id: string,
		config: VbrickVideoEmbedConfig,
		container: HTMLElement
	) {
		super(id, config, container);
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

	protected initializeEmbed(): void {
		super.initializeEmbed();
		this.eventBus.on('currentTime', e => {
			this._currentTime = e.currentTime;
			// update duration in videoInfo?
		});
		this.eventBus.on('playbackSpeedChanged', e => {
			this._playbackSpeed = e;
		});
	}
	protected getEmbedUrl(id: string, config: VbrickEmbedConfig): string {
		return getEmbedUrl(config.baseUrl, '/embed', {
			id,
			...getEmbedQuery(config)
		});
	}
}
