import { IVbrickAPIToken, IVbrickWebcast, IVbrickWebcastConfig, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
export declare class VbrickWebcast extends VbrickEmbed implements IVbrickWebcast {
    private readonly webcastId;
    private _status;
    get status(): WebcastStatus;
    constructor(webcastId: string, config: IVbrickWebcastConfig, container: HTMLElement);
    protected initializeToken(): Promise<IVbrickAPIToken>;
    protected initializeEmbed(): void;
}
