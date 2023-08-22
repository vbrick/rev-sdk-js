import { getEmbedUrl } from "../util";
import {VbrickVideoEmbed} from "./VbrickVideoEmbed";
import {IPlaylistInfo, IVbrickPlaylistEmbed} from "./IVbrickApi"
import { VbrickPlaylistEmbedConfig } from "./VbrickEmbedConfig";
import { getEmbedQuery } from "./VbrickEmbed";

export class VbrickPlaylistEmbed extends VbrickVideoEmbed implements IVbrickPlaylistEmbed {
    public get playlist(): IPlaylistInfo {
        return this._playlist;
    }
    private _playlist: IPlaylistInfo;

    public get currentIndex(): number {
        return this._index;
    }
    private _index: number = 0;

    constructor(
        id: string,
        config: VbrickPlaylistEmbedConfig,
        container: HTMLElement
    ) {
        super(id, config, container);
    }

    protected initializeEmbed(): void {
        super.initializeEmbed();
        this.eventBus.on('playlistLoaded', playlist => {
            this._playlist = playlist;
            if (this.info?.videoId) {
                this._index = getPlaylistIndex(this.playlist, this.info?.videoId) ?? 0;
            }
        });
        this.eventBus.on('videoLoaded', video => {
            // older versions of Rev do not support playlistLoaded event
            if (!this.playlist?.videos) { return; }
            this._index = getPlaylistIndex(this.playlist, video.videoId) ?? 0;
            this.eventBus.emitLocalEvent('playlistItem', {
                index: this._index,
                videoId: this.playlist.videos[this._index].id
            });
        });
    }

    public previous() {
        const vid = wrapAt(this.playlist.videos, this._index - 1);
        this.switchVideo(vid.id, true);
    }

    public next() {
        const vid = wrapAt(this.playlist.videos, this._index + 1);
        this.switchVideo(vid.id, true);
    }

    switchVideo(videoId?: string, autoplay?: boolean | undefined): void {
        this.eventBus.publish('switchVideo', { videoId, autoplay });
    }

    protected getEmbedUrl(id: string, config: VbrickPlaylistEmbedConfig): string {
        return getEmbedUrl(config.baseUrl, '/embed', {
            playlist: id,
            layout: config.layout,
            noToolbar: config.hideToolbar,
            maxRow: config.videosPerRow,
            maxVideos: config.maxVideos,
            ...getEmbedQuery(config)
        });
    }
}

/**
 * get index of the specified video within a playlist
 * @param playlist
 * @param videoId
 * @returns
 */
function getPlaylistIndex(playlist: IPlaylistInfo, videoId: string): number | undefined {
    const idx = playlist.videos.findIndex(({ id }) => id === videoId);
    return idx >= 0 ? idx : undefined;
}

/**
 * get item at index, but wrap around at edges
 * @param arr
 * @param i
 * @returns
 */
function wrapAt<T>(arr: T[], i: number): T {
    const n = arr.length;
	return arr[((i % n) + n) % n];
}