import { IVbrickVideoEmbed } from './IVbrickApi';
import { VbrickSDKConfig } from '../VbrickSDK';
/**
 *
 * @param element Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.
 * @param videoId
 * @param config
 * @returns
 */
export declare function embedVideo(element: HTMLElement | string, videoId: string, config: VbrickSDKConfig): IVbrickVideoEmbed;
