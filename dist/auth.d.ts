import { IVbrickAPIToken, IVbrickWebcastConfig } from './IVbrickApi';
export declare function initializeWebcastToken(webcastId: string, config: IVbrickWebcastConfig): Promise<IVbrickAPIToken>;
