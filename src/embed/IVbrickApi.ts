import { WebcastStatus } from './WebcastStatus';
import { PlayerStatus } from './PlayerStatus';
import { VbrickSDKToken } from '../VbrickSDK';
import { TVbrickEvent, IListener, TEmbedMessages, TPlayerMessages, TWebcastMessages } from './IVbrickEvents';
import { IVideoInfo, IWebcastInfo, IWebcastLayout, ISubtitles, IBasicInfo } from "./IVbrickTypes";

export { WebcastStatus } from './WebcastStatus';
export { PlayerStatus } from './PlayerStatus';
export type { TVbrickEvent, IListener, TEmbedMessages, TPlayerMessages, TWebcastMessages, TVbrickMessages } from './IVbrickEvents';
export * from './IVbrickTypes';

/**
 * @public
 */
export interface IVbrickBaseEmbed<TInfo extends IBasicInfo, Events extends string & TVbrickEvent = keyof TEmbedMessages> {
	/**
	* video playing, buffering, etc
	*/
	readonly playerStatus: PlayerStatus;

	/**
	 * Player Volume. 0-1
	 */
	readonly volume: number;

	/**
	 * Whether subtitles are enabled, and selected language
	 */
	readonly currentSubtitles: ISubtitles;

	/**
	 * metadata of the video/webcast
	 */
	readonly info: TInfo;

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

	/**
	 * Indicates whether the webcast is started, or broadcasting.
	 * update the current subtitles settings
	 * @param subtitles - enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)
	 */
	setSubtitles(subtitles: ISubtitles): void;

	/**
	 * Register an event handler. Events are fired at different lifecycle stages of the webcast
	 * @param event - name of event
	 * @param listener - callback when event is fired. Keep a reference if you intend to call {@link IVbrickBaseEmbed.off} later
	 */
	on<T extends Events>(event: T, listener: IListener<T>): void;

	/**
	 * Removes an event listener
	 */
	off<T extends Events>(event: T, listener: IListener<T>): void;

	/**
	 * Removes the embedded content from the DOM.
	 */
	destroy(): void;

	/**
	 * Allows updating the access token if the old one has expired.
	 * @param token - New token
	 */
	updateToken(token: VbrickSDKToken): Promise<void>;
}

/**
 * @public
 */
export interface IVbrickVideoEmbed extends IVbrickBaseEmbed<IVideoInfo, keyof (TEmbedMessages & TPlayerMessages)> {
	/**
	 * Current position in video in seconds
	 */
	readonly currentTime: number;

	/**
	 * Duration of video in seconds. Will be undefined for live content
	 */
	readonly duration?: number;

	/**
	 * Contains metadata for the video
	 * @deprecated Use `info` instead
	 */
	readonly videoInfo: IVideoInfo;

	/**
	 * sets playback rate 
	 * @param speed - 0-16, default is 1
	 */
	setPlaybackSpeed(speed: number): void;

	/**
	 * sets the current time in the video
	 * @param currentTime - value (in seconds) between 0 and video duration
	 */
	seek(currentTime: number): void;
}

/**
 * @public
 */
export interface IVbrickWebcastEmbed extends IVbrickBaseEmbed<IWebcastInfo, keyof (TEmbedMessages & TWebcastMessages)> {
	/**
	 * Indicates whether the webcast is started, or broadcasting.
	 */
	readonly webcastStatus: WebcastStatus;

	/**
	 * Change the visibility of video/slides. Only applicable when the "showFullWebcast" config
	 * flag is enabled and the event includes slides
	 * @param layout  - set if video/slides are displayed
	 */
	updateLayout(layout: IWebcastLayout): void;
}
