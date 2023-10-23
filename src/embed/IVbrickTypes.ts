import { WebcastStatus } from './WebcastStatus';

//#endregion internal
/**
 * The current subtitles language and if enabled or not
 * @public
 */

export interface ISubtitles {
	language?: string;
	enabled: boolean;
}
/**
 * Basic metadata shared between VOD and Webcast Embeds
 * @public
 */

export interface IBasicInfo {
	title: string;
	isLive: boolean;
	subtitles: Array<{ language: string; }>;
}
/**
 * Video Metadata
 * @public
 */

export interface IVideoInfo extends IBasicInfo {
	videoId: string;
	title: string;
	status: string;
	duration: number;
	isLive: boolean;
	is360: boolean;
	hasAudioOnly: boolean;
	subtitles: Array<{ language: string; }>;
	chapters: Array<{
		time: number;
		imageId?: string;
		extension?: string;
		title?: string;
	}>;
	playbacks: Array<{
		id: string;
		label: string;
		streamDeliveryType: string;
		zoneName?: string;
		deviceName?: string;
	}>;
}

/**
 * video sidebar button
 * @public
 */
export enum VideoPlaybackSidebarButton {
	AI = 'ai',
	CHAPTERS = 'chapters',
	COMMENTS = 'comments',
	INFO = 'info',
	PLAYLIST = 'playlist',
	PULSE = 'pulse',
	REPORTS = 'reports',
	SHARE = 'share'
}

/**
 * Event indicating the current webcast status
 * @public
 */

export type IWebcastStatusMessage<T extends WebcastStatus = WebcastStatus> = {
	status: T;
	isPreProduction?: boolean;
};
/**
 * Webcast Metadata
 * @public
 */

export interface IWebcastInfo extends IBasicInfo {
	webcastId: string;
	title: string;
	startDate: string;
	endDate: string;
	subtitles: Array<{ language: string; }>;
	linkedVideoId?: string;
	isLive: boolean;
	isPreProduction?: boolean;
}
/**
 * Fired when a new comment has been added to Chat
 * @public
 */

export interface IComment {
	comment: string;
	date: string;
	userId: string;
	firstname?: string;
	lastname?: string;
}
/**
 * Details of the current slide on a Webcast slide change event
 * @public
 */

export interface ISlideEvent {
	slideNumber: number;
	slideDelay: number;
}
/**
 * Details of a Webcast Poll
 * @public
 */

export interface IPoll {
	// pollClosed only has pollId
	pollId: string;
	question: string;
	// count only for poll published
	answers: Array<{ text: string; count?: number; }>;
	multipleChoice: boolean;
	// only for poll published
	totalResponses?: number;
}
/**
 * The Webcast Poll that has been Closed/Unpublished
 * @public
 */

export type TPollId = {
	pollId: string;
};
/**
 * Details of if Video and/or Slides are currently displayed
 * @public
 */

export interface IWebcastLayout {
	video?: boolean;
	presentation?: boolean;
}

/**
 * @internal
 */
export interface IPlaylistSwitch {
	videoId: string;
	autoplay?: boolean;
}

/**
 * Video entry in playlist
 * @public
 */
export interface IPlaylistItem {
	id: string;
	title: string;
	ownerProfileImageUri: string | null;
	ownerFullName: string;
}

/**
 * Playlist data emitted when playlist first loaded
 * @public
 */
export interface IPlaylistInfo {
	id: string;
	name: string;
	videos: IPlaylistItem[];
}
