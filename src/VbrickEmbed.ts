import { EventBus, IListener } from './EventBus';
import { IVbrickEmbedConfig } from './IVbrickApi';

export abstract class VbrickEmbed {

	protected readonly iframe: HTMLIFrameElement;
	protected readonly eventBus: EventBus;
	private init: Promise<any>;

	constructor(
		iframeUrl: string,
		protected readonly config: IVbrickEmbedConfig,
		protected readonly container: HTMLElement
	) {

		this.iframe = this.render(iframeUrl);
		this.eventBus = new EventBus(this.iframe, this.config);

	}

	/**
	 * Indicates the embedded content was initialized and authenticated.
	 * If there was a problem loading the content, or a problem with the token, the promise will be rejected.
	 */
	public initialize(): Promise<any> {
		return this.init ?? (this.init = Promise.all([
			this.initializeToken(),
			this.eventBus.awaitEvent('load', 'error')
		])
			.then(([token])=> {
				console.log('embed loaded, authenticating');
				this.eventBus.publish('authenticated', { token });
			})
			.catch(err => {
				this.config.log && console.error('Embed initialization error: ', err);

				this.eventBus.publishError('Error loading embed content', err);
			}));
	}

	protected abstract initializeToken(): Promise<any>;
	protected abstract initializeEmbed(): void;

	public on(event: string, listener: IListener): void {
		this.eventBus.on(event, listener);
	}

	public off(event: string, listener: IListener): void {
		this.eventBus.off(event, listener);
	}

	private render(url: string): HTMLIFrameElement {
		const iframe = document.createElement('iframe');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowFullScreen', '')
		iframe.allow = 'autoplay';
		iframe.width = this.config.width || '100%';
		iframe.height = this.config.height || '100%';
		iframe.src = url;

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
	}
}
