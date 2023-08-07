import { TokenType, VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { authenticateGuestToken } from './auth';
import { VbrickEmbedConfig, VbrickWebcastEmbedConfig } from './VbrickEmbedConfig';
import { getEmbedUrl } from '../util';
import { IWebcastInfo, IWebcastLayout } from "./IVbrickTypes";
import { getEmbedQuery, VbrickEmbed } from './VbrickEmbed';

function isFullWebcastEnabled(config: VbrickWebcastEmbedConfig) {
	return config.showFullWebcast ?? config.enableFullRev;
}

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
		const {type, issuer} = this.config.token ?? {};

		if (type === TokenType.GUEST_REGISTRATION || (type === TokenType.JWT && issuer === 'vbrick_rev')) {
			return authenticateGuestToken(this.webcastId, this.config);
		}

		return super.initializeToken();
	}

	protected async initializeEmbed(): Promise<void> {
		super.initializeEmbed();

		(<const>['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded']).forEach(event => {
			this.eventBus.on(event, data => this._webcastStatus = data.status);
		});

		this.eventBus.on('webcastLoaded', e => {
			this._webcastStatus = e.status;
			// start initially with hidden slides
			if (isFullWebcastEnabled(this.config)) {
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
			enableFullRev: isFullWebcastEnabled(config),
			...getEmbedQuery(config)
		});
	}
}
