[@vbrick/rev-sdk](../README.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed<TInfo, Events\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TInfo` | extends [`IBasicInfo`](IBasicInfo.md) |
| `Events` | extends `string` & [`TVbrickEvent`](../README.md#tvbrickevent) = keyof [`TEmbedMessages`](../README.md#tembedmessages) |

## Hierarchy

- **`IVbrickBaseEmbed`**

  ↳ [`IVbrickVideoEmbed`](IVbrickVideoEmbed.md)

  ↳ [`IVbrickWebcastEmbed`](IVbrickWebcastEmbed.md)

## Table of contents

### Properties

- [currentSubtitles](IVbrickBaseEmbed.md#currentsubtitles)
- [info](IVbrickBaseEmbed.md#info)
- [playerStatus](IVbrickBaseEmbed.md#playerstatus)
- [volume](IVbrickBaseEmbed.md#volume)

### Methods

- [destroy](IVbrickBaseEmbed.md#destroy)
- [initialize](IVbrickBaseEmbed.md#initialize)
- [off](IVbrickBaseEmbed.md#off)
- [on](IVbrickBaseEmbed.md#on)
- [pause](IVbrickBaseEmbed.md#pause)
- [play](IVbrickBaseEmbed.md#play)
- [setSubtitles](IVbrickBaseEmbed.md#setsubtitles)
- [setVolume](IVbrickBaseEmbed.md#setvolume)
- [updateToken](IVbrickBaseEmbed.md#updatetoken)

## Properties

### currentSubtitles

• `Readonly` **currentSubtitles**: [`ISubtitles`](ISubtitles.md)

Whether subtitles are enabled, and selected language

#### Defined in

[embed/IVbrickApi.ts:29](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L29)

___

### info

• `Optional` `Readonly` **info**: `TInfo`

metadata of the video/webcast

#### Defined in

[embed/IVbrickApi.ts:34](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L34)

___

### playerStatus

• `Readonly` **playerStatus**: [`PlayerStatus`](../enums/PlayerStatus.md)

video playing, buffering, etc

#### Defined in

[embed/IVbrickApi.ts:19](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L19)

___

### volume

• `Readonly` **volume**: `number`

Player Volume. 0-1

#### Defined in

[embed/IVbrickApi.ts:24](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L24)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:80](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L80)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

returns a promise once the player has completed authentication and load.
Will reject with an error if authentication/load failed

#### Returns

`Promise`<`void`\>

#### Defined in

[embed/IVbrickApi.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L40)

___

### off

▸ **off**<`T`\>(`event`, `listener`): `void`

Removes an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"load"`` \| ``"authChanged"`` \| ``"error"`` \| ``"videoLoaded"`` \| ``"playerStatusChanged"`` \| ``"volumeChanged"`` \| ``"subtitlesChanged"`` \| ``"playbackSpeedChanged"`` \| ``"seeked"`` \| ``"currentTime"`` \| ``"webcastLoaded"`` \| ``"webcastStarted"`` \| ``"broadcastStarted"`` \| ``"broadcastStopped"`` \| ``"webcastEnded"`` \| ``"layoutChanged"`` \| ``"commentAdded"`` \| ``"slideChanged"`` \| ``"pollOpened"`` \| ``"pollClosed"`` \| ``"pollPublished"`` \| ``"pollUnpublished"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `listener` | [`IListener`](../README.md#ilistener)<`T`\> |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:75](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L75)

___

### on

▸ **on**<`T`\>(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"load"`` \| ``"authChanged"`` \| ``"error"`` \| ``"videoLoaded"`` \| ``"playerStatusChanged"`` \| ``"volumeChanged"`` \| ``"subtitlesChanged"`` \| ``"playbackSpeedChanged"`` \| ``"seeked"`` \| ``"currentTime"`` \| ``"webcastLoaded"`` \| ``"webcastStarted"`` \| ``"broadcastStarted"`` \| ``"broadcastStopped"`` \| ``"webcastEnded"`` \| ``"layoutChanged"`` \| ``"commentAdded"`` \| ``"slideChanged"`` \| ``"pollOpened"`` \| ``"pollClosed"`` \| ``"pollPublished"`` \| ``"pollUnpublished"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | name of event |
| `listener` | [`IListener`](../README.md#ilistener)<`T`\> | callback when event is fired. Keep a reference if you intend to call [['off']](IVbrickBaseEmbed.md) later |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:70](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L70)

___

### pause

▸ **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L50)

___

### play

▸ **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L45)

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

#### Defined in

[embed/IVbrickApi.ts:63](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L63)

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

#### Defined in

[embed/IVbrickApi.ts:56](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L56)

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

#### Defined in

[embed/IVbrickApi.ts:86](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L86)
