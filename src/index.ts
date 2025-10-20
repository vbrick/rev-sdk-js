/**
 * A javascript SDK for embedding or calling rev APIs
 *
 * @packageDocumentation
 */

import { embedVideo, embedWebcast, embedPlaylist, PlayerStatus, WebcastStatus, PlaylistLayout } from './embed';
import {TokenType} from './VbrickSDK';

export * from './embed';
export * from './VbrickSDK';



/**
 * @public
 * @group Core API
 * @category Core
 */
const revSDK = {
    embedWebcast,
    embedVideo,
    embedPlaylist,
    TokenType,
    PlayerStatus,
    WebcastStatus,
    PlaylistLayout
};

export default revSDK;