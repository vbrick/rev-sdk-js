import { IVbrickVideoEmbed } from './IVbrickApi';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';
import { VbrickVideoEmbed } from './VbrickVideoEmbed';
import { lookupElement } from '../util';
import { resolveConfig } from '../Config';


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
	config: VbrickEmbedConfig
): IVbrickVideoEmbed {
	const el = lookupElement(element);
	const cfg = resolveConfig(config) as VbrickEmbedConfig;

	const video = new VbrickVideoEmbed(videoId, cfg, el);
	video.initialize();
	return video;
}
