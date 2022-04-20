import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
import { initializeWebcastToken } from './webcastAuth';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';


export class VbrickWebcastEmbed extends VbrickEmbed implements IVbrickWebcastEmbed {

	private initialized: Promise<any>;
	private _webcastStatus: WebcastStatus;
	public get webcastStatus() {
		return this._webcastStatus;
	};

	constructor(
		private readonly webcastId: string,
		config: VbrickEmbedConfig,
		container: HTMLElement
	) {
		super(new URL(`/embed/webcast/${webcastId}${config.token ? '?tk' : ''}`, config.baseUrl).toString(), config, container);
	}

	protected initializeToken(force?: boolean): Promise<VbrickSDKToken> {
		if(!this.initialized || force) {
			this.initialized = initializeWebcastToken(this.webcastId, this.config);
		}
		return this.initialized;
	}

	protected initializeEmbed(): void {
		['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach(event => {
			this.eventBus.on(event, data => this._webcastStatus = data.status);
		});

		this.eventBus.awaitEvent('webcastLoaded').then(data => {
			this._webcastStatus = data.status;
		});
	}

}
