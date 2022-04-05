import { IVbrickVideoEmbed, IVbrickVideoConfig, ICaptionSettings } from './IVbrickApi';
import { PlayerStatus } from './PlayerStatus';
import { VbrickEmbed } from './VbrickEmbed';
export declare class VbrickVideoEmbed extends VbrickEmbed implements IVbrickVideoEmbed {
    private readonly videoId;
    /**
    * video playing, buffering, etc
    */
    get playerStatus(): PlayerStatus;
    private _playerStatus;
    /**
    * Player Volume. 0-1
    */
    get volume(): number;
    private _volume;
    /**
     * Whether captions are enabled, and selected language
     */
    get captions(): ICaptionSettings;
    private _captions;
    /**
     * Contains metadata for the video
     */
    readonly videoInfo: any;
    constructor(videoId: string, config: IVbrickVideoConfig, container: HTMLElement);
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
     * @param volume {number} 0-1
     */
    setVolume(volume: number): void;
    protected initializeToken(): Promise<any>;
    protected initializeEmbed(): void;
    destroy(): void;
}
