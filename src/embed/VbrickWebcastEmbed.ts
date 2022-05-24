import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { initializeWebcastToken } from './webcastAuth';
import { VbrickEmbedConfig, VbrickWebcastEmbedConfig } from './VbrickEmbedConfig';
import { getEmbedQuery, VbrickVideoEmbed } from './VbrickVideoEmbed';
import { getEmbedUrl } from '../util';


export class VbrickWebcastEmbed extends VbrickVideoEmbed implements IVbrickWebcastEmbed {

	private _webcastStatus: WebcastStatus;
	public get webcastStatus() {
		return this._webcastStatus;
	};

	constructor(
		private readonly webcastId: string,
		config: VbrickWebcastEmbedConfig,
		container: HTMLElement
	) {
		super(webcastId, config, container);
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

	public updateLayout(layout: { video?: boolean, presentation?: boolean}) {
		this.eventBus.publish('updateLayout', layout);
	}
	protected getEmbedUrl(id: string, config: VbrickEmbedConfig): string {
		const query = {
			enableFullRev: config.showFullWebcast,
			...getEmbedQuery(config)
		};
		return getEmbedUrl(config.baseUrl, `/embed/webcast/${id}`, query);
	}
}
