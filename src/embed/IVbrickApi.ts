import { WebcastStatus } from './WebcastStatus';
import { PlayerStatus } from './PlayerStatus';
import { VbrickSDKToken } from '../VbrickSDK';
import { IHandlerArgs, TEmbedMessage, TPlayerMessage, TWebcastMessage } from './IVbrickEvents';
import { IVideoInfo, IWebcastInfo, IWebcastLayout, ISubtitles, IBasicInfo } from "./IVbrickTypes";
export { WebcastStatus } from './WebcastStatus';
export { PlayerStatus } from './PlayerStatus';


/**
 * @public
 */
export interface IVbrickBaseEmbed<TMessages extends [string, ...any[]], TInfo extends IBasicInfo> {
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
	 * update the current subtitles settings
	 * @param subtitles enable/disable subtitles and set language (use 'captions' for closed captions encoded into video stream)
	 */
	setSubtitles(subtitles: ISubtitles): void;

	/**
	 * Register an event handler. Events are fired at different lifecycle stages of the webcast
	 * @param event - name of event
	 * @param listener - callback when event is fired. Keep a reference if you intend to call {@link IVbrickBaseEmbed.off} later
	 */
	on(...[event, listener]: IHandlerArgs<TMessages>): void;

	/**
	 * Removes an event listener
	 */
	off(...[event, listener]: IHandlerArgs<TMessages>): void;

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
export interface IVbrickVideoEmbed extends IVbrickBaseEmbed<TEmbedMessage | TPlayerMessage, IVideoInfo> {
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
	 * @param speed {number} 0-16, default is 1
	 */
	setPlaybackSpeed(speed: number): void;

	/**
	 * sets the current time in the video
	 * @param currentTime {number} 0 - video duration
	 */
	seek(currentTime: number): void;
}

/**
 * @public
 */
export interface IVbrickWebcastEmbed extends IVbrickBaseEmbed<TEmbedMessage | TPlayerMessage | TWebcastMessage, IWebcastInfo> {
	/**
	 * Indicates whether the webcast is started, or broadcasting.
	 */
	readonly webcastStatus: WebcastStatus;

	/**
	 * Change the visibility of video/slides. Only applicable when the "showFullWebcast" config
	 * flag is enabled and the event includes slides
	 * @param layout 
	 */
	updateLayout(layout: IWebcastLayout): void;

	on(...[event, listener]: IHandlerArgs<TEmbedMessage | TPlayerMessage | TWebcastMessage>): void;
	off(...[event, listener]: IHandlerArgs<TEmbedMessage | TPlayerMessage | TWebcastMessage>): void;
}
