import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';
export declare class VbrickWebcastEmbed extends VbrickEmbed implements IVbrickWebcastEmbed {
    private readonly webcastId;
    private _status;
    get status(): WebcastStatus;
    constructor(webcastId: string, config: VbrickEmbedConfig, container: HTMLElement);
    protected initializeToken(): Promise<VbrickSDKToken>;
    protected initializeEmbed(): void;
}
