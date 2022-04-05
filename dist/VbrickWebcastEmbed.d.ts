import { IVbrickAPIToken, IVbrickWebcastEmbed, IVbrickWebcastConfig, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
export declare class VbrickWebcastEmbed extends VbrickEmbed implements IVbrickWebcastEmbed {
    private readonly webcastId;
    private _status;
    get status(): WebcastStatus;
    constructor(webcastId: string, config: IVbrickWebcastConfig, container: HTMLElement);
    protected initializeToken(): Promise<IVbrickAPIToken>;
    protected initializeEmbed(): void;
}
