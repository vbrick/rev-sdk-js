import { IVbrickWebcastConfig } from "./IVbrickApi";

export interface IListener {
	(e: any): void;
}

export class EventBus {
	private win: Window;
	private msgListener: (e: MessageEvent) => void;
	private readonly baseUrl: string;
	private readonly shouldLog: boolean;

	private eventHandlers: { [e: string]: IListener[] } = {};

	constructor(
		iframe: HTMLIFrameElement,
		config: IVbrickWebcastConfig
	){
		this.win = iframe.contentWindow;
		this.msgListener = this.handleMessage.bind(this);

		globalThis.addEventListener('message', this.msgListener);
		this.baseUrl = config.baseUrl;
		this.shouldLog = !!config.log;
	}


	public on(event: string, fn: IListener): () => void {
		const handlers = this.getHandlers(event);
		handlers.push(fn);

		return () => this.off(event, fn);
	}

	public awaitEvent(event: string, failEvent?: string, timeout: number = 30000): Promise<any> {
		return new Promise((resolve, reject) => {
			const handler = (fn: (e: any) => void) => e => {
				fn(e);
				this.off(event, onEvent);
				this.off(failEvent, onErr);
				clearTimeout(timer);
			};

			const onEvent = handler(resolve);
			const onErr = handler(reject);
			this.on(event, onEvent);

			if(failEvent) {
				this.on(failEvent, onErr);
			}

			const timer = setTimeout(() => onErr(event + ': timeout'), timeout);
		});
	}

	public off(event: string, fn: IListener) {
		const handlers = this.getHandlers(event);
		const i = handlers.indexOf(fn);
		if(i >= 0) {
			handlers.splice(i, 1);
		}
	}

	public publish(event: string, msg?: any): void {
		this.shouldLog && console.log('rev client posting message. ', event);
		this.win.postMessage({
			app: 'vbrick',
			event,
			msg
		}, this.baseUrl);
	}

	public publishError(msg: string, err: any) {
		this.callHandlers('error', { msg, err });
		this.win.postMessage({
			app: 'vbrick',
			event: 'error',
			msg
		}, this.baseUrl);
	}

	private handleMessage(e: MessageEvent): void {
		const data = e.data || {};

		if(e.origin !== this.baseUrl ||
			data.app !== 'vbrick' ||
			!data.event) {
			this.shouldLog && console.log('rev client dropping inbound message. ', e.data);
			return;
		}

		this.shouldLog && console.log('rev client inbound message. ', e.data);

		this.callHandlers(data.event, data.msg);
	}

	private callHandlers(event: string, data: any): void {
		const handlers = this.getHandlers(event);
		handlers.forEach(h => h(data));
	}

	private getHandlers(event: string): IListener[] {
		const h = this.eventHandlers;
		if(!h[event]) {
			h[event] = [];
		}
		return h[event];
	}

	public destroy(): void {
		globalThis.removeEventListener('message', this.msgListener);
	}
}
