import { VbrickSDKConfig } from './VbrickSDK';

const defaultConfig: any = { };

export function resolveConfig<TConfig extends VbrickSDKConfig>(configuration: TConfig): TConfig {
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
