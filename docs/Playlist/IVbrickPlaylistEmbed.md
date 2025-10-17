[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / IVbrickPlaylistEmbed

# Interface: IVbrickPlaylistEmbed

Defined in: [embed/IVbrickApi.ts:157](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L157)

## Extends

- [`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md)\<[`IVideoInfo`](../VOD/IVideoInfo.md), keyof [`TEmbedMessages`](../Base/TEmbedMessages.md) & [`TPlayerMessages`](../Base/TPlayerMessages.md) & [`TPlaylistMessages`](TPlaylistMessages.md)\>

## Properties

### currentIndex

> `readonly` **currentIndex**: `number`

Defined in: [embed/IVbrickApi.ts:162](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L162)

index of current video in the playlist videos array

***

### currentSubtitles

> `readonly` **currentSubtitles**: [`ISubtitles`](../Base/ISubtitles.md)

Defined in: [embed/IVbrickApi.ts:33](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L33)

Whether subtitles are enabled, and selected language

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`currentSubtitles`](../Base/IVbrickBaseEmbed.md#currentsubtitles)

***

### currentTime

> `readonly` **currentTime**: `number`

Defined in: [embed/IVbrickApi.ts:185](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L185)

Current position in video in seconds

***

### duration?

> `readonly` `optional` **duration**: `number`

Defined in: [embed/IVbrickApi.ts:190](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L190)

Duration of video in seconds. Will be undefined for live content

***

### info?

> `readonly` `optional` **info**: [`IVideoInfo`](../VOD/IVideoInfo.md)

Defined in: [embed/IVbrickApi.ts:38](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L38)

metadata of the video/webcast

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`info`](../Base/IVbrickBaseEmbed.md#info)

***

### playerStatus

> `readonly` **playerStatus**: [`PlayerStatus`](../Base/PlayerStatus.md)

Defined in: [embed/IVbrickApi.ts:23](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L23)

video playing, buffering, etc

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`playerStatus`](../Base/IVbrickBaseEmbed.md#playerstatus)

***

### playlist

> `readonly` **playlist**: [`IPlaylistInfo`](IPlaylistInfo.md)

Defined in: [embed/IVbrickApi.ts:158](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L158)

***

### ~~videoInfo?~~

> `readonly` `optional` **videoInfo**: [`IVideoInfo`](../VOD/IVideoInfo.md)

Defined in: [embed/IVbrickApi.ts:196](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L196)

Contains metadata for the video

#### Deprecated

Use `info` instead

***

### volume

> `readonly` **volume**: `number`

Defined in: [embed/IVbrickApi.ts:28](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L28)

Player Volume. 0-1

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`volume`](../Base/IVbrickBaseEmbed.md#volume)

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [embed/IVbrickApi.ts:84](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L84)

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`destroy`](../Base/IVbrickBaseEmbed.md#destroy)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [embed/IVbrickApi.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L44)

returns a promise once the player has completed authentication and load.
Will reject with an error if authentication/load failed

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`initialize`](../Base/IVbrickBaseEmbed.md#initialize)

***

### next()

> **next**(): `void`

Defined in: [embed/IVbrickApi.ts:179](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L179)

Switch to next video in playlist

#### Returns

`void`

***

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:79](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L79)

Removes an event listener

#### Type Parameters

##### T

`T` *extends* keyof TEmbedMessages \| keyof TPlayerMessages \| keyof TPlaylistMessages

#### Parameters

##### event

`T`

##### listener

[`IListener`](../Base/IListener.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`off`](../Base/IVbrickBaseEmbed.md#off)

***

### on()

> **on**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:74](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L74)

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type Parameters

##### T

`T` *extends* keyof TEmbedMessages \| keyof TPlayerMessages \| keyof TPlaylistMessages

#### Parameters

##### event

`T`

name of event

##### listener

[`IListener`](../Base/IListener.md)\<`T`\>

callback when event is fired. Keep a reference if you intend to call [\['off'\]](../Base/IVbrickBaseEmbed.md) later

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`on`](../Base/IVbrickBaseEmbed.md#on)

***

### pause()

> **pause**(): `void`

Defined in: [embed/IVbrickApi.ts:54](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L54)

Pauses the video if it is playing.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`pause`](../Base/IVbrickBaseEmbed.md#pause)

***

### play()

> **play**(): `void`

Defined in: [embed/IVbrickApi.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L49)

Plays the video if it is paused.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`play`](../Base/IVbrickBaseEmbed.md#play)

***

### previous()

> **previous**(): `void`

Defined in: [embed/IVbrickApi.ts:174](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L174)

Switch to previous video in playlist

#### Returns

`void`

***

### seek()

> **seek**(`currentTime`): `void`

Defined in: [embed/IVbrickApi.ts:208](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L208)

sets the current time in the video

#### Parameters

##### currentTime

`number`

value (in seconds) between 0 and video duration

#### Returns

`void`

***

### setPlaybackSpeed()

> **setPlaybackSpeed**(`speed`): `void`

Defined in: [embed/IVbrickApi.ts:202](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L202)

sets playback rate

#### Parameters

##### speed

`number`

0-16, default is 1

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

[`ISubtitles`](../Base/ISubtitles.md)

enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`setSubtitles`](../Base/IVbrickBaseEmbed.md#setsubtitles)

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

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`setVolume`](../Base/IVbrickBaseEmbed.md#setvolume)

***

### switchVideo()

> **switchVideo**(`videoId`, `autoplay?`): `void`

Defined in: [embed/IVbrickApi.ts:169](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L169)

Load a new video in the playlist. A 'videoInfo' event will be emitted once the new video has loaded

#### Parameters

##### videoId

`string`

specify video to show. It must exist in the playlist

##### autoplay?

`boolean`

whether to automatically start playback on video load. Default is true

#### Returns

`void`

***

### updateToken()

> **updateToken**(`token`): `Promise`\<`void`\>

Defined in: [embed/IVbrickApi.ts:90](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L90)

Allows updating the access token if the old one has expired.

#### Parameters

##### token

[`VbrickSDKToken`](../Base/VbrickSDKToken.md)

New token

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`updateToken`](../Base/IVbrickBaseEmbed.md#updatetoken)
