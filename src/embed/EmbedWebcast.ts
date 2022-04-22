import { IVbrickWebcastEmbed } from './IVbrickApi';
import { VbrickWebcastEmbed } from './VbrickWebcastEmbed';
import { lookupElement } from '../util';
import { resolveConfig } from '../Config';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';

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
	config: VbrickEmbedConfig
): IVbrickWebcastEmbed {

	const el = lookupElement(element);
	const cfg = resolveConfig(config) as VbrickEmbedConfig;

	const webcast = new VbrickWebcastEmbed(webcastId, cfg, el);
	webcast.initialize();
	return webcast;
}

