import { VbrickSDKConfig } from './VbrickSDK';

const defaultConfig: any = { };

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
