import { VbrickSDKConfig } from "src/VbrickSDK";
export interface IListener {
    (e: any): void;
}
export declare class EventBus {
    private win;
    private msgListener;
    private readonly baseUrl;
    private readonly shouldLog;
    private isDestroyed;
    private eventHandlers;
    constructor(iframe: HTMLIFrameElement, config: VbrickSDKConfig);
    on(event: string, fn: IListener): () => void;
    awaitEvent(event: string, failEvent?: string, timeout?: number): Promise<any>;
    off(event: string, fn: IListener): void;
    publish(event: string, msg?: any): void;
    publishError(msg: string, err: any): void;
    private handleMessage;
    private callHandlers;
    private getHandlers;
    destroy(): void;
}
