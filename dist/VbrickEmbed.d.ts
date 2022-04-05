import { EventBus, IListener } from './EventBus';
import { IVbrickEmbedConfig } from './IVbrickApi';
export declare abstract class VbrickEmbed {
    protected readonly iframeUrl: string;
    protected readonly config: IVbrickEmbedConfig;
    protected readonly container: HTMLElement;
    protected iframe: HTMLIFrameElement;
    protected eventBus: EventBus;
    private init;
    protected unsubscribes: Array<() => void>;
    constructor(iframeUrl: string, config: IVbrickEmbedConfig, container: HTMLElement);
    /**
     * Indicates the embedded content was initialized and authenticated.
     * If there was a problem loading the content, or a problem with the token, the promise will be rejected.
     */
    initialize(): Promise<any>;
    protected abstract initializeToken(): Promise<any>;
    protected abstract initializeEmbed(): void;
    on(event: string, listener: IListener): void;
    off(event: string, listener: IListener): void;
    private render;
    destroy(): void;
}
