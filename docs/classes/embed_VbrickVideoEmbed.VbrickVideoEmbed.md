[@vbrick/rev-sdk](../README.md) / [embed/VbrickVideoEmbed](../modules/embed_VbrickVideoEmbed.md) / VbrickVideoEmbed

# Class: VbrickVideoEmbed

[embed/VbrickVideoEmbed](../modules/embed_VbrickVideoEmbed.md).VbrickVideoEmbed

Internal class used to model an embedded video

## Hierarchy

- [`VbrickEmbed`](embed_VbrickEmbed.VbrickEmbed.md)

  ↳ **`VbrickVideoEmbed`**

## Implements

- [`IVbrickVideoEmbed`](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md)

## Table of contents

### Constructors

- [constructor](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#constructor)

### Properties

- [videoInfo](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#videoinfo)

### Accessors

- [captions](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#captions)
- [playerStatus](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#playerstatus)
- [volume](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#volume)

### Methods

- [destroy](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#destroy)
- [initialize](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#initialize)
- [off](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#off)
- [on](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#on)
- [pause](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#pause)
- [play](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#play)
- [setVolume](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#setvolume)
- [updateToken](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#updatetoken)

## Constructors

### constructor

• **new VbrickVideoEmbed**(`videoId`, `config`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `videoId` | `string` |
| `config` | [`VbrickVideoEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md) |
| `container` | `HTMLElement` |

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[constructor](embed_VbrickEmbed.VbrickEmbed.md#constructor)

#### Defined in

[embed/VbrickVideoEmbed.ts:43](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L43)

## Properties

### videoInfo

• `Readonly` **videoInfo**: `any`

Contains metadata for the video

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[videoInfo](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#videoinfo)

#### Defined in

[embed/VbrickVideoEmbed.ts:39](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L39)

## Accessors

### captions

• `get` **captions**(): [`ICaptionSettings`](../interfaces/embed_IVbrickApi.ICaptionSettings.md)

Whether captions are enabled, and selected language

#### Returns

[`ICaptionSettings`](../interfaces/embed_IVbrickApi.ICaptionSettings.md)

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[captions](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#captions)

#### Defined in

[embed/VbrickVideoEmbed.ts:31](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L31)

___

### playerStatus

• `get` **playerStatus**(): [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)

video playing, buffering, etc

#### Returns

[`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[playerStatus](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#playerstatus)

#### Defined in

[embed/VbrickVideoEmbed.ts:15](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L15)

___

### volume

• `get` **volume**(): `number`

Player Volume. 0-1

#### Returns

`number`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[volume](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#volume)

#### Defined in

[embed/VbrickVideoEmbed.ts:23](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L23)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[destroy](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#destroy)

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[destroy](embed_VbrickEmbed.VbrickEmbed.md#destroy)

#### Defined in

[embed/VbrickVideoEmbed.ts:92](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L92)

___

### initialize

▸ **initialize**(): `Promise`<`any`\>

Indicates the embedded content was initialized and authenticated.
If there was a problem loading the content, or a problem with the token, the promise will be rejected.

#### Returns

`Promise`<`any`\>

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[initialize](embed_VbrickEmbed.VbrickEmbed.md#initialize)

#### Defined in

[embed/VbrickEmbed.ts:30](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L30)

___

### off

▸ **off**(`event`, `listener`): `void`

Removes an event listener

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[off](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#off)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[off](embed_VbrickEmbed.VbrickEmbed.md#off)

#### Defined in

[embed/VbrickEmbed.ts:63](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L63)

___

### on

▸ **on**(`event`, `listener`): `void`

Fires when the video metadata is loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[on](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#on)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[on](embed_VbrickEmbed.VbrickEmbed.md#on)

#### Defined in

[embed/VbrickEmbed.ts:58](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L58)

___

### pause

▸ **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[pause](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#pause)

#### Defined in

[embed/VbrickVideoEmbed.ts:60](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L60)

___

### play

▸ **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[play](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#play)

#### Defined in

[embed/VbrickVideoEmbed.ts:54](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L54)

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

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[setVolume](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#setvolume)

#### Defined in

[embed/VbrickVideoEmbed.ts:68](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickVideoEmbed.ts#L68)

___

### updateToken

▸ **updateToken**(`newToken`): `void`

Allows updating the access token if the old one has expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newToken` | [`VbrickSDKToken`](../interfaces/VbrickSDK.VbrickSDKToken.md) |

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[updateToken](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#updatetoken)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[updateToken](embed_VbrickEmbed.VbrickEmbed.md#updatetoken)

#### Defined in

[embed/VbrickEmbed.ts:92](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L92)
