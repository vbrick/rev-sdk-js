import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, IWebcastInfo, WebcastStatus } from './IVbrickApi';
import { initializeWebcastToken } from './webcastAuth';
import { VbrickEmbedConfig, VbrickWebcastEmbedConfig } from './VbrickEmbedConfig';
import { getEmbedQuery, VbrickVideoEmbed } from './VbrickVideoEmbed';
import { getEmbedUrl } from '../util';


export class VbrickWebcastEmbed extends VbrickVideoEmbed implements IVbrickWebcastEmbed {

	public get webcastStatus() {
		return this._webcastStatus;
	};
	private _webcastStatus: WebcastStatus = WebcastStatus.Loading;
	
	public get webcastInfo() {
		return this._webcastInfo;
	}
	private _webcastInfo: IWebcastInfo;

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

		['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach(event => {
			this.eventBus.on(event, data => this._webcastStatus = data.status);
		});

		this.eventBus.on('webcastLoaded', e => {
			this._webcastStatus = e.status;
			this._webcastInfo = e;
		});
		// if a webcast is over it may redirect to a recoreded version of it
		this.eventBus.on('videoLoaded', () => {
			this._webcastStatus = WebcastStatus.Completed;
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
