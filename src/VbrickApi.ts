import { IVbrickVideoConfig, IVbrickVideoEmbed, IVbrickWebcast, IVbrickWebcastConfig } from './IVbrickApi';
import { VbrickWebcast } from './VbrickWebcast';

const defaultCfg: Partial<IVbrickWebcastConfig> = {
	showVideo: true
};

/**
 * Assign default configuration values that will be applied to future api calls.
 * @param configuration A configuration object.
 *
 * @example
 * Presetting a rev URL:
 * ```
 * vbrickEmbed.defaults({ baseUrl: 'https://rev1.site.com' })
 * ```
 */
export function defaults(configuration: Partial<IVbrickWebcastConfig>) {
	Object.assign(defaultCfg, configuration);
}

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
	config: IVbrickWebcastConfig = {}
): IVbrickWebcast {

	const el: HTMLElement = element instanceof HTMLElement ? element : document.querySelector(element);

	if(!el) {
		throw new Error('Rev embedWebcast: invalid element');
	}

	const cfg =	{
		...defaultCfg,
		...config
	};

	validateConfig(cfg);

	return new VbrickWebcast(webcastId, cfg, el);
}

export function embedVideo(
	element: HTMLElement | string,
	webcastId: string,
	config: IVbrickVideoConfig
) {

}

function validateConfig(cfg: IVbrickWebcastConfig): void {
	if(!cfg.baseUrl?.match(/^https?:\/\//)) {
		throw new Error('Rev SDK Error: baseUrl invalid');
	}

}
