import { EventBus, IListener } from './EventBus';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';
import { ILogger } from '../Log';
/**
 * Base class for embedded content.
 */
export declare abstract class VbrickEmbed {
    protected readonly iframeUrl: string;
    protected readonly config: VbrickEmbedConfig;
    protected readonly container: HTMLElement;
    protected iframe: HTMLIFrameElement;
    protected eventBus: EventBus;
    private init;
    protected unsubscribes: Array<() => void>;
    protected logger: ILogger;
    constructor(iframeUrl: string, config: VbrickEmbedConfig, container: HTMLElement);
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
