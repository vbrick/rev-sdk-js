import { IVbrickVideoEmbed, IVbrickVideoConfig } from './IVbrickApi';
import { VbrickEmbed } from './VbrickEmbed';

export class VbrickVideoEmbed extends VbrickEmbed implements IVbrickVideoEmbed {

	constructor(
		private readonly videoId: string,
		config: IVbrickVideoConfig,
		container: HTMLElement
	) {
		super(getEmbedUrl(videoId, config), config, container);
	}

	protected initializeToken(): Promise<any> {
		return Promise.resolve(this.config.token);
	}
	protected initializeEmbed(): void {
		throw new Error('Method not implemented.');
	}
}

function getEmbedUrl(id: string, config: IVbrickVideoConfig): string {
	return [
		[`${config.baseUrl}/embed?tk&id=${id}`, true],
		['startAt', config.startAt],
		['placeholder', config.popOut],
		['accent', config.accentColor],
		['noCenterButtons', config.hideOverlayControls],
		['noPlayBar', config.hidePlayControls],
		['noCc', config.hideCaptions],
		['noSettings', config.hideSettings],
		['noFullscreen', config.hideFullscreen]
	]
		.map(([key, value]) =>
			!value ? undefined :
			value === true ? key :
			`${key}=${encodeURIComponent(value)}`)
		.filter(Boolean)
		.join('&');
}
