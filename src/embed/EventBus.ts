import { VbrickSDKConfig } from "../VbrickSDK";
import { TVbrickMessage, TVbrickEvent, TEventHandlers, TPlayerMethod, TAuthMethods, TWebcastMethod, IHandlerArgs } from './IVbrickEvents';

// default to 30 second timeout on authentication/SDK communication
const DEFAULT_TIMEOUT = 30 * 1000;

type IListener = (data: any) => void;

/**
 * @internal
 */
export class EventBus {
	private win: Window;
	private msgListener: (e: MessageEvent) => void;
	private readonly baseUrl: string;
	private readonly shouldLog: boolean;
	private isDestroyed: boolean = false;

	private eventHandlers: { [K in TVbrickEvent]?: Array<IListener> } = {};

	constructor(
		iframe: HTMLIFrameElement,
		config: VbrickSDKConfig
	){
		this.win = iframe.contentWindow;
		this.msgListener = this.handleMessage.bind(this);

		globalThis.addEventListener('message', this.msgListener);
		this.baseUrl = config.baseUrl;
		this.shouldLog = !!config.log;
	}

	public on<T extends TVbrickEvent>(event: T, fn: TEventHandlers[T]): () => void {
		const handlers = this.getHandlers(event);
		handlers.push(fn);

		return () => this.off(event, fn);
	}

	public awaitEvent(event: TVbrickEvent | TVbrickEvent[], failEvent: TVbrickEvent = 'error', timeout: number = DEFAULT_TIMEOUT): Promise<any> {
		const events = Array.isArray(event) ? event : [event];
		return new Promise((resolve, reject) => {
			const handler = (fn: (e: any) => void) => e => {
				fn(e);
				offHandlers.forEach(h => h());
			};

			const onEvent: any = handler(resolve);
			const onErr: any = handler(reject);
			const offHandlers = events.map(evt => this.on(evt, onEvent));

			if(failEvent) {
				offHandlers.push(this.on(failEvent, onErr));
			}

			if(timeout > 0) {
				const timer = setTimeout(() => {
					if (this.isDestroyed) { return; }
					onErr(event + ': timeout')
				}, timeout);
				offHandlers.push(() => clearTimeout(timer));
			}
		});
	}

	public off<T extends TVbrickEvent>(event: T, fn: TEventHandlers[T]): void {
		const handlers = this.getHandlers(event);
		const i = handlers.indexOf(fn);
		if(i >= 0) {
			handlers.splice(i, 1);
		}
	}

	/** Posts a message to the embed */
	public publish(...[event, msg = undefined]: TAuthMethods | TPlayerMethod | TWebcastMethod): void {
		this.shouldLog && console.log('rev client posting message. ', event);
		this.win.postMessage({
			app: 'vbrick',
			event,
			msg
		}, this.baseUrl);
	}

	/** Posts an 'error' message to the embed */
	public publishError(msg: string) {
		this.win.postMessage({
			app: 'vbrick',
			event: 'error',
			msg
		}, this.baseUrl);
	}

	/** Fires local event handlers */
	public emitLocalEvent(...[event, msg = undefined]: TVbrickMessage): void {
		this.callHandlers(event, msg);
	}

	/** Calls the local 'error' event handlers */
	public emitLocalError(msg: string, err: any) {
		this.callHandlers('error', { msg, err });
	}
	

	private handleMessage(e: MessageEvent): void {
		const data = e.data || {};

		if(e.origin !== this.baseUrl ||
			data.app !== 'vbrick' ||
			!data.event) {
			this.shouldLog && console.log('rev SDK dropping inbound message. ', e.data);
			return;
		}

		const shouldLog = this.shouldLog && data.event !== 'currentTime';

		shouldLog && console.log('rev SDK inbound message. ', e.data);

		this.callHandlers(data.event, data.msg);
	}

	private callHandlers(event: string, data: any): void {
		const handlers = Array.from(this.getHandlers(event));
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
		if (this.isDestroyed) { return; }
		this.isDestroyed = true;
		globalThis.removeEventListener('message', this.msgListener);
	}
}
