import { WebcastStatus } from './WebcastStatus';
import { PlayerStatus } from './PlayerStatus';
export { WebcastStatus } from './WebcastStatus';
export { PlayerStatus } from './PlayerStatus';
export interface IVbrickAPIToken {
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
export declare enum TokenType {
    JWT = "JWT",
    ACCESS_TOKEN = "AccessToken"
}
export interface IVbrickEmbedConfig {
    token: IVbrickAPIToken;
    /**
     * URL for Rev
     */
    baseUrl: string;
    /**
     * An optional class to be set on the iframe.
     */
    className: string;
    /**
     * Width of the iframe. Default is "100%"
     */
    width: string;
    /**
     * Height of the iframe. Default is "100%"
     */
    height: string;
    /**
     * If true, enable logging messages in the browser console.
     */
    log?: boolean;
}
export interface IVbrickWebcastConfig extends IVbrickEmbedConfig {
    /**
     * Optional, default is true.
     */
    showVideo?: boolean;
}
export interface IVbrickVideoConfig extends IVbrickEmbedConfig {
    /**
     * Plays the video in a popup window. If false(default) the video plays directly in the embed element.
     */
    popOut?: boolean;
    autoplay?: boolean;
    playInLoop?: boolean;
    hideChapters?: boolean;
    hideOverlayControls?: boolean;
    hidePlayControls?: boolean;
    hideCaptions?: boolean;
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
export interface IVbrickVideoEmbed extends IVbrickBaseEmbed {
}
export interface IVbrickWebcastEmbed extends IVbrickBaseEmbed {
    /**
     * Indicates whether the webcast is started, or broadcasting.
     */
    readonly status: WebcastStatus;
    /**
     * Register an event handler. Events are fired at different lifecycle stages of the webcast
     * @param event
     * @param listener
     */
    on(event: string, listener: (event: any) => void): void;
    /**
     * Fired when the webcast starts broadcasting.
     */
    on(event: 'broadcastStarted', listener: () => void): void;
    /**
     * Fired when the webcast stops broadcasting.
     */
    on(event: 'broadcastStopped', listener: () => void): void;
    /**
     * Fired when the webcast starts.
     *
     * isPreProduction: boolean, Indicates that the webcast is running in pre-production mode, and is not started publicly.
     */
    on(event: 'webastStarted', listener: (event: {
        isPreProduction: boolean;
    }) => void): void;
    /**
     * Fired when the webcast ends.
     */
    on(event: 'webcastEnded', listener: () => void): void;
}
export interface IVbrickBaseEmbed {
    /**
     * Fires when the video metadata is loaded
     */
    on(event: 'videoLoaded', listener: (event: any) => void): void;
    /**
     * Fired if the player volume changes
     * @param volume number between 0 and 1
     */
    on(event: 'volumeChanged', listener: ({ volume: number }: {
        volume: any;
    }) => void): void;
    /**
     * Fired when the player status changes
     * @param status PlayerStatus can be one of the following:
     *     Initializing,
     *     Playing,
     *     Paused,
     *     Buffering,
     *     Ended,
     */
    on(event: 'playerStatusChanged', listener: (event: {
        status: PlayerStatus;
    }) => void): void;
    /**
     * get status of the embedded player
     */
    /**
     * Fired when the captions are toggled, or the language changes
     * @param enabled true if the captions are on
     * @param language The displayed language for caption text
     */
    on(event: 'captionsChanged', listener: (event: ICaptionSettings) => void): void;
    /**
     * Fired when the playback speed changes. Only available for prerecorded video on demand.
     * @param speed number. Multiplier for the video playback speed. 1 is normal speed.
     * @param listener
     */
    on(event: 'playbackSpeedChanged', listener: (event: {
        speed: number;
    }) => void): void;
    /**
     * Fired when the user seeks in the video player
     */
    on(event: 'seeked', listener: (event: {
        speed: number;
    }) => void): void;
    /**
     * Fired if there is an error
     */
    on(event: 'error', listener: (event: {
        msg: string;
        err: any;
    }) => void): void;
    /**
     * Removes an event listener
     */
    off(event: string, listener: (event: any) => void): void;
    /**
     * Removes the embedded content from the DOM.
     */
    destroy(): void;
}
export interface ICaptionSettings {
    enabled: boolean;
    language: string;
}
export interface IVideoInfo {
    id: string;
    title: string;
    description: string;
}
