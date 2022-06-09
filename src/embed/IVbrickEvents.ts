import { PlayerStatus } from './PlayerStatus';
import { IVideoInfo, ISubtitles, IWebcastInfo, IWebcastStatusMessage, IWebcastLayout, IComment, ISlideEvent, IPoll, TPollId } from './IVbrickTypes';

/**
 * Authentication/load events 
 * @public
 */
export type TEmbedMessage =
	['load'] |
	['authChanged'] |
	['error', { msg: string; }];


/**
 * Video Player events
 * @public
 */
 export type TPlayerMessage =
	['videoLoaded', IVideoInfo] |
	['playerStatusChanged', { status: PlayerStatus; }] |
	['volumeChanged', number] |
	['subtitlesChanged', ISubtitles] |
	['playbackSpeedChanged', number] |
	['seeked', { startTime: number, endTime: number; }] |
	['currentTime', { currentTime: number, duration: number; }];

/**
 * Webcast events
 * @public
 */
 export type TWebcastMessage =
	/**
	 * Metadata about the webcast
	 */
	['webcastLoaded', IWebcastInfo & IWebcastStatusMessage] |
	['webcastStarted', IWebcastStatusMessage] |
	['broadcastStarted', IWebcastStatusMessage] |
	['broadcastStopped', IWebcastStatusMessage] |
	['webcastEnded', IWebcastStatusMessage] |
	['layoutChanged', IWebcastLayout] |
	['commentAdded', IComment] |
	['slideChanged', ISlideEvent] |
	['pollOpened', IPoll] |
	['pollClosed', TPollId] |
	['pollPublished', IPoll] |
	['pollUnpublished', TPollId];

/**
 * Tuples of emitted events and their payload types
 * @public
 */
export type TVbrickMessage =
	TEmbedMessage |
	TPlayerMessage |
	TWebcastMessage;

/**
 * Events emitted by Vbrick Embed
 * @public
 */
export type TVbrickEvent = TVbrickMessage[0];

/**
 * A mapping of published events and a listener callback with the expected payload
 * @public
 */
 export type IHandlerArgs<T extends [string, ...any[]]> = {
	[K in T[0]]: [K, Handler<ValOfTuple<T, K>, void>]
}[T[0]];

//#region internal

/**
 * Messages sent to Rev via postMessage
 * @internal
 */
export type TAuthMethods =
	['authenticated', IAuthChangeRequest] |
	['error', string] |
	['authChanged', IAuthChangeRequest];


/**
* @internal
*/
export type TPlayerMethod =
	['playVideo'] |
	['pauseVideo'] |
	['setPlaybackSpeed', { speed: number; }] |
	['setVolume', { volume: number; }] |
	['setSubtitles', ISubtitles] |
	['seek', { currentTime: number; }];


/**
* @internal
*/
export type TWebcastMethod =
	['updateLayout', IWebcastLayout];

/**
 * @internal
 */
interface IAuthChangeRequest {
	token?: {
		accessToken: string;
	};
}

/**
 * Events and the shape of the corresponding listener callback
 * @internal
 */
export type TEventHandlers = {
	[K in TVbrickEvent]: Handler<ValOfTuple<TVbrickMessage, K>, void>
};

type Handler<TIn, TOut> = TIn extends void
	? () => TOut
	: (...args: [TIn, ...any[]]) => TOut;

export type ValOfTuple<T extends [string] | [string, ...any[]], K> = T extends [string, any]
	? Extract<T, [K, any]>[1]
	: void;


