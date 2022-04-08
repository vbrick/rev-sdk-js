import { VbrickSDKConfig } from './VbrickSDK';

let defaultConfig: any = {
	showVideo: true
};

/**
 * Assign default configuration values that will be applied to future api calls.
 * @param configuration A configuration object.
 *
 * @example
 * Presetting a rev URL:
 * ```
 * vbrickEmbed.setDefaultConfig({ baseUrl: 'https://rev1.site.com' })
 * ```
 */
 export function setDefaultConfig(configuration: Partial<VbrickSDKConfig>): void {
	defaultConfig = {
		...defaultConfig,
		...configuration
	};
}

export function resolveConfig(configuration: Partial<VbrickSDKConfig>): VbrickSDKConfig {
	const cfg = {
		...defaultConfig,
		...configuration,
	};
	validateConfig(cfg);
	return cfg;
}

function validateConfig(cfg: VbrickSDKConfig): void {
	if(!cfg.baseUrl?.match(/^https?:\/\//)) {
		throw new Error('Rev SDK Error: baseUrl invalid');
	}
}
