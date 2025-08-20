[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / IVbrickVideoEmbed

# Interface: IVbrickVideoEmbed

Defined in: [embed/IVbrickApi.ts:98](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L98)

## Extends

- [`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md)\<[`IVideoInfo`](IVideoInfo.md), keyof [`TEmbedMessages`](../Base/TEmbedMessages.md) & [`TPlayerMessages`](../Base/TPlayerMessages.md)\>

## Properties

### currentSubtitles

> `readonly` **currentSubtitles**: [`ISubtitles`](../Base/ISubtitles.md)

Defined in: [embed/IVbrickApi.ts:33](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L33)

Whether subtitles are enabled, and selected language

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`currentSubtitles`](../Base/IVbrickBaseEmbed.md#currentsubtitles)

***

### currentTime

> `readonly` **currentTime**: `number`

Defined in: [embed/IVbrickApi.ts:102](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L102)

Current position in video in seconds

***

### duration?

> `readonly` `optional` **duration**: `number`

Defined in: [embed/IVbrickApi.ts:107](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L107)

Duration of video in seconds. Will be undefined for live content

***

### info?

> `readonly` `optional` **info**: [`IVideoInfo`](IVideoInfo.md)

Defined in: [embed/IVbrickApi.ts:38](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L38)

metadata of the video/webcast

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`info`](../Base/IVbrickBaseEmbed.md#info)

***

### playbackSpeed

> `readonly` **playbackSpeed**: `number`

Defined in: [embed/IVbrickApi.ts:118](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L118)

The current playback speed

***

### playerStatus

> `readonly` **playerStatus**: [`PlayerStatus`](../Base/PlayerStatus.md)

Defined in: [embed/IVbrickApi.ts:23](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L23)

video playing, buffering, etc

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`playerStatus`](../Base/IVbrickBaseEmbed.md#playerstatus)

***

### ~~videoInfo?~~

> `readonly` `optional` **videoInfo**: [`IVideoInfo`](IVideoInfo.md)

Defined in: [embed/IVbrickApi.ts:113](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L113)

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

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:79](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L79)

Removes an event listener

#### Type Parameters

##### T

`T` *extends* keyof TEmbedMessages \| keyof TPlayerMessages

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

`T` *extends* keyof TEmbedMessages \| keyof TPlayerMessages

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

### seek()

> **seek**(`currentTime`): `void`

Defined in: [embed/IVbrickApi.ts:130](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L130)

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

Defined in: [embed/IVbrickApi.ts:124](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L124)

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
