import { IVbrickWebcast, IVbrickWebcastConfig } from './IVbrickApi';
import { VbrickWebcast } from './VbrickWebcast';
import { lookupElement } from './util';
import { resolveConfig } from './Config';

/**
 * Embeds a webcast on the page
 * @param element  Either a CSS selector string or HTML Element where the embed content will be rendered
 * @param webcastId
 * @param config A configuration object
 * @returns An {@linkcode IVbrickWebcastConfig} object
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
	config: IVbrickWebcastConfig
): IVbrickWebcast {

	const el = lookupElement(element);
	const cfg = resolveConfig(config) as IVbrickWebcastConfig;

	return new VbrickWebcast(webcastId, cfg, el);
}

