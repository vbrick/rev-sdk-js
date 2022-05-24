import { WebcastStatus } from './WebcastStatus';
import { PlayerStatus } from './PlayerStatus';
import { VbrickSDKToken } from '../VbrickSDK';
export { WebcastStatus } from './WebcastStatus';
export { PlayerStatus } from './PlayerStatus';

/**
 * @public
 */
export interface IVbrickVideoEmbed extends IVbrickBaseEmbed {

	/**
	 * Fires when the video metadata is loaded
	 */
	on(event: 'videoLoaded', listener: (event: ISDKVideoInfo) => void): void;

	/**
	 * Fired if the player volume changes
	 * @param volume - number between 0 and 1
	 */
	on(event: 'volumeChanged', listener: (event: { volume: number }) => void): void;

	/**
	 * Fired when the player status changes
	 * @param status - PlayerStatus can be one of the following:
	 *     Initializing,
	 *     Playing,
	 *     Paused,
	 *     Buffering,
	 *     Ended,
	 */
	on(event: 'playerStatusChanged', listener: (event: { status: PlayerStatus }) => void): void;

	/**
	 * get status of the embedded player
	 */
	//getPlayerStatus(): PlayerStatus;

	/**
	 * Fired when the captions are toggled, or the language changes
	 * @alpha
	 * @param enabled - true if the captions are on
	 * @param language - The displayed language for caption text
	 */
	on(event: 'captionsChanged', listener: (event: ICaptionSettings) => void): void;

	/**
	 * Fired when the playback speed changes. Only available for prerecorded video on demand.
	 * @alpha
	 * @param speed - number. Multiplier for the video playback speed. 1 is normal speed.
	 */
	on(event: 'playbackSpeedChanged', listener: (event: { speed: number }) => void): void;

	/**
	 * Fired when the user seeks in the video player
	 */
	on(event: 'seeked', listener: (event: { startTime: number, endTime: number }) => void): void;

	/**
	 * Fired if the player volume changes
	 * @param volume - number between 0 and 1
	 */
	on(event: 'volumeChanged', listener: (event: { volume: number }) => void): void;

	on(event: string, listener: (event: any) => void): void;

		/**
	 * video playing, buffering, etc
	 */
	readonly playerStatus: PlayerStatus;

	/**
	 * Player Volume. 0-1
	 */
	readonly volume: number;

	/**
	 * Whether captions are enabled, and selected language
	 */
	readonly captions: ICaptionSettings;

	/**
	 * Contains metadata for the video
	 */
	readonly videoInfo: ISDKVideoInfo;

	/**
	 * Plays the video if it is paused.
	 */
	play(): void;

	/**
	 * Pauses the video if it is playing.
	 */
	pause(): void;

	/**
	 * Sets player volume
	 * @param volume - number 0-1
	 */
	setVolume(volume: number): void;
}

/**
 * @public
 */
export interface IVbrickWebcastEmbed extends IVbrickBaseEmbed {

	/**
	 * Indicates whether the webcast is started, or broadcasting.
	 */
	readonly webcastStatus: WebcastStatus;

	/**
	 * Fired on initial load
	 */
	on(event: 'webcastLoaded', listener: (event: { status: WebcastStatus }) => void): void;

	/**
	 * Fired when the webcast starts broadcasting.
	 */
	on(event: 'broadcastStarted', listener: (event: { status: WebcastStatus.Broadcasting }) => void): void;

	/**
	 * Fired when the webcast stops broadcasting.
	 */
	on(event: 'broadcastStopped', listener: (event: { status: WebcastStatus.Completed }) => void): void;

	/**
	 * Fired when the webcast starts.
	 *
	 * isPreProduction: boolean, Indicates that the webcast is running in pre-production mode, and is not started publicly.
	 */
	on(event: 'webastStarted', listener: (event: { status: WebcastStatus.InProgress, isPreProduction: boolean }) => void): void;

	/**
	 * Fired when the webcast ends.
	 */
	on(event: 'webcastEnded', listener: (event: { status: WebcastStatus.Completed }) => void): void;

	on(event: string, listener: (event: any) => void): void;

}

/**
 * @public
 */
export interface IVbrickBaseEmbed {
	/**
	 * Fired when iframe has loaded
	 */
	on(event: 'load', listener: (event: undefined) => void): void;

	/**
	 * Fired if there is an error
	 */
	on(event: 'error', listener: (event: { msg: string, err: any }) => void): void;

	/**
	 * Register an event handler. Events are fired at different lifecycle stages of the webcast
	 * @param event - name of event
	 * @param listener - callback when event is fired. Keep a reference if you intend to call {@link IVbrickBaseEmbed.off} later
	 */
	on(event: string, listener: (event: any) => void): void;

	/**
	 * Removes an event listener
	 */
	off(event: string, listener: (event: any) => void): void;

	/**
	 * Removes the embedded content from the DOM.
	 */
	destroy(): void;

	/**
	 * Allows updating the access token if the old one has expired.
	 * @param token - New token
	 */
	updateToken(token: VbrickSDKToken): void;
}


export interface ICaptionSettings {
	enabled: boolean;
	language?: 'captions' | string;
}


export interface ISDKVideoInfo {
	videoId: string;
	title: string;
	status: string;
	duration: number;
	isLive: boolean;
	is360: boolean;
	hasAudioOnly: boolean;
	captions: Array<{ language: string }>;
	chapters: Array<{
		time: number;
		imageId: string | null;
		extension: string | null;
		title: string | null;
	}>;
	playbacks: Array<{
		id: string;
		label: string;
		streamDeliveryType: string;
		zoneName: string | null;
		deviceName: string | null;
	}>;
}

// matches Public Get Webcast Status API (save the slidesUrl)
export interface IWebcastInfo {
	webcastId: string;
	status: WebcastStatus;
	isPreProduction?: boolean;
	title: string;
	startDate: string;
	endDate: string;
	captions: Array<{ language: string }>;
	linkedVideoId?: string;
}