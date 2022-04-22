/**
 * A javascript SDK for embedding or calling rev APIs
 *
 * @packageDocumentation
 */

export { embedWebcast } from './embed/EmbedWebcast';
export { embedVideo } from './embed/EmbedVideo';

export * from './VbrickSDK';
export * from './embed/VbrickEmbedConfig';
export * from './embed/IVbrickApi';

import { embedWebcast } from './embed/EmbedWebcast';
import { embedVideo } from './embed/EmbedVideo';

/**
 * @public
 */
const revSDK = {
    embedWebcast,
    embedVideo
};

export default revSDK;