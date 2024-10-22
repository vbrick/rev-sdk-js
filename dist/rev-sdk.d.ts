/**
 * @public
 */
declare enum WebcastStatus {
    /**
     * Embedded webcast is authenticating
     */
    Loading = "Loading",
    /**
     * Embedded webcast is authenticated and waiting for webcast to start
     */
    Scheduled = "Scheduled",
    /**
     * Webcast is active (but not currently Broadcasting)
     */
    InProgress = "InProgress",
    /**
     * Webcast is active with video stream
     */
    Broadcasting = "Broadcasting",
    /**
     * Webcast has ended
     */
    Completed = "Completed",
    /**
     * Fatal error embedding webcast
     */
    Error = "Error"
}

/**
 * @public
 */
declare enum PlayerStatus {
    Initializing = "Initializing",
    Playing = "Playing",
    Paused = "Paused",
    Buffering = "Buffering",
    Seeking = "Seeking",
    Ended = "Ended",
    Error = "Error"
}

/**
 * @public
 */
declare enum TokenType {
    JWT = "JWT",
    ACCESS_TOKEN = "AccessToken",
    GUEST_REGISTRATION = "GuestRegistration"
}
/**
 * @public
 */
interface VbrickSDKToken {
    type: TokenType;
    /**
     * String containing the token value
     */
    value: string;
    /**
     * The issuer for the token
     */
    issuer: string;
}
/**
 * @public
 */
interface VbrickSDKConfig {
    /**
     * URL for Rev
     */
    baseUrl: string;
    /**
     * Token for authentication
     */
    token?: VbrickSDKToken;
    /**
     * If true, sdk will log to console
     */
    log?: boolean;
}

/**
 * The current subtitles language and if enabled or not
 * @public
 */
interface ISubtitles {
    language?: string;
    enabled: boolean;
}
/**
 * Basic metadata shared between VOD and Webcast Embeds
 * @public
 */
interface IBasicInfo {
    title: string;
    isLive: boolean;
    subtitles: Array<{
        language: string;
    }>;
}
/**
 * Video Metadata
 * @public
 */
interface IVideoInfo extends IBasicInfo {
    videoId: string;
    title: string;
    status: string;
    duration: number;
    isLive: boolean;
    is360: boolean;
    hasAudioOnly: boolean;
    subtitles: Array<{
        language: string;
    }>;
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
declare enum VideoPlaybackSidebarButton {
    AI = "ai",
    CHAPTERS = "chapters",
    COMMENTS = "comments",
    INFO = "info",
    PLAYLIST = "playlist",
    PULSE = "pulse",
    REPORTS = "reports",
    REVIEW = "review",
    SHARE = "share"
}
/**
 * Event indicating the current webcast status
 * @public
 */
type IWebcastStatusMessage<T extends WebcastStatus = WebcastStatus> = {
    status: T;
    isPreProduction?: boolean;
};
/**
 * Webcast Metadata
 * @public
 */
interface IWebcastInfo extends IBasicInfo {
    webcastId: string;
    title: string;
    startDate: string;
    endDate: string;
    subtitles: Array<{
        language: string;
    }>;
    linkedVideoId?: string;
    isLive: boolean;
    isPreProduction?: boolean;
}
/**
 * Fired when a new comment has been added to Chat
 * @public
 */
interface IComment {
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
interface ISlideEvent {
    slideNumber: number;
    slideDelay: number;
}
/**
 * Details of a Webcast Poll
 * @public
 */
interface IPoll {
    pollId: string;
    question: string;
    answers: Array<{
        text: string;
        count?: number;
    }>;
    multipleChoice: boolean;
    totalResponses?: number;
}
/**
 * The Webcast Poll that has been Closed/Unpublished
 * @public
 */
type TPollId = {
    pollId: string;
};
/**
 * Details of if Video and/or Slides are currently displayed
 * @public
 */
interface IWebcastLayout {
    video?: boolean;
    presentation?: boolean;
}
/**
 * @internal
 */
interface IPlaylistSwitch {
    videoId: string;
    autoplay?: boolean;
}
/**
 * Video entry in playlist
 * @public
 */
interface IPlaylistItem {
    id: string;
    title: string;
    ownerProfileImageUri: string | null;
    ownerFullName: string;
}
/**
 * Playlist data emitted when playlist first loaded
 * @public
 */
interface IPlaylistInfo {
    id: string;
    name: string;
    videos: IPlaylistItem[];
}

/**
 * Authentication/load events
 * @public
 */
type TEmbedMessages = {
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
    playerStatusChanged: {
        status: PlayerStatus;
    };
    /** Fired when the player's volume is updated */
    volumeChanged: number;
    /** Fired when subtitles are changed or enabled/disabled */
    subtitlesChanged: ISubtitles;
};
/**
 * Video Player events
 * @public
 */
type TPlayerMessages = {
    /**
     * Fired when the playback rate has been updated
     */
    playbackSpeedChanged: number;
    /**
     * Playback position has been changed
     */
    seeked: {
        /** Playback position before seek started */
        startTime: number;
        /** Playback position when seek ended */
        endTime: number;
    };
    currentTime: {
        /** Current time in seconds into the video */
        currentTime: number;
        /** Total duration of video */
        duration: number;
    };
};
/**
 * Webcast events
 * @public
 */
type TWebcastMessages = {
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
};
/**
 * Playlist events
 * @public
 */
type TPlaylistMessages = {
    playlistLoaded: IPlaylistInfo;
    playlistItem: {
        index: number;
        videoId: string;
    };
};
/**
 * All supported events and their corresponding listener callback payload
 * @public
 */
type TVbrickMessages = TEmbedMessages & TPlayerMessages & TWebcastMessages & TPlaylistMessages;
/**
 * Events emitted by Vbrick Embed
 * @public
 */
type TVbrickEvent = Extract<keyof TVbrickMessages, string>;
/**
 * Event callback parameters for the specified event
 * @public
 */
type IListener<TEvent extends string & keyof TVbrickMessages> = TVbrickMessages[TEvent] extends void ? () => void : (data: TVbrickMessages[TEvent]) => void;

/**
 * @public
 */
declare enum PlaylistLayout {
    Filmstrip = "row",
    Grid = "grid",
    Slider = "slider"
}

/**
 * @public
 */
interface IVbrickBaseEmbed<TInfo extends IBasicInfo, Events extends string & TVbrickEvent = keyof TEmbedMessages> {
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
    readonly info?: TInfo;
    /**
     * returns a promise once the player has completed authentication and load.
     * Will reject with an error if authentication/load failed
     */
    initialize(): Promise<void>;
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
     * @param listener - callback when event is fired. Keep a reference if you intend to call {@link IVbrickBaseEmbed['off']} later
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
interface IVbrickVideoEmbed extends IVbrickBaseEmbed<IVideoInfo, keyof (TEmbedMessages & TPlayerMessages)> {
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
    readonly videoInfo?: IVideoInfo;
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
interface IVbrickWebcastEmbed extends IVbrickBaseEmbed<IWebcastInfo, keyof (TEmbedMessages & TWebcastMessages)> {
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
interface IVbrickPlaylistEmbed extends IVbrickBaseEmbed<IVideoInfo, keyof (TEmbedMessages & TPlayerMessages & TPlaylistMessages)> {
    readonly playlist: IPlaylistInfo;
    /**
     * Load a new video in the playlist. A 'videoInfo' event will be emitted once the new video has loaded
     * @param videoId  - specify video to show. It must exist in the playlist
     * @param autoplay - whether to automatically start playback on video load. Default is true
     */
    switchVideo(videoId: string, autoplay?: boolean): void;
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
    readonly videoInfo?: IVideoInfo;
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
 * Options when creating the iframe embed for a video/webcast
 * @public
 */
interface VbrickBaseEmbedConfig extends VbrickSDKConfig {
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
interface VbrickVideoEmbedConfig extends VbrickBaseEmbedConfig {
    playInLoop?: boolean;
    hideChapters?: boolean;
    hideChapterSeek?: boolean;
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
    sidebarTabs?: Partial<Record<`${VideoPlaybackSidebarButton}`, boolean>>;
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
    /** @deprecated - embed parameter name - alias for sidebar tab option */
    hideAnalytics?: boolean;
}
/**
 * Options available when embedding a webcast
 * @public
 */
interface VbrickWebcastEmbedConfig extends VbrickBaseEmbedConfig {
    /**
     * Include Chat, QA and Polls widgets in embed (if configured)
     */
    showFullWebcast?: boolean;
    /** @deprecated - embed parameter */
    enableFullRev?: boolean;
}
/**
 * @public
 */
interface VbrickPlaylistEmbedConfig extends VbrickVideoEmbedConfig {
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
 */
interface VbrickEmbedConfig extends VbrickVideoEmbedConfig, VbrickWebcastEmbedConfig, VbrickPlaylistEmbedConfig {
}

/**
 * Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.
 * @public
 * @param element - Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.
 * @param videoId - ID of the video to embed
 * @param config - A configuration object
 * @returns An {@link IVbrickVideoEmbed} object
 */
declare function embedVideo(element: HTMLElement | string, videoId: string, config: VbrickVideoEmbedConfig): IVbrickVideoEmbed;
/**
 * Embeds a webcast on the page
 * @public
 * @param element - Either a CSS selector string or HTML Element where the embed content will be rendered
 * @param webcastId - ID of the webcast to embed
 * @param config - A configuration object
 * @returns An {@link IVbrickWebcastEmbed} object
 *
 * @example
 * Embedding a webcast:
 * ```
 * //In HTML:  <div id="webcast-embed"></div>
 *
 * const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
 * revSdk.embedWebcast('#webcast-embed', webcastId, {
 *     showVideo: true,
 *     token
 * });
 * ```
 *
 */
declare function embedWebcast(element: HTMLElement | string, webcastId: string, config: VbrickWebcastEmbedConfig): IVbrickWebcastEmbed;
/**
 * Embeds a playlist on the page
 * @public
 * @param element - Either a CSS selector string or HTML Element where the embed content will be rendered
 * @param playlistId - ID of the playlist to embed
 * @param config - A configuration object
 * @returns An {@link IVbrickPlaylistEmbed} object
 *
 * @example
 * Embedding a playlist:
 * ```
 * //In HTML:  <div id="playlist-embed"></div>
 *
 * const playlistId = '0d252797-6db7-44dc-aced-25a6843d529c';
 * revSdk.embedPlaylist('#playlist-embed', playlistId, {
 *     autoplay: true,
 *     token
 * });
 * ```
 *
 */
declare function embedPlaylist(element: HTMLElement | string, playlistId: string, config: VbrickPlaylistEmbedConfig): IVbrickPlaylistEmbed;

/**
 * A javascript SDK for embedding or calling rev APIs
 *
 * @packageDocumentation
 */

/**
 * @public
 */
declare const revSDK: {
    embedWebcast: typeof embedWebcast;
    embedVideo: typeof embedVideo;
    embedPlaylist: typeof embedPlaylist;
    TokenType: typeof TokenType;
    PlayerStatus: typeof PlayerStatus;
    WebcastStatus: typeof WebcastStatus;
    PlaylistLayout: typeof PlaylistLayout;
};

export { type IBasicInfo, type IComment, type IListener, type IPlaylistInfo, type IPlaylistItem, type IPlaylistSwitch, type IPoll, type ISlideEvent, type ISubtitles, type IVbrickBaseEmbed, type IVbrickPlaylistEmbed, type IVbrickVideoEmbed, type IVbrickWebcastEmbed, type IVideoInfo, type IWebcastInfo, type IWebcastLayout, type IWebcastStatusMessage, PlayerStatus, PlaylistLayout, type TEmbedMessages, type TPlayerMessages, type TPlaylistMessages, type TPollId, type TVbrickEvent, type TVbrickMessages, type TWebcastMessages, TokenType, type VbrickBaseEmbedConfig, type VbrickEmbedConfig, type VbrickPlaylistEmbedConfig, type VbrickSDKConfig, type VbrickSDKToken, type VbrickVideoEmbedConfig, type VbrickWebcastEmbedConfig, VideoPlaybackSidebarButton, WebcastStatus, revSDK as default, embedPlaylist, embedVideo, embedWebcast };
