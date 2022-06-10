import { VbrickSDKConfig } from '../VbrickSDK';

/**
 * Options when creating the iframe embed for a video/webcast
 * @public
 */
export interface VbrickBaseEmbedConfig extends VbrickSDKConfig {
	/**
	 * An optional class to be set on embeds.
	 */
	className?: string;

	/**
	 * Optional width to be set on embeds. Default is "100%"
	 */
	width?: string;

	/**
	 * Optional height to be set on embeds. Default is "100%"
	 */
	height?: string;

	/**
	 * For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos
	 */
	popupAuth?: boolean;

	/**
	 * seconds to wait for the embed initialization to complete. default is 30 seconds
	 */
	timeoutSeconds?: number;
}

/**
 * Options available when embedding a VOD/video
 * @public
 */
export interface VbrickVideoEmbedConfig extends VbrickBaseEmbedConfig {
	autoplay?: boolean;
	playInLoop?: boolean;
	hideChapters?: boolean;
	hideOverlayControls?: boolean;
	hidePlayControls?: boolean;
	hideSubtitles?: boolean;
	/** Use the Close Captions embedded in video stream as Subtitles */
	forcedCaptions?: boolean;
	hideSettings?: boolean;
	hideFullscreen?: boolean;


	/**
	 * Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.
	 */
	startAt?: string;

	/**
	 * Branding Settings. Logo image URL
	 */
	logoUrl?: string;

	/**
	 * Branding Settings. Accent color to use in the player, in HTML #rrggbb format
	 */
	accentColor?: string;
}

/**
 * Options available when embedding a webcast
 * @public
 */
export interface VbrickWebcastEmbedConfig extends VbrickBaseEmbedConfig {
	/**
	 * Include Chat, QA and Polls widgets in embed (if configured) 
	 */
	showFullWebcast?: boolean;

}

/**
 * Options available when embedding a VOD/video or webcast
 * @public
 */
export interface VbrickEmbedConfig extends VbrickVideoEmbedConfig, VbrickWebcastEmbedConfig {}