import { VbrickSDKConfig } from './VbrickSDK';

export function resolveConfig<TConfig extends VbrickSDKConfig>(configuration: TConfig): TConfig {
	const cfg = {
		...configuration
	};
	validateConfig(cfg);
	return cfg;
}

function validateConfig(cfg: VbrickSDKConfig): void {
	if(!cfg.baseUrl?.match(/^https?:\/\//)) {
		throw new Error('Rev SDK Error: baseUrl invalid');
	}
	cfg.baseUrl = new URL(cfg.baseUrl).origin;
}
