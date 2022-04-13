import { VbrickSDKConfig } from './VbrickSDK';
/**
 * Assign default configuration values that will be applied to future api calls.
 * @param configuration A configuration object.
 *
 * @example
 * Presetting a rev URL:
 * ```
 * revSdk.setDefaultConfig({ baseUrl: 'https://rev1.site.com' })
 * ```
 */
export declare function setDefaultConfig(configuration: Partial<VbrickSDKConfig>): void;
export declare function resolveConfig(configuration: Partial<VbrickSDKConfig>): VbrickSDKConfig;
