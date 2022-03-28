import { IVbrickVideoConfig } from './IVbrickApi';
import { VbrickVideoEmbed } from './VbrickVideoEmbed';
import { lookupElement } from './util';
import { resolveConfig } from './Config';

export function embedVideo(
	element: HTMLElement | string,
	videoId: string,
	config: IVbrickVideoConfig
): VbrickVideoEmbed {
	const el = lookupElement(element);
	const cfg = resolveConfig(config) as IVbrickVideoConfig;

	const video = new VbrickVideoEmbed(videoId, cfg, el);
	video.initialize();
	return video;
}
