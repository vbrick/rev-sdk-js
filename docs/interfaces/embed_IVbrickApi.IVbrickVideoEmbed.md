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
- [updateToken](embed_IVbrickApi.IVbrickVideoEmbed.md#updatetoken)

## Properties

### captions

• `Readonly` **captions**: [`ICaptionSettings`](embed_IVbrickApi.ICaptionSettings.md)

Whether captions are enabled, and selected language

**`alpha`**

#### Defined in

[embed/IVbrickApi.ts:81](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L81)

___

### playerStatus

• `Readonly` **playerStatus**: [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)

video playing, buffering, etc

#### Defined in

[embed/IVbrickApi.ts:70](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L70)

___

### videoInfo

• `Readonly` **videoInfo**: [`IVideoInfo`](embed_IVbrickApi.IVideoInfo.md)

Contains metadata for the video

**`beta`**

#### Defined in

[embed/IVbrickApi.ts:87](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L87)

___

### volume

• `Readonly` **volume**: `number`

Player Volume. 0-1

#### Defined in

[embed/IVbrickApi.ts:75](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L75)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[destroy](embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/IVbrickApi.ts:176](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L176)

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

[embed/IVbrickApi.ts:171](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L171)

___

### on

▸ **on**(`event`, `listener`): `void`

Fires when the video metadata is loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"videoLoaded"`` |
| `listener` | (`event`: [`IVideoInfo`](embed_IVbrickApi.IVideoInfo.md)) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:15](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L15)

▸ **on**(`event`, `listener`): `void`

Fired if the player volume changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"volumeChanged"`` |
| `listener` | (`event`: { `volume`: `number`  }) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:21](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L21)

▸ **on**(`event`, `listener`): `void`

Fired when the player status changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerStatusChanged"`` |
| `listener` | (`event`: { `status`: [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)  }) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:32](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L32)

▸ **on**(`event`, `listener`): `void`

Fired when the captions are toggled, or the language changes

**`alpha`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"captionsChanged"`` |
| `listener` | (`event`: [`ICaptionSettings`](embed_IVbrickApi.ICaptionSettings.md)) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:45](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L45)

▸ **on**(`event`, `listener`): `void`

Fired when the playback speed changes. Only available for prerecorded video on demand.

**`alpha`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playbackSpeedChanged"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:52](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L52)

▸ **on**(`event`, `listener`): `void`

Fired when the user seeks in the video player

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"seeked"`` |
| `listener` | (`event`: { `endTime`: `number` ; `startTime`: `number`  }) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:57](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L57)

▸ **on**(`event`, `listener`): `void`

Fired if the player volume changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"volumeChanged"`` |
| `listener` | (`event`: { `volume`: `number`  }) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:63](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L63)

▸ **on**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (`event`: `any`) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:65](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L65)

___

### pause

▸ **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:97](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L97)

___

### play

▸ **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:92](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L92)

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

[embed/IVbrickApi.ts:103](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L103)

___

### updateToken

▸ **updateToken**(`token`): `void`

Allows updating the access token if the old one has expired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md) | New token |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[updateToken](embed_IVbrickApi.IVbrickBaseEmbed.md#updatetoken)

#### Defined in

[embed/IVbrickApi.ts:182](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L182)
