[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / TEmbedMessages

# Type Alias: TEmbedMessages

> **TEmbedMessages**: `object`

Authentication/load events

## Type declaration

### authChanged

> **authChanged**: `void`

Authentication has been updated

### error

> **error**: `object`

Returned if an error occurs in the communication with the embed * (for example, a bad token)*

### error.msg

> **msg**: `string`

Diagnostic error message

### load

> **load**: `void`

Fired on initial embed load

### playerStatusChanged

> **playerStatusChanged**: `object`

Fired when the player has changed state *(Play/Pause/Buffering, etc.)*

### playerStatusChanged.status

> **status**: [`PlayerStatus`](../enumerations/PlayerStatus.md)

### subtitlesChanged

> **subtitlesChanged**: [`ISubtitles`](../interfaces/ISubtitles.md)

Fired when subtitles are changed or enabled/disabled

### videoLoaded

> **videoLoaded**: [`IVideoInfo`](../interfaces/IVideoInfo.md)

Passes metadata of video

### volumeChanged

> **volumeChanged**: `number`

Fired when the player's volume is updated

## Defined in

[embed/IVbrickEvents.ts:8](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L8)
