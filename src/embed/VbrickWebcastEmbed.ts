import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
import { initializeWebcastToken } from './webcastAuth';
import { VbrickWebcastEmbedConfig } from './VbrickEmbedConfig';


export class VbrickWebcastEmbed extends VbrickEmbed implements IVbrickWebcastEmbed {

	private _webcastStatus: WebcastStatus;
	public get webcastStatus() {
		return this._webcastStatus;
	};

	constructor(
		private readonly webcastId: string,
		config: VbrickWebcastEmbedConfig,
		container: HTMLElement
	) {
		super(new URL(`/embed/webcast/${webcastId}${config.token ? '?tk' : ''}`, config.baseUrl).toString(), config, container);
	}

	protected initializeToken(): Promise<VbrickSDKToken> {
		return initializeWebcastToken(this.webcastId, this.config);
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
