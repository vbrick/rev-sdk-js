[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed\<TInfo, Events\>

Defined in: [embed/IVbrickApi.ts:19](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L19)

This is the core player class returned by `embedVideo`, `embedWebcast` and `embedPlaylist`.

## Extended by

- [`IVbrickVideoEmbed`](../VOD/IVbrickVideoEmbed.md)
- [`IVbrickWebcastEmbed`](../Webcast/IVbrickWebcastEmbed.md)
- [`IVbrickPlaylistEmbed`](../Playlist/IVbrickPlaylistEmbed.md)

## Type Parameters

### TInfo

`TInfo` *extends* [`IBasicInfo`](IBasicInfo.md)

### Events

`Events` *extends* `string` & [`TVbrickEvent`](TVbrickEvent.md) = keyof [`TEmbedMessages`](TEmbedMessages.md)

## Properties

### currentSubtitles

> `readonly` **currentSubtitles**: [`ISubtitles`](ISubtitles.md)

Defined in: [embed/IVbrickApi.ts:33](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L33)

Whether subtitles are enabled, and selected language

***

### info?

> `readonly` `optional` **info**: `TInfo`

Defined in: [embed/IVbrickApi.ts:38](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L38)

metadata of the video/webcast

***

### playerStatus

> `readonly` **playerStatus**: [`PlayerStatus`](PlayerStatus.md)

Defined in: [embed/IVbrickApi.ts:23](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L23)

video playing, buffering, etc

***

### volume

> `readonly` **volume**: `number`

Defined in: [embed/IVbrickApi.ts:28](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L28)

Player Volume. 0-1

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [embed/IVbrickApi.ts:84](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L84)

Removes the embedded content from the DOM.

#### Returns

`void`

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [embed/IVbrickApi.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L44)

returns a promise once the player has completed authentication and load.
Will reject with an error if authentication/load failed

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:79](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L79)

Removes an event listener

#### Type Parameters

##### T

`T` *extends* `"load"` \| `"authChanged"` \| `"error"` \| `"videoLoaded"` \| `"playerStatusChanged"` \| `"volumeChanged"` \| `"subtitlesChanged"` \| `"playbackSpeedChanged"` \| `"seeked"` \| `"currentTime"` \| `"webcastLoaded"` \| `"webcastStarted"` \| `"broadcastStarted"` \| `"broadcastStopped"` \| `"webcastEnded"` \| `"layoutChanged"` \| `"commentAdded"` \| `"slideChanged"` \| `"pollOpened"` \| `"pollClosed"` \| `"pollPublished"` \| `"pollUnpublished"` \| `"playlistLoaded"` \| `"playlistItem"`

#### Parameters

##### event

`T`

##### listener

[`IListener`](IListener.md)\<`T`\>

#### Returns

`void`

***

### on()

> **on**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:74](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L74)

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type Parameters

##### T

`T` *extends* `"load"` \| `"authChanged"` \| `"error"` \| `"videoLoaded"` \| `"playerStatusChanged"` \| `"volumeChanged"` \| `"subtitlesChanged"` \| `"playbackSpeedChanged"` \| `"seeked"` \| `"currentTime"` \| `"webcastLoaded"` \| `"webcastStarted"` \| `"broadcastStarted"` \| `"broadcastStopped"` \| `"webcastEnded"` \| `"layoutChanged"` \| `"commentAdded"` \| `"slideChanged"` \| `"pollOpened"` \| `"pollClosed"` \| `"pollPublished"` \| `"pollUnpublished"` \| `"playlistLoaded"` \| `"playlistItem"`

#### Parameters

##### event

`T`

name of event

##### listener

[`IListener`](IListener.md)\<`T`\>

callback when event is fired. Keep a reference if you intend to call \['off'\] later

#### Returns

`void`

***

### pause()

> **pause**(): `void`

Defined in: [embed/IVbrickApi.ts:54](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L54)

Pauses the video if it is playing.

#### Returns

`void`

***

### play()

> **play**(): `void`

Defined in: [embed/IVbrickApi.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L49)

Plays the video if it is paused.

#### Returns

`void`

***

### setSubtitles()

> **setSubtitles**(`subtitles`): `void`

Defined in: [embed/IVbrickApi.ts:67](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L67)

Indicates whether the webcast is started, or broadcasting.
update the current subtitles settings

#### Parameters

##### subtitles

[`ISubtitles`](ISubtitles.md)

enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)

#### Returns

`void`

***

### setVolume()

> **setVolume**(`volume`): `void`

Defined in: [embed/IVbrickApi.ts:60](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L60)

Sets player volume

#### Parameters

##### volume

`number`

number 0-1

#### Returns

`void`

***

### updateToken()

> **updateToken**(`token`): `Promise`\<`void`\>

Defined in: [embed/IVbrickApi.ts:90](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L90)

Allows updating the access token if the old one has expired.

#### Parameters

##### token

[`VbrickSDKToken`](VbrickSDKToken.md)

New token

#### Returns

`Promise`\<`void`\>
