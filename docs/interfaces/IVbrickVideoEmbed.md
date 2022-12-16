[@vbrick/rev-sdk](../README.md) / IVbrickVideoEmbed

# Interface: IVbrickVideoEmbed

## Hierarchy

- [`IVbrickBaseEmbed`](IVbrickBaseEmbed.md)<[`IVideoInfo`](IVideoInfo.md), keyof [`TEmbedMessages`](../README.md#tembedmessages) & [`TPlayerMessages`](../README.md#tplayermessages)\>

  ↳ **`IVbrickVideoEmbed`**

## Table of contents

### Properties

- [currentSubtitles](IVbrickVideoEmbed.md#currentsubtitles)
- [currentTime](IVbrickVideoEmbed.md#currenttime)
- [duration](IVbrickVideoEmbed.md#duration)
- [info](IVbrickVideoEmbed.md#info)
- [playerStatus](IVbrickVideoEmbed.md#playerstatus)
- [videoInfo](IVbrickVideoEmbed.md#videoinfo)
- [volume](IVbrickVideoEmbed.md#volume)

### Methods

- [destroy](IVbrickVideoEmbed.md#destroy)
- [off](IVbrickVideoEmbed.md#off)
- [on](IVbrickVideoEmbed.md#on)
- [pause](IVbrickVideoEmbed.md#pause)
- [play](IVbrickVideoEmbed.md#play)
- [seek](IVbrickVideoEmbed.md#seek)
- [setPlaybackSpeed](IVbrickVideoEmbed.md#setplaybackspeed)
- [setSubtitles](IVbrickVideoEmbed.md#setsubtitles)
- [setVolume](IVbrickVideoEmbed.md#setvolume)
- [updateToken](IVbrickVideoEmbed.md#updatetoken)

## Properties

### currentSubtitles

• `Readonly` **currentSubtitles**: [`ISubtitles`](ISubtitles.md)

Whether subtitles are enabled, and selected language

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[currentSubtitles](IVbrickBaseEmbed.md#currentsubtitles)

#### Defined in

[embed/IVbrickApi.ts:29](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L29)

___

### currentTime

• `Readonly` **currentTime**: `number`

Current position in video in seconds

#### Defined in

[embed/IVbrickApi.ts:90](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L90)

___

### duration

• `Optional` `Readonly` **duration**: `number`

Duration of video in seconds. Will be undefined for live content

#### Defined in

[embed/IVbrickApi.ts:95](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L95)

___

### info

• `Optional` `Readonly` **info**: [`IVideoInfo`](IVideoInfo.md)

metadata of the video/webcast

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[info](IVbrickBaseEmbed.md#info)

#### Defined in

[embed/IVbrickApi.ts:34](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L34)

___

### playerStatus

• `Readonly` **playerStatus**: [`PlayerStatus`](../enums/PlayerStatus.md)

video playing, buffering, etc

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[playerStatus](IVbrickBaseEmbed.md#playerstatus)

#### Defined in

[embed/IVbrickApi.ts:19](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L19)

___

### videoInfo

• `Optional` `Readonly` **videoInfo**: [`IVideoInfo`](IVideoInfo.md)

Contains metadata for the video

**`Deprecated`**

Use `info` instead

#### Defined in

[embed/IVbrickApi.ts:101](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L101)

___

### volume

• `Readonly` **volume**: `number`

Player Volume. 0-1

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[volume](IVbrickBaseEmbed.md#volume)

#### Defined in

[embed/IVbrickApi.ts:24](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L24)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[destroy](IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/IVbrickApi.ts:74](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L74)

___

### off

▸ **off**<`T`\>(`event`, `listener`): `void`

Removes an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`TEmbedMessages`](../README.md#tembedmessages) \| keyof [`TPlayerMessages`](../README.md#tplayermessages) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `listener` | [`IListener`](../README.md#ilistener)<`T`\> |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[off](IVbrickBaseEmbed.md#off)

#### Defined in

[embed/IVbrickApi.ts:69](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L69)

___

### on

▸ **on**<`T`\>(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`TEmbedMessages`](../README.md#tembedmessages) \| keyof [`TPlayerMessages`](../README.md#tplayermessages) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | name of event |
| `listener` | [`IListener`](../README.md#ilistener)<`T`\> | callback when event is fired. Keep a reference if you intend to call [off](IVbrickBaseEmbed.md#off) later |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[on](IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:64](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L64)

___

### pause

▸ **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[pause](IVbrickBaseEmbed.md#pause)

#### Defined in

[embed/IVbrickApi.ts:44](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L44)

___

### play

▸ **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[play](IVbrickBaseEmbed.md#play)

#### Defined in

[embed/IVbrickApi.ts:39](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L39)

___

### seek

▸ **seek**(`currentTime`): `void`

sets the current time in the video

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentTime` | `number` | value (in seconds) between 0 and video duration |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:113](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L113)

___

### setPlaybackSpeed

▸ **setPlaybackSpeed**(`speed`): `void`

sets playback rate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 0-16, default is 1 |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:107](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L107)

___

### setSubtitles

▸ **setSubtitles**(`subtitles`): `void`

Indicates whether the webcast is started, or broadcasting.
update the current subtitles settings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subtitles` | [`ISubtitles`](ISubtitles.md) | enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream) |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[setSubtitles](IVbrickBaseEmbed.md#setsubtitles)

#### Defined in

[embed/IVbrickApi.ts:57](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L57)

___

### setVolume

▸ **setVolume**(`volume`): `void`

Sets player volume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | number 0-1 |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[setVolume](IVbrickBaseEmbed.md#setvolume)

#### Defined in

[embed/IVbrickApi.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L50)

___

### updateToken

▸ **updateToken**(`token`): `Promise`<`void`\>

Allows updating the access token if the old one has expired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | [`VbrickSDKToken`](VbrickSDKToken.md) | New token |

#### Returns

`Promise`<`void`\>

#### Inherited from

[IVbrickBaseEmbed](IVbrickBaseEmbed.md).[updateToken](IVbrickBaseEmbed.md#updatetoken)

#### Defined in

[embed/IVbrickApi.ts:80](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L80)
