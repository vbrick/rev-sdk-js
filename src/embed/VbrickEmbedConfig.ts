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

	autoplay?: boolean;
	
	/**
	 * set the volume to upon initial load (for muting or otherwise)
	 */
	initialVolume?: number;
}

/**
 * Options available when embedding a VOD/video
 * @public
 */
export interface VbrickVideoEmbedConfig extends VbrickBaseEmbedConfig {
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

	/** @deprecated - embed parameter */
	accent?: string;
	/** @deprecated - embed parameter */
	forceClosedCaptions?: string;
	/** @deprecated - embed parameter */
	loopVideo?: string;
	/** @deprecated - embed parameter */
	noCc?: boolean;
	/** @deprecated - embed parameter */
	noCenterButtons?: boolean;
	/** @deprecated - embed parameter */
	noChapters?: boolean;
	/** @deprecated - embed parameter */
	noFullscreen?: boolean;
	/** @deprecated - embed parameter */
	noPlayBar?: boolean;
	/** @deprecated - embed parameter */
	noSettings?: boolean;
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

	/** @deprecated - embed parameter */
	enableFullRev?: boolean;
}

/**
 * Options available when embedding a VOD/video or webcast
 * @public
 */
export interface VbrickEmbedConfig extends VbrickVideoEmbedConfig, VbrickWebcastEmbedConfig {}