import { EventBus, IListener } from './EventBus';
import { IVbrickEmbedConfig } from './IVbrickApi';
import { getLogger } from './Log';

export abstract class VbrickEmbed {

	protected iframe: HTMLIFrameElement;
	protected eventBus: EventBus;
	private init: Promise<any>;
	protected unsubscribes: Array<() => void>;

	constructor(
		protected readonly iframeUrl: string,
		protected readonly config: IVbrickEmbedConfig,
		protected readonly container: HTMLElement
	) {
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

		this.init = Promise.all([
			this.initializeToken(),
			this.eventBus.awaitEvent('load', 'error')
		])
			.then(([token])=> {
				getLogger().log('embed loaded, authenticating');
				this.eventBus.publish('authenticated', { token });
			})
			.catch(err => {
				getLogger().error('Embed initialization error: ', err);

				this.eventBus.publishError('Error loading embed content', err);
			});

		return this.init;
	}

	protected abstract initializeToken(): Promise<any>;
	protected abstract initializeEmbed(): void;

	public on(event: string, listener: IListener): void {
		this.eventBus.on(event, listener);
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
}
