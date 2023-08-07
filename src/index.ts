/**
 * A javascript SDK for embedding or calling rev APIs
 *
 * @packageDocumentation
 */

import { embedWebcast } from './embed';
import { embedVideo } from './embed';

export * from './embed';
export * from './VbrickSDK';


/**
 * @public
 */
const revSDK = {
    embedWebcast,
    embedVideo
};

export default revSDK;