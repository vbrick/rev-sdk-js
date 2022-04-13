import { IVbrickVideoEmbed } from './IVbrickApi';
import { VbrickSDKConfig } from '../VbrickSDK';
import { VbrickVideoEmbed } from './VbrickVideoEmbed';
import { lookupElement } from '../util';
import { resolveConfig } from '../Config';


/**
 *
 * @param element Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.
 * @param videoId
 * @param config
 * @returns
 */
export function embedVideo(
	element: HTMLElement | string,
	videoId: string,
	config: VbrickSDKConfig
): IVbrickVideoEmbed {
	const el = lookupElement(element);
	const cfg = resolveConfig(config) as VbrickSDKConfig;

	const video = new VbrickVideoEmbed(videoId, cfg, el);
	video.initialize();
	return video;
}
