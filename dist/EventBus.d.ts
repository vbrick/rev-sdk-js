import { IVbrickWebcastConfig } from "./IVbrickApi";
export interface IListener {
    (e: any): void;
}
export declare class EventBus {
    private win;
    private msgListener;
    private readonly baseUrl;
    private readonly shouldLog;
    private eventHandlers;
    constructor(iframe: HTMLIFrameElement, config: IVbrickWebcastConfig);
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
