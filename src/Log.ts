import { VbrickSDKConfig } from "./VbrickSDK";

export interface ILogger {
	log(message?: any, ...optionalParams: any[]): void;
	error(message?: any, ...optionalParams: any[]): void;
}

export function getLogger(cfg: VbrickSDKConfig): ILogger {
	return cfg.log ? console : {
/**
 * @internal
 */
		log: noop,
		error: noop
	};
}

function noop (){}
