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
	protected readonly iframeUrl: string;
	protected eventBus: EventBus;
	private init: Promise<any>;
	private unsubscribes: Array<() => void>;
	protected logger: ILogger;

	constructor(
		id: string,
		protected readonly config: VbrickEmbedConfig,
		protected readonly container: HTMLElement
	) {
		this.iframeUrl = this.getEmbedUrl(id, this.config);
		this.logger = getLogger(this.config);
	}

	/**
	 * Indicates the embedded content was initialized and authenticated.
	 * If there was a problem loading the content, or a problem with the token, the promise will be rejected.
	 */
	public initialize(): Promise<void> {
		if(this.init) {
			return this.init;
		}
		this.iframe = this.render();
		this.eventBus = new EventBus(this.iframe, this.config);
		this.initializeEmbed();

		const timeout = (this.config.timeoutSeconds * 1000) || undefined;

		this.init = Promise.all([
			this.initializeToken(),
			this.eventBus.awaitEvent('load', 'error', timeout)
		])
			.then(([token])=> {
				this.logger.log('embed loaded, authenticating');
				this.eventBus.publish('authenticated', { token });
				// added fail-safe check for if authChanged event isn't passed
            	// COMBAK - remove when confirmed unnecessary
				this.eventBus.awaitEvent(['authChanged', 'videoLoaded', 'webcastLoaded'], 'error', timeout);
			})
			.catch(err => {
				this.logger.error('Embed initialization error: ', err);
				this.eventBus.publishError('initializationFailed');
				this.eventBus.emitLocalError('Error loading embed content', err);
				return Promise.reject(err);
			});

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

	public async updateToken(newToken: VbrickSDKToken): Promise<void> {
		this.config.token = newToken;
		try {
			const token = await this.initializeToken();
			this.eventBus.publish('authChanged', { token });
			await this.eventBus.awaitEvent('authChanged', 'error');
		} catch (error) {
			this.logger.error('Error updating token: ', error);
			// TODO REVIEW should this swallow error or return?
			throw error;
		}
	}
	protected abstract getEmbedUrl(id: string, config: VbrickEmbedConfig);
}
