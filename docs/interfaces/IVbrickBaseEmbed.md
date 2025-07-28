[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed\<TInfo, Events\>

## Extended by

- [`IVbrickVideoEmbed`](IVbrickVideoEmbed.md)
- [`IVbrickWebcastEmbed`](IVbrickWebcastEmbed.md)
- [`IVbrickPlaylistEmbed`](IVbrickPlaylistEmbed.md)

## Type Parameters

• **TInfo** *extends* [`IBasicInfo`](IBasicInfo.md)

• **Events** *extends* `string` & [`TVbrickEvent`](../type-aliases/TVbrickEvent.md) = keyof [`TEmbedMessages`](../type-aliases/TEmbedMessages.md)

## Properties

### currentSubtitles

> `readonly` **currentSubtitles**: [`ISubtitles`](ISubtitles.md)

Whether subtitles are enabled, and selected language

#### Defined in

[embed/IVbrickApi.ts:30](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L30)

***

### info?

> `readonly` `optional` **info**: `TInfo`

metadata of the video/webcast

#### Defined in

[embed/IVbrickApi.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L35)

***

### playerStatus

> `readonly` **playerStatus**: [`PlayerStatus`](../enumerations/PlayerStatus.md)

video playing, buffering, etc

#### Defined in

[embed/IVbrickApi.ts:20](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L20)

***

### volume

> `readonly` **volume**: `number`

Player Volume. 0-1

#### Defined in

[embed/IVbrickApi.ts:25](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L25)

## Methods

### destroy()

> **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L81)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

returns a promise once the player has completed authentication and load.
Will reject with an error if authentication/load failed

#### Returns

`Promise`\<`void`\>

#### Defined in

[embed/IVbrickApi.ts:41](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L41)

***

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Removes an event listener

#### Type Parameters

• **T** *extends* `"load"` \| `"authChanged"` \| `"error"` \| `"videoLoaded"` \| `"playerStatusChanged"` \| `"volumeChanged"` \| `"subtitlesChanged"` \| `"playbackSpeedChanged"` \| `"seeked"` \| `"currentTime"` \| `"webcastLoaded"` \| `"webcastStarted"` \| `"broadcastStarted"` \| `"broadcastStopped"` \| `"webcastEnded"` \| `"layoutChanged"` \| `"commentAdded"` \| `"slideChanged"` \| `"pollOpened"` \| `"pollClosed"` \| `"pollPublished"` \| `"pollUnpublished"` \| `"playlistLoaded"` \| `"playlistItem"`

#### Parameters

• **event**: `T`

• **listener**: [`IListener`](../type-aliases/IListener.md)\<`T`\>

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:76](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L76)

***

### on()

> **on**\<`T`\>(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type Parameters

• **T** *extends* `"load"` \| `"authChanged"` \| `"error"` \| `"videoLoaded"` \| `"playerStatusChanged"` \| `"volumeChanged"` \| `"subtitlesChanged"` \| `"playbackSpeedChanged"` \| `"seeked"` \| `"currentTime"` \| `"webcastLoaded"` \| `"webcastStarted"` \| `"broadcastStarted"` \| `"broadcastStopped"` \| `"webcastEnded"` \| `"layoutChanged"` \| `"commentAdded"` \| `"slideChanged"` \| `"pollOpened"` \| `"pollClosed"` \| `"pollPublished"` \| `"pollUnpublished"` \| `"playlistLoaded"` \| `"playlistItem"`

#### Parameters

• **event**: `T`

name of event

• **listener**: [`IListener`](../type-aliases/IListener.md)\<`T`\>

callback when event is fired. Keep a reference if you intend to call [['off']](IVbrickBaseEmbed.md) later

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:71](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L71)

***

### pause()

> **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L51)

***

### play()

> **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:46](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L46)

***

### setSubtitles()

> **setSubtitles**(`subtitles`): `void`

Indicates whether the webcast is started, or broadcasting.
update the current subtitles settings

#### Parameters

• **subtitles**: [`ISubtitles`](ISubtitles.md)

enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:64](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L64)

***

### setVolume()

> **setVolume**(`volume`): `void`

Sets player volume

#### Parameters

• **volume**: `number`

number 0-1

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:57](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L57)

***

### updateToken()

> **updateToken**(`token`): `Promise`\<`void`\>

Allows updating the access token if the old one has expired.

#### Parameters

• **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

New token

#### Returns

`Promise`\<`void`\>

#### Defined in

[embed/IVbrickApi.ts:87](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L87)
