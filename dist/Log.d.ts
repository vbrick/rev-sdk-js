import { VbrickSDKConfig } from "./VbrickSDK";
export interface ILogger {
    log(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
export declare function getLogger(cfg: VbrickSDKConfig): ILogger;
