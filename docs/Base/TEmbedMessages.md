[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / TEmbedMessages

# Type Alias: TEmbedMessages

> **TEmbedMessages** = `object`

Defined in: [embed/IVbrickEvents.ts:10](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L10)

Authentication/load events

## Properties

### authChanged

> **authChanged**: `void`

Defined in: [embed/IVbrickEvents.ts:14](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L14)

Authentication has been updated

***

### error

> **error**: `object`

Defined in: [embed/IVbrickEvents.ts:16](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L16)

Returned if an error occurs in the communication with the embed * (for example, a bad token)*

#### msg

> **msg**: `string`

Diagnostic error message

***

### load

> **load**: `void`

Defined in: [embed/IVbrickEvents.ts:12](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L12)

Fired on initial embed load

***

### playerStatusChanged

> **playerStatusChanged**: `object`

Defined in: [embed/IVbrickEvents.ts:23](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L23)

Fired when the player has changed state *(Play/Pause/Buffering, etc.)*

#### status

> **status**: [`PlayerStatus`](PlayerStatus.md)

***

### subtitlesChanged

> **subtitlesChanged**: [`ISubtitles`](ISubtitles.md)

Defined in: [embed/IVbrickEvents.ts:27](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L27)

Fired when subtitles are changed or enabled/disabled

***

### videoLoaded

> **videoLoaded**: [`IVideoInfo`](../VOD/IVideoInfo.md)

Defined in: [embed/IVbrickEvents.ts:21](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L21)

Passes metadata of video

***

### volumeChanged

> **volumeChanged**: `number`

Defined in: [embed/IVbrickEvents.ts:25](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L25)

Fired when the player's volume is updated
