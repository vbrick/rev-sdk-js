import { IVbrickVideoConfig, IVbrickWebcastConfig } from './IVbrickApi';
declare type TConfig = IVbrickWebcastConfig & IVbrickVideoConfig;
/**
 * Assign default configuration values that will be applied to future api calls.
 * @param configuration A configuration object.
 *
 * @example
 * Presetting a rev URL:
 * ```
 * vbrickEmbed.setDefaultConfig({ baseUrl: 'https://rev1.site.com' })
 * ```
 */
export declare function setDefaultConfig(configuration: Partial<TConfig>): void;
export declare function resolveConfig(configuration: Partial<TConfig>): any;
export {};
