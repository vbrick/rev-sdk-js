import { VbrickSDKConfig } from '../VbrickSDK';
import { VideoPlaybackSidebarButton } from './IVbrickTypes';
import {PlaylistLayout} from './PlaylistLayout';

/**
 * Options when creating the iframe embed for a video/webcast
 * @public
 * @group Configuration
 * @category Base
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
 * @group Configuration
 * @category VOD
 */
export interface VbrickVideoEmbedConfig extends VbrickBaseEmbedConfig {
	playInLoop?: boolean;
	hideChapters?: boolean;
	hideChapterNavigation?: boolean;
	hideChapterMenu?: boolean;
	hideChapterImages?: boolean;
	hideOverlayControls?: boolean;
	hidePlayControls?: boolean;
	hideSubtitles?: boolean;
	/** Use the Close Captions embedded in video stream as Subtitles */
	forcedCaptions?: boolean;
	hideSettings?: boolean;
	hideFullscreen?: boolean;

	/**
	 * shows video player with sidebar.
	 */
	showFullPlayer?: boolean;

	/**
	 * provide the sidebar name to be opened by default when video loads.
	 * showFullPlayer value needs to be true for this to work.
	 */
	defaultSidebar?: VideoPlaybackSidebarButton;

	/**
	 * query to filter sidebar items. esp. use in pulse sidebar.
	 * showFullPlayer = true and defaultSidebar should have a value to make it work.
	 */
	sidebarFilterQuery?: string;
	/**
	 * flag to override account theme to default theme.
	 */
	applyDefaultTheme?: boolean;

	/**
	 * In case of showFullPlayer = true, user can provide a mobile breakpoint size
	 * so that player and sidebar will render nicely together.
	 * if not provided then 991 is the default value for mobile layout.
	 */
	mobileLayoutBreakPoint?: number;

	/**
	 * In case of showFullPlayer = true, user can customize the sidebar tabs to include
	 * If not provided or undefined then the default value for each tab is true
	 */
	sidebarTabs?: Partial<Record<`${VideoPlaybackSidebarButton}`, boolean>>

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

	/** @deprecated - embed parameter name - alias of accentColor */
	accent?: string;
	/** @deprecated - embed parameter name - alias of forcedCaptions */
	forceClosedCaptions?: string;
	/** @deprecated - embed parameter name - alias of playInLoop */
	loopVideo?: string;
	/** @deprecated - embed parameter name - alias of hideSubtitles */
	noCc?: boolean;
	/** @deprecated - embed parameter name - alias of hideOverlayControls */
	noCenterButtons?: boolean;
	/** @deprecated - embed parameter name - alias of hideChapters */
	noChapters?: boolean;
	/** @deprecated - embed parameter name - alias of hideFullscreen */
	noFullscreen?: boolean;
	/** @deprecated - embed parameter name - alias of hidePlayControls */
	noPlayBar?: boolean;
	/** @deprecated - embed parameter name - alias of hideSettings */
	noSettings?: boolean;
	/** @deprecated - embed parameter name - alias of hideChapterNavigation */
	noChapterSeek?: boolean;
	/** @deprecated - embed parameter name - alias of hideChapterImages */
	noChapterDisplay?: boolean;
	/** @deprecated - embed parameter name - alias of hideChapterMenu */
	noChapterMenu?: boolean;

	/** @deprecated - embed parameter name - alias for sidebar tab option */
	hideInfo?: boolean;
	/** @deprecated - embed parameter name - alias for sidebar tab option */
	hideComments?: boolean;
	/** @deprecated - embed parameter name - alias for sidebar tab option */
	hidePulse?: boolean;
	/** @deprecated - embed parameter name - alias for sidebar tab option */
	hideReview?: boolean;
	/** @deprecated - embed parameter name - alias for sidebar tab option */
	hidePlaylist?: boolean;
	// hideChapters?: boolean;
	/** @deprecated - embed parameter name - alias for sidebar tab option */
	hideAnalytics?: boolean;
}

/**
 * Options available when embedding a webcast
 * @public
 * @group Configuration
 * @category Webcast
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
 * @public
 * @group Configuration
 * @category Playlist
 */
export interface VbrickPlaylistEmbedConfig extends VbrickVideoEmbedConfig {
	/**
	 * Select layout of playlist. Options are:
	 * - row (aka Filmstrip) - thumbnails of videos along bottom
	 * - grid - grid of thumbnails. Not compatible with autoplay functionality
	 * - slider - small prev/next buttons at bottom ov video player
	 */
	layout?: `${PlaylistLayout}`;
	/**
	 * Only applicable when layout is 'slider'
	 * Do not show bottom toolbar, only show the current video. This makes playlist functionality only possible through javascript API.
	 */
	hideToolbar?: boolean;
	/**
	 * Only applicable when layout is 'grid'
	 * Set the number of videos in each grid row (valid numbers are between 3 and 5)
	 */
	videosPerRow?: number;
	/**
	 * Only applicable when layout is 'grid'
	 * Set the maximum number of videos to include in grid view
	 */
	maxVideos?: number;
}


/**
 * Options available when embedding a VOD/video or webcast
 * @public
 * @group Configuration
 * @category Base
 */
export interface VbrickEmbedConfig extends VbrickVideoEmbedConfig, VbrickWebcastEmbedConfig, VbrickPlaylistEmbedConfig {}
