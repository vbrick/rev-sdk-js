import { IVbrickVideoConfig, IVbrickWebcastConfig } from './IVbrickApi';
import { init as initLog } from './Log';

type TConfig = IVbrickWebcastConfig & IVbrickVideoConfig;

const defaultConfig: any = {
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
 export function setDefaultConfig(configuration: Partial<TConfig>): void {
	Object.assign(defaultConfig, configuration);
}

export function resolveConfig(configuration: Partial<TConfig>): any {
	const cfg = {
		...defaultConfig,
		...configuration,
	};
	validateConfig(cfg);
	initLog(cfg);
	return cfg;
}

function validateConfig(cfg: TConfig): void {
	if(!cfg.baseUrl?.match(/^https?:\/\//)) {
		throw new Error('Rev SDK Error: baseUrl invalid');
	}
}
