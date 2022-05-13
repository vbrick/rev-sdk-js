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
		super(getEmbedUrl(webcastId, config), config, container);
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

function getEmbedUrl(id: string, config: VbrickWebcastEmbedConfig): string {
	const query = [
		['tk', !!config.token],
		['autoplay', config.autoplay],
		['popupAuth', !config.token && (config.popupAuth ? 'true' : 'false')],
		['enableFullRev', config.enableFullRev]
	]
		.map(([key, value]) =>
			!value ? undefined :
			value === true ? key :
			`${key}=${encodeURIComponent(value)}`)
		.filter(Boolean)
		.join('&');

	return `${config.baseUrl}/embed/webcast/${id}?${query}`;
}
