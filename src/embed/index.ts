import type { IVbrickPlaylistEmbed, IVbrickVideoEmbed, IVbrickWebcastEmbed } from './IVbrickApi';
import type { VbrickPlaylistEmbedConfig, VbrickVideoEmbedConfig, VbrickWebcastEmbedConfig } from './VbrickEmbedConfig';
import { VbrickVideoEmbed } from './VbrickVideoEmbed';
import { VbrickWebcastEmbed } from './VbrickWebcastEmbed';
import { VbrickPlaylistEmbed } from './VbrickPlaylistEmbed';
import { lookupElement } from '../util';
import { resolveConfig } from '../Config';

export * from './IVbrickApi';
export * from './VbrickEmbedConfig';

/**
 * Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.
 * @public
 * @param element - Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.
 * @param videoId - ID of the video to embed
 * @param config - A configuration object
 * @returns An {@link IVbrickVideoEmbed} object
 */
export function embedVideo(
	element: HTMLElement | string,
	videoId: string,
	config: VbrickVideoEmbedConfig
): IVbrickVideoEmbed {
	const el = lookupElement(element);
	const cfg = resolveConfig(config);

	const video = new VbrickVideoEmbed(videoId, cfg, el);
	video.initialize().catch(() => {});
	return video;
}


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
export function embedWebcast(
	element: HTMLElement | string,
	webcastId: string,
	config: VbrickWebcastEmbedConfig
): IVbrickWebcastEmbed {

	const el = lookupElement(element);
	const cfg = resolveConfig(config);

	const webcast = new VbrickWebcastEmbed(webcastId, cfg, el);
	webcast.initialize().catch(() => {});
	return webcast;
}

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
export function embedPlaylist(
	element: HTMLElement | string,
	playlistId: string,
	config: VbrickPlaylistEmbedConfig
): IVbrickPlaylistEmbed {

	const el = lookupElement(element);
	const cfg = resolveConfig(config);

	const player = new VbrickPlaylistEmbed(playlistId, cfg, el);
	player.initialize().catch(() => {});
	return player;
}

