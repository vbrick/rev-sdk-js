import { IVbrickEmbedConfig } from './IVbrickApi';
export interface ILogger {
    log(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
export declare function init(cfg: IVbrickEmbedConfig): void;
export declare function getLogger(): ILogger;
