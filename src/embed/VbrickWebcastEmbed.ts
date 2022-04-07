import { VbrickSDKToken } from '../VbrickSDK';
import { IVbrickWebcastEmbed, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
import { initializeWebcastToken } from './webcastAuth';
import { VbrickEmbedConfig } from './VbrickEmbedConfig';


export class VbrickWebcastEmbed extends VbrickEmbed implements IVbrickWebcastEmbed {

	private _status: WebcastStatus;
	public get status() {
		return this._status;
	};

	constructor(
		private readonly webcastId: string,
		config: VbrickEmbedConfig,
		container: HTMLElement
	) {
		super(new URL(`/embed/webcast/${webcastId}${config.token ? '?tk' : ''}`, config.baseUrl).toString(), config, container);
	}

	protected initializeToken(): Promise<VbrickSDKToken> {
		return initializeWebcastToken(this.webcastId, this.config);
	}

	protected initializeEmbed(): void {
		['webcastStarted', 'broadcastStarted', 'broadcastStopped', 'webcastEnded'].forEach(event => {
			this.eventBus.on(event, data => this._status = data.status);
		});

		this.eventBus.awaitEvent('webcastLoaded').then(data => {
			this._status = data.status;
		});
	}

}
