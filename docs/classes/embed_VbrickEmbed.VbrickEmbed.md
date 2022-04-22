[@vbrick/rev-sdk](../README.md) / [embed/VbrickEmbed](../modules/embed_VbrickEmbed.md) / VbrickEmbed

# Class: VbrickEmbed

[embed/VbrickEmbed](../modules/embed_VbrickEmbed.md).VbrickEmbed

Base class for embedded content.

## Hierarchy

- **`VbrickEmbed`**

  ↳ [`VbrickVideoEmbed`](embed_VbrickVideoEmbed.VbrickVideoEmbed.md)

  ↳ [`VbrickWebcastEmbed`](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md)

## Implements

- [`IVbrickBaseEmbed`](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md)

## Table of contents

### Constructors

- [constructor](embed_VbrickEmbed.VbrickEmbed.md#constructor)

### Methods

- [destroy](embed_VbrickEmbed.VbrickEmbed.md#destroy)
- [initialize](embed_VbrickEmbed.VbrickEmbed.md#initialize)
- [off](embed_VbrickEmbed.VbrickEmbed.md#off)
- [on](embed_VbrickEmbed.VbrickEmbed.md#on)
- [updateToken](embed_VbrickEmbed.VbrickEmbed.md#updatetoken)

## Constructors

### constructor

• **new VbrickEmbed**(`iframeUrl`, `config`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iframeUrl` | `string` |
| `config` | [`VbrickEmbedConfig`](../modules/embed_VbrickEmbedConfig.md#vbrickembedconfig) |
| `container` | `HTMLElement` |

#### Defined in

[embed/VbrickEmbed.ts:18](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L18)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Implementation of

[IVbrickBaseEmbed](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md).[destroy](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/VbrickEmbed.ts:85](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L85)

___

### initialize

▸ **initialize**(): `Promise`<`any`\>

Indicates the embedded content was initialized and authenticated.
If there was a problem loading the content, or a problem with the token, the promise will be rejected.

#### Returns

`Promise`<`any`\>

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

[IVbrickBaseEmbed](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md).[off](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md#off)

#### Defined in

[embed/VbrickEmbed.ts:63](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L63)

___

### on

▸ **on**(`event`, `listener`): `void`

Fired when iframe has loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Implementation of

[IVbrickBaseEmbed](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md).[on](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md#on)

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

[IVbrickBaseEmbed](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md).[updateToken](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md#updatetoken)

#### Defined in

[embed/VbrickEmbed.ts:92](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbed.ts#L92)
