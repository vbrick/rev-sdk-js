import { PlayerStatus } from './PlayerStatus';
import { IVideoInfo, ISubtitles, IWebcastInfo, IWebcastStatusMessage, IWebcastLayout, IComment, ISlideEvent, IPoll, TPollId, IPlaylistInfo, IPlaylistSwitch, IPlaylistItem } from './IVbrickTypes';

/**
 * Authentication/load events 
 * @public
 */
export type TEmbedMessages = {
	/** Fired on initial embed load */
	load: void;
	/** Authentication has been updated */
	authChanged: void;
	/** Returned if an error occurs in the communication with the embed * (for example, a bad token)* */
	error: {
		/** Diagnostic error message */
		msg: string;
	};
	/** Passes metadata of video */
	videoLoaded: IVideoInfo;
	/** Fired when the player has changed state *(Play/Pause/Buffering, etc.)* */
	playerStatusChanged: { status: PlayerStatus; };
	/** Fired when the player's volume is updated */
	volumeChanged: number;
	/** Fired when subtitles are changed or enabled/disabled */
	subtitlesChanged: ISubtitles;
}

/**
 * Video Player events
 * @public
 */
export type TPlayerMessages = {
	/**
	 * Fired when the playback rate has been updated
	 */
	playbackSpeedChanged: number;
	/**
	 * Playback position has been changed
	 */
	seeked: {
		/** Playback position before seek started */
		startTime: number,
		/** Playback position when seek ended */
		endTime: number;
	}
	currentTime: {
		/** Current time in seconds into the video */
		currentTime: number,
		/** Total duration of video */
		duration: number;
	}
}

/**
 * Webcast events
 * @public
 */
export type TWebcastMessages = {
	/**
	 * Passes metadata about the webcast
	 */
	webcastLoaded: IWebcastInfo & IWebcastStatusMessage;
	/** Webcast is active (video not yet visible / in lobby) */
	webcastStarted: IWebcastStatusMessage;
	/** Webcast is active and video content displayed */
	broadcastStarted: IWebcastStatusMessage;
	/** Webcast is active but video stopped */
	broadcastStopped: IWebcastStatusMessage;
	/** Webcast is complete */
	webcastEnded: IWebcastStatusMessage;
	/** video/slides display has been changed */
	layoutChanged: IWebcastLayout;
	/** New Chat comment added */
	commentAdded: IComment;
	/** Active slide has een updated */
	slideChanged: ISlideEvent;
	/** Poll has been opened */
	pollOpened: IPoll;
	/** Includes the ID of a poll that is now closed */
	pollClosed: TPollId;
	/** Poll is published - includes voting details */
	pollPublished: IPoll;
	/** Poll has been removed */
	pollUnpublished: TPollId;
}

/**
 * Playlist events
 * @public
 */
export type TPlaylistMessages = {
	playlistLoaded: IPlaylistInfo;
	playlistItem: {
		index: number;
		videoId: string;
	};
}

/**
 * All supported events and their corresponding listener callback payload 
 * @public
 */
export type TVbrickMessages = TEmbedMessages & TPlayerMessages & TWebcastMessages & TPlaylistMessages;

/**
 * Events emitted by Vbrick Embed
 * @public
 */
export type TVbrickEvent = Extract<keyof TVbrickMessages, string>;

/**
 * Event callback parameters for the specified event
 * @public
 */
export type IListener<TEvent extends string & keyof TVbrickMessages> = TVbrickMessages[TEvent] extends void
	? () => void
	: (data: TVbrickMessages[TEvent]) => void;


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


export type TPlaylistMethod =
	['switchVideo', IPlaylistSwitch];

/**
 * @internal
 */
interface IAuthChangeRequest {
	token?: {
		accessToken: string;
	};
}
