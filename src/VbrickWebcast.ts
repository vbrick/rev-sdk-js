import { IVbrickAPIToken, IVbrickWebcast, IVbrickWebcastConfig, WebcastStatus } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';
import { initializeWebcastToken } from './auth';

export class VbrickWebcast extends VbrickEmbed implements IVbrickWebcast{

	private _status: WebcastStatus;
	public get status() {
		return this._status;
	};

	constructor(
		private readonly webcastId: string,
		config: IVbrickWebcastConfig,
		container: HTMLElement
	) {
		super( `${config.baseUrl}/embed/webcast/${webcastId}?tk`, config, container);
	}

	protected initializeToken(): Promise<IVbrickAPIToken> {
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
