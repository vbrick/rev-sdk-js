[@vbrick/rev-sdk](../README.md) / [embed/IVbrickApi](../modules/embed_IVbrickApi.md) / IVbrickVideoEmbed

# Interface: IVbrickVideoEmbed

[embed/IVbrickApi](../modules/embed_IVbrickApi.md).IVbrickVideoEmbed

## Hierarchy

- [`IVbrickBaseEmbed`](embed_IVbrickApi.IVbrickBaseEmbed.md)

  ↳ **`IVbrickVideoEmbed`**

## Implemented by

- [`VbrickVideoEmbed`](../classes/embed_VbrickVideoEmbed.VbrickVideoEmbed.md)

## Table of contents

### Properties

- [captions](embed_IVbrickApi.IVbrickVideoEmbed.md#captions)
- [playerStatus](embed_IVbrickApi.IVbrickVideoEmbed.md#playerstatus)
- [videoInfo](embed_IVbrickApi.IVbrickVideoEmbed.md#videoinfo)
- [volume](embed_IVbrickApi.IVbrickVideoEmbed.md#volume)

### Methods

- [destroy](embed_IVbrickApi.IVbrickVideoEmbed.md#destroy)
- [off](embed_IVbrickApi.IVbrickVideoEmbed.md#off)
- [on](embed_IVbrickApi.IVbrickVideoEmbed.md#on)
- [pause](embed_IVbrickApi.IVbrickVideoEmbed.md#pause)
- [play](embed_IVbrickApi.IVbrickVideoEmbed.md#play)
- [setVolume](embed_IVbrickApi.IVbrickVideoEmbed.md#setvolume)

## Properties

### captions

• `Readonly` **captions**: [`ICaptionSettings`](embed_IVbrickApi.ICaptionSettings.md)

Whether captions are enabled, and selected language

#### Defined in

[embed/IVbrickApi.ts:22](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L22)

___

### playerStatus

• `Readonly` **playerStatus**: [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)

video playing, buffering, etc

#### Defined in

[embed/IVbrickApi.ts:12](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L12)

___

### videoInfo

• `Readonly` **videoInfo**: `any`

Contains metadata for the video

#### Defined in

[embed/IVbrickApi.ts:27](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L27)

___

### volume

• `Readonly` **volume**: `number`

Player Volume. 0-1

#### Defined in

[embed/IVbrickApi.ts:17](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L17)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[destroy](embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/IVbrickApi.ts:146](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L146)

___

### off

▸ **off**(`event`, `listener`): `void`

Removes an event listener

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (`event`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[off](embed_IVbrickApi.IVbrickBaseEmbed.md#off)

#### Defined in

[embed/IVbrickApi.ts:141](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L141)

___

### on

▸ **on**(`event`, `listener`): `void`

Fires when the video metadata is loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"videoLoaded"`` |
| `listener` | (`event`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:90](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L90)

▸ **on**(`event`, `listener`): `void`

Fired if the player volume changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"volumeChanged"`` |
| `listener` | (`__namedParameters`: `Object`) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:96](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L96)

▸ **on**(`event`, `listener`): `void`

Fired when the player status changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerStatusChanged"`` |
| `listener` | (`event`: { `status`: [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:107](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L107)

▸ **on**(`event`, `listener`): `void`

Fired when the captions are toggled, or the language changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"captionsChanged"`` |
| `listener` | (`event`: [`ICaptionSettings`](embed_IVbrickApi.ICaptionSettings.md)) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:119](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L119)

▸ **on**(`event`, `listener`): `void`

Fired when the playback speed changes. Only available for prerecorded video on demand.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playbackSpeedChanged"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:126](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L126)

▸ **on**(`event`, `listener`): `void`

Fired when the user seeks in the video player

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"seeked"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:131](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L131)

▸ **on**(`event`, `listener`): `void`

Fired if there is an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`event`: { `err`: `any` ; `msg`: `string`  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:136](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L136)

___

### pause

▸ **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:37](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L37)

___

### play

▸ **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:32](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L32)

___

### setVolume

▸ **setVolume**(`volume`): `void`

Sets player volume

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | 0-1 |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:43](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/IVbrickApi.ts#L43)
