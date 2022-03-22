import { IVbrickEmbedConfig } from './IVbrickApi';

let enableLogging = false;

export interface ILogger {
	log(message?: any, ...optionalParams: any[]): void;
	error(message?: any, ...optionalParams: any[]): void;
}

export function init(cfg: IVbrickEmbedConfig): void {
	enableLogging = !!cfg.log;
}

export function getLogger(): ILogger {
	return enableLogging ? console : {
		log: noop,
		error: noop
	};
}

function noop (){}
