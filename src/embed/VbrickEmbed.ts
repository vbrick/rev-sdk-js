import { EventBus, IListener } from './EventBus';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';
import { getLogger, ILogger } from '../Log';
import { IVbrickBaseEmbed } from './IVbrickApi';
import { VbrickSDKToken } from '../VbrickSDK';

/**
 * Base class for embedded content.
 */
export abstract class VbrickEmbed implements IVbrickBaseEmbed {

	protected iframe: HTMLIFrameElement;
	protected eventBus: EventBus;
	private init: Promise<any>;
	protected unsubscribes: Array<() => void>;
	protected logger: ILogger;

	constructor(
		protected readonly iframeUrl: string,
		protected readonly config: VbrickEmbedConfig,
		protected readonly container: HTMLElement
	) {
		this.logger = getLogger(this.config);
	}

	/**
	 * Indicates the embedded content was initialized and authenticated.
	 * If there was a problem loading the content, or a problem with the token, the promise will be rejected.
	 */
	public initialize(): Promise<any> {
		if(this.init) {
			return this.init;
		}
		this.iframe = this.render();
		this.eventBus = new EventBus(this.iframe, this.config);
		this.initializeEmbed();

		const init = Promise.all([
			this.initializeToken(),
			this.eventBus.awaitEvent('load')
		]).then(([token])=> {
			this.logger.log('embed loaded, authenticating');
			this.eventBus.publish('authenticated', { token });
		})
		.catch(err => {
			this.logger.error('Embed initialization error: ', err);

			this.eventBus.publishError('initializationFailed');
			this.eventBus.emitLocalError('Error loading embed content', err);
		});

		this.init = Promise.race([
			init,
			this.eventBus.awaitEvent('error')
				.then(e => Promise.reject(e))
		]);

		return this.init;
	}

	protected abstract initializeToken(): Promise<any>;
	protected abstract initializeEmbed(): void;

	public on(event: string, listener: IListener): void {
		//ensure internal updates take effect before calling client handlers
		this.eventBus.on(event, e => setTimeout(() => listener(e)));
	}

	public off(event: string, listener: IListener): void {
		this.eventBus.off(event, listener);
	}

	private render(): HTMLIFrameElement {
		const iframe = document.createElement('iframe');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowFullScreen', '')
		iframe.allow = 'autoplay';
		iframe.width = this.config.width || '100%';
		iframe.height = this.config.height || '100%';
		iframe.src = this.iframeUrl;

		if(this.config.className) {
			iframe.className = this.config.className;
		}

		this.container.appendChild(iframe);

		return iframe;
	}

	public destroy(): void {
		this.iframe.remove();
		this.eventBus.destroy();
		this.init = null;
		this.unsubscribes?.forEach(fn => fn());
	}

	public updateToken(newToken: VbrickSDKToken): void {
		this.config.token = newToken;
		this.initializeToken().then(token =>
			this.eventBus.publish('authChanged', { token }))
		.catch(e => this.logger.error('Error updating token: ', e));
	}
}
