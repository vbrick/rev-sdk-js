[@vbrick/rev-sdk](../README.md) / [embed/VbrickWebcastEmbed](../modules/embed_VbrickWebcastEmbed.md) / VbrickWebcastEmbed

# Class: VbrickWebcastEmbed

[embed/VbrickWebcastEmbed](../modules/embed_VbrickWebcastEmbed.md).VbrickWebcastEmbed

## Hierarchy

- [`VbrickEmbed`](embed_VbrickEmbed.VbrickEmbed.md)

  ↳ **`VbrickWebcastEmbed`**

## Implements

- [`IVbrickWebcastEmbed`](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md)

## Table of contents

### Constructors

- [constructor](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#constructor)

### Accessors

- [webcastStatus](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#webcaststatus)

### Methods

- [destroy](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#destroy)
- [initialize](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#initialize)
- [off](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#off)
- [on](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#on)
- [updateToken](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#updatetoken)

## Constructors

### constructor

• **new VbrickWebcastEmbed**(`webcastId`, `config`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webcastId` | `string` |
| `config` | [`VbrickWebcastEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickWebcastEmbedConfig.md) |
| `container` | `HTMLElement` |

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[constructor](embed_VbrickEmbed.VbrickEmbed.md#constructor)

#### Defined in

[embed/VbrickWebcastEmbed.ts:15](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickWebcastEmbed.ts#L15)

## Accessors

### webcastStatus

• `get` **webcastStatus**(): [`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

Indicates whether the webcast is started, or broadcasting.

#### Returns

[`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

#### Implementation of

[IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md).[webcastStatus](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md#webcaststatus)

#### Defined in

[embed/VbrickWebcastEmbed.ts:11](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickWebcastEmbed.ts#L11)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Implementation of

[IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md).[destroy](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md#destroy)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[destroy](embed_VbrickEmbed.VbrickEmbed.md#destroy)

#### Defined in

[embed/VbrickEmbed.ts:85](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L85)

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

[IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md).[off](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md#off)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[off](embed_VbrickEmbed.VbrickEmbed.md#off)

#### Defined in

[embed/VbrickEmbed.ts:63](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L63)

___

### on

▸ **on**(`event`, `listener`): `void`

Fired on initial load

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Implementation of

[IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md).[on](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md#on)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[on](embed_VbrickEmbed.VbrickEmbed.md#on)

#### Defined in

[embed/VbrickEmbed.ts:58](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L58)

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

[IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md).[updateToken](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md#updatetoken)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[updateToken](embed_VbrickEmbed.VbrickEmbed.md#updatetoken)

#### Defined in

[embed/VbrickEmbed.ts:92](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L92)
