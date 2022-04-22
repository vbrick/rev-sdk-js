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

### Properties

- [config](embed_VbrickEmbed.VbrickEmbed.md#config)
- [container](embed_VbrickEmbed.VbrickEmbed.md#container)
- [eventBus](embed_VbrickEmbed.VbrickEmbed.md#eventbus)
- [iframe](embed_VbrickEmbed.VbrickEmbed.md#iframe)
- [iframeUrl](embed_VbrickEmbed.VbrickEmbed.md#iframeurl)
- [init](embed_VbrickEmbed.VbrickEmbed.md#init)
- [logger](embed_VbrickEmbed.VbrickEmbed.md#logger)
- [unsubscribes](embed_VbrickEmbed.VbrickEmbed.md#unsubscribes)

### Methods

- [destroy](embed_VbrickEmbed.VbrickEmbed.md#destroy)
- [initialize](embed_VbrickEmbed.VbrickEmbed.md#initialize)
- [initializeEmbed](embed_VbrickEmbed.VbrickEmbed.md#initializeembed)
- [initializeToken](embed_VbrickEmbed.VbrickEmbed.md#initializetoken)
- [off](embed_VbrickEmbed.VbrickEmbed.md#off)
- [on](embed_VbrickEmbed.VbrickEmbed.md#on)
- [render](embed_VbrickEmbed.VbrickEmbed.md#render)
- [updateToken](embed_VbrickEmbed.VbrickEmbed.md#updatetoken)

## Constructors

### constructor

• **new VbrickEmbed**(`iframeUrl`, `config`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iframeUrl` | `string` |
| `config` | [`VbrickEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickEmbedConfig.md) |
| `container` | `HTMLElement` |

#### Defined in

[embed/VbrickEmbed.ts:18](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L18)

## Properties

### config

• `Protected` `Readonly` **config**: [`VbrickEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickEmbedConfig.md)

___

### container

• `Protected` `Readonly` **container**: `HTMLElement`

___

### eventBus

• `Protected` **eventBus**: [`EventBus`](embed_EventBus.EventBus.md)

#### Defined in

[embed/VbrickEmbed.ts:13](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L13)

___

### iframe

• `Protected` **iframe**: `HTMLIFrameElement`

#### Defined in

[embed/VbrickEmbed.ts:12](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L12)

___

### iframeUrl

• `Protected` `Readonly` **iframeUrl**: `string`

___

### init

• `Private` **init**: `Promise`<`any`\>

#### Defined in

[embed/VbrickEmbed.ts:14](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L14)

___

### logger

• `Protected` **logger**: [`ILogger`](../interfaces/Log.ILogger.md)

#### Defined in

[embed/VbrickEmbed.ts:16](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L16)

___

### unsubscribes

• `Protected` **unsubscribes**: () => `void`[]

#### Defined in

[embed/VbrickEmbed.ts:15](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L15)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Implementation of

[IVbrickBaseEmbed](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md).[destroy](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/VbrickEmbed.ts:85](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L85)

___

### initialize

▸ **initialize**(): `Promise`<`any`\>

Indicates the embedded content was initialized and authenticated.
If there was a problem loading the content, or a problem with the token, the promise will be rejected.

#### Returns

`Promise`<`any`\>

#### Defined in

[embed/VbrickEmbed.ts:30](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L30)

___

### initializeEmbed

▸ `Protected` `Abstract` **initializeEmbed**(): `void`

#### Returns

`void`

#### Defined in

[embed/VbrickEmbed.ts:56](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L56)

___

### initializeToken

▸ `Protected` `Abstract` **initializeToken**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[embed/VbrickEmbed.ts:55](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L55)

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

[embed/VbrickEmbed.ts:63](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L63)

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

[embed/VbrickEmbed.ts:58](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L58)

___

### render

▸ `Private` **render**(): `HTMLIFrameElement`

#### Returns

`HTMLIFrameElement`

#### Defined in

[embed/VbrickEmbed.ts:67](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L67)

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

[embed/VbrickEmbed.ts:92](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbed.ts#L92)
