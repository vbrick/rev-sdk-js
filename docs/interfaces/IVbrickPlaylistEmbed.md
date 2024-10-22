[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / IVbrickPlaylistEmbed

# Interface: IVbrickPlaylistEmbed

## Extends

- [`IVbrickBaseEmbed`](IVbrickBaseEmbed.md)\<[`IVideoInfo`](IVideoInfo.md), keyof [`TEmbedMessages`](../type-aliases/TEmbedMessages.md) & [`TPlayerMessages`](../type-aliases/TPlayerMessages.md) & `TPlaylistMessages`\>

## Properties

### currentSubtitles

> `readonly` **currentSubtitles**: [`ISubtitles`](ISubtitles.md)

Whether subtitles are enabled, and selected language

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`currentSubtitles`](IVbrickBaseEmbed.md#currentsubtitles)

#### Defined in

[embed/IVbrickApi.ts:30](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L30)

***

### currentTime

> `readonly` **currentTime**: `number`

Current position in video in seconds

#### Defined in

[embed/IVbrickApi.ts:153](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L153)

***

### duration?

> `readonly` `optional` **duration**: `number`

Duration of video in seconds. Will be undefined for live content

#### Defined in

[embed/IVbrickApi.ts:158](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L158)

***

### info?

> `readonly` `optional` **info**: [`IVideoInfo`](IVideoInfo.md)

metadata of the video/webcast

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`info`](IVbrickBaseEmbed.md#info)

#### Defined in

[embed/IVbrickApi.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L35)

***

### playerStatus

> `readonly` **playerStatus**: [`PlayerStatus`](../enumerations/PlayerStatus.md)

video playing, buffering, etc

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`playerStatus`](IVbrickBaseEmbed.md#playerstatus)

#### Defined in

[embed/IVbrickApi.ts:20](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L20)

***

### playlist

> `readonly` **playlist**: [`IPlaylistInfo`](IPlaylistInfo.md)

#### Defined in

[embed/IVbrickApi.ts:141](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L141)

***

### ~~videoInfo?~~

> `readonly` `optional` **videoInfo**: [`IVideoInfo`](IVideoInfo.md)

Contains metadata for the video

#### Deprecated

Use `info` instead

#### Defined in

[embed/IVbrickApi.ts:164](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L164)

***

### volume

> `readonly` **volume**: `number`

Player Volume. 0-1

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`volume`](IVbrickBaseEmbed.md#volume)

#### Defined in

[embed/IVbrickApi.ts:25](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L25)

## Methods

### destroy()

> **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`destroy`](IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/IVbrickApi.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L81)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

returns a promise once the player has completed authentication and load.
Will reject with an error if authentication/load failed

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`initialize`](IVbrickBaseEmbed.md#initialize)

#### Defined in

[embed/IVbrickApi.ts:41](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L41)

***

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Removes an event listener

#### Type Parameters

• **T** *extends* keyof TEmbedMessages \| keyof TPlayerMessages \| keyof TPlaylistMessages

#### Parameters

• **event**: `T`

• **listener**: [`IListener`](../type-aliases/IListener.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`off`](IVbrickBaseEmbed.md#off)

#### Defined in

[embed/IVbrickApi.ts:76](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L76)

***

### on()

> **on**\<`T`\>(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type Parameters

• **T** *extends* keyof TEmbedMessages \| keyof TPlayerMessages \| keyof TPlaylistMessages

#### Parameters

• **event**: `T`

name of event

• **listener**: [`IListener`](../type-aliases/IListener.md)\<`T`\>

callback when event is fired. Keep a reference if you intend to call [['off']](IVbrickBaseEmbed.md) later

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`on`](IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:71](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L71)

***

### pause()

> **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`pause`](IVbrickBaseEmbed.md#pause)

#### Defined in

[embed/IVbrickApi.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L51)

***

### play()

> **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`play`](IVbrickBaseEmbed.md#play)

#### Defined in

[embed/IVbrickApi.ts:46](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L46)

***

### seek()

> **seek**(`currentTime`): `void`

sets the current time in the video

#### Parameters

• **currentTime**: `number`

value (in seconds) between 0 and video duration

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:176](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L176)

***

### setPlaybackSpeed()

> **setPlaybackSpeed**(`speed`): `void`

sets playback rate

#### Parameters

• **speed**: `number`

0-16, default is 1

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:170](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L170)

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

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`setSubtitles`](IVbrickBaseEmbed.md#setsubtitles)

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

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`setVolume`](IVbrickBaseEmbed.md#setvolume)

#### Defined in

[embed/IVbrickApi.ts:57](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L57)

***

### switchVideo()

> **switchVideo**(`videoId`, `autoplay`?): `void`

Load a new video in the playlist. A 'videoInfo' event will be emitted once the new video has loaded

#### Parameters

• **videoId**: `string`

specify video to show. It must exist in the playlist

• **autoplay?**: `boolean`

whether to automatically start playback on video load. Default is true

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:148](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L148)

***

### updateToken()

> **updateToken**(`token`): `Promise`\<`void`\>

Allows updating the access token if the old one has expired.

#### Parameters

• **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

New token

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IVbrickBaseEmbed`](IVbrickBaseEmbed.md).[`updateToken`](IVbrickBaseEmbed.md#updatetoken)

#### Defined in

[embed/IVbrickApi.ts:87](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L87)
