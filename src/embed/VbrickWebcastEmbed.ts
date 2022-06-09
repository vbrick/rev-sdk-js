import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { initializeWebcastToken } from './webcastAuth';
import { VbrickEmbedConfig, VbrickWebcastEmbedConfig } from './VbrickEmbedConfig';
import { getEmbedUrl } from '../util';
import { TVbrickEvent } from './IVbrickEvents';
import { IWebcastInfo, IWebcastLayout } from "./IVbrickTypes";
import { getEmbedQuery, VbrickEmbed } from './VbrickEmbed';

export class VbrickWebcastEmbed extends VbrickEmbed<IWebcastInfo> implements IVbrickWebcastEmbed {

	public get webcastStatus() {
		return this._webcastStatus;
	};
	private _webcastStatus: WebcastStatus = WebcastStatus.Loading;
	
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

	protected async initializeEmbed(): Promise<void> {
		super.initializeEmbed();

		['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach((event: TVbrickEvent) => {
			this.eventBus.on(event, data => this._webcastStatus = data.status);
		});

		this.eventBus.on('webcastLoaded', e => {
			this._webcastStatus = e.status;
			// start initially with hidden slides
			if (this.config.showFullWebcast) {
				this.updateLayout({ video: true, presentation: false });
			}
		});
		// if a webcast is completed it may redirect to a recoreded version of it
		this.eventBus.on('videoLoaded', () => {
			this._webcastStatus = WebcastStatus.Completed;
		});
	}

	public updateLayout(layout: IWebcastLayout) {
		this.eventBus.publish('updateLayout', layout);
	}
	protected getEmbedUrl(id: string, config: VbrickEmbedConfig): string {
		return getEmbedUrl(config.baseUrl, `/embed/webcast/${id}`, {
			enableFullRev: config.showFullWebcast,
			...getEmbedQuery(config)
		});
	}
}
