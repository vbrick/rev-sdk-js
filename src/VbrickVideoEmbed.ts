import { IVbrickVideoEmbed, IVbrickVideoConfig, ICaptionSettings, TokenType } from './IVbrickApi';
import { PlayerStatus } from './PlayerStatus';
import { VbrickEmbed } from './VbrickEmbed';

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
	 * Whether captions are enabled, and selected language
	 */
	public get captions(): ICaptionSettings {
		return this._captions;
	}
	private _captions: ICaptionSettings;

	/**
	 * Contains metadata for the video
	 */
	public readonly videoInfo: any;



	constructor(
		private readonly videoId: string,
		config: IVbrickVideoConfig,
		container: HTMLElement
	) {
		super(getEmbedUrl(videoId, config), config, container);
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

	protected initializeToken(): Promise<any> {
		if(this.config.token.type !== TokenType.ACCESS_TOKEN) {
			return Promise.reject('Unsupported token type');
		}

		return Promise.resolve({
			accessToken: this.config.token.value
		});
	}

	protected initializeEmbed(): void {
		this.eventBus.on('playerStatusChanged', e => this._playerStatus = e.status),
		this.eventBus.on('volumeChanged', e => this._volume = e.volume),
		this.eventBus.on('captionsChanged', e => this._captions = e.captions)
	}

	public destroy(): void {
		super.destroy();

		this.unsubscribes?.forEach(fn => fn());
	}
}

function getEmbedUrl(id: string, config: IVbrickVideoConfig): string {
	return [
		[`${config.baseUrl}/embed?`, true],
		['tk', !!config.token],
		['id', id],
		['accent', config.accentColor],
		['autoplay', config.autoplay],
		['forceClosedCaptions', config.forcedCaptions],
		['loopVideo', config.playInLoop],
		['noCc', config.hideCaptions],
		['noCenterButtons', config.hideOverlayControls],
		['noChapters', config.hideChapters],
		['noFullscreen', config.hideFullscreen],
		['noPlayBar', config.hidePlayControls],
		['noSettings', config.hideSettings],
		['placeholder', config.popOut],
		['startAt', config.startAt],
	]
		.map(([key, value]) =>
			!value ? undefined :
			value === true ? key :
			`${key}=${encodeURIComponent(value)}`)
		.filter(Boolean)
		.join('&');
}
