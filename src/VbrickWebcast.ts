import { IVbrickWebcast, IVbrickWebcastConfig, WebcastStatus } from './IVbrickApi';
import { EventBus, IListener } from './EventBus';
import { initializeToken } from './auth';

export class VbrickWebcast implements IVbrickWebcast {

	private iframe: HTMLIFrameElement;
	private eventBus: EventBus;

	private _status: WebcastStatus;
	public get status() {
		return this._status;
	};

	constructor(
		private readonly webcastId: string,
		private readonly config: IVbrickWebcastConfig,
		private readonly container: HTMLElement
	) {

		this.iframe = this.render();
		this.eventBus = new EventBus(this.iframe, this.config);

		const shouldLog = !!config.log;


		Promise.all([
			initializeToken(this.webcastId, this.config),
			this.eventBus.awaitEvent('load', 'error')
		])
			.then(([token])=> {
				this.eventBus.publish('authenticated', { token });
				return this.eventBus.awaitEvent('webcastLoaded');
			})
			.then(data => {
				this._status = data.status;

				['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach(event => {
					this.eventBus.on(event, data => this._status = data.status);
				});
			})
			.catch(err => {
				shouldLog && console.error('Webcast initialization error: ', err);

				this.eventBus.publishError('Error loading webcast', err);
			});
	}

	public on(event: string, listener: IListener): void {
		this.eventBus.on(event, listener);
	}

	public off(event: string, listener: IListener): void {
		this.eventBus.off(event, listener);
	}

	public render(): HTMLIFrameElement {
		const iframe = document.createElement('iframe');
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allowFullScreen', '')
		iframe.allow = 'autoplay';
		iframe.width = this.config.width || '100%';
		iframe.height = this.config.height || '100%';
		iframe.src = `${this.config.baseUrl}/embed/webcast/${this.webcastId}?tk`;

		if(this.config.className) {
			iframe.className = this.config.className;
		}

		this.container.appendChild(iframe);

		return iframe;
	}

	public destroy(): void {
		this.iframe.remove();
		this.iframe = null;
		this.eventBus.destroy();
	}

}
