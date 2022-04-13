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

### Properties

- [\_status](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#_status)
- [config](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#config)
- [container](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#container)
- [eventBus](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#eventbus)
- [iframe](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#iframe)
- [iframeUrl](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#iframeurl)
- [logger](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#logger)
- [unsubscribes](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#unsubscribes)

### Accessors

- [status](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#status)

### Methods

- [destroy](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#destroy)
- [initialize](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#initialize)
- [initializeEmbed](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#initializeembed)
- [initializeToken](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#initializetoken)
- [off](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#off)
- [on](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md#on)

## Constructors

### constructor

• **new VbrickWebcastEmbed**(`webcastId`, `config`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webcastId` | `string` |
| `config` | [`VbrickEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickEmbedConfig.md) |
| `container` | `HTMLElement` |

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[constructor](embed_VbrickEmbed.VbrickEmbed.md#constructor)

#### Defined in

[embed/VbrickWebcastEmbed.ts:15](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickWebcastEmbed.ts#L15)

## Properties

### \_status

• `Private` **\_status**: [`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

#### Defined in

[embed/VbrickWebcastEmbed.ts:10](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickWebcastEmbed.ts#L10)

___

### config

• `Protected` `Readonly` **config**: [`VbrickEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickEmbedConfig.md)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[config](embed_VbrickEmbed.VbrickEmbed.md#config)

___

### container

• `Protected` `Readonly` **container**: `HTMLElement`

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[container](embed_VbrickEmbed.VbrickEmbed.md#container)

___

### eventBus

• `Protected` **eventBus**: [`EventBus`](embed_EventBus.EventBus.md)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[eventBus](embed_VbrickEmbed.VbrickEmbed.md#eventbus)

#### Defined in

[embed/VbrickEmbed.ts:11](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L11)

___

### iframe

• `Protected` **iframe**: `HTMLIFrameElement`

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[iframe](embed_VbrickEmbed.VbrickEmbed.md#iframe)

#### Defined in

[embed/VbrickEmbed.ts:10](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L10)

___

### iframeUrl

• `Protected` `Readonly` **iframeUrl**: `string`

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[iframeUrl](embed_VbrickEmbed.VbrickEmbed.md#iframeurl)

___

### logger

• `Protected` **logger**: [`ILogger`](../interfaces/Log.ILogger.md)

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[logger](embed_VbrickEmbed.VbrickEmbed.md#logger)

#### Defined in

[embed/VbrickEmbed.ts:14](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L14)

___

### unsubscribes

• `Protected` **unsubscribes**: () => `void`[]

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[unsubscribes](embed_VbrickEmbed.VbrickEmbed.md#unsubscribes)

#### Defined in

[embed/VbrickEmbed.ts:13](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L13)

## Accessors

### status

• `get` **status**(): [`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

Indicates whether the webcast is started, or broadcasting.

#### Returns

[`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

#### Implementation of

[IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md).[status](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md#status)

#### Defined in

[embed/VbrickWebcastEmbed.ts:11](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickWebcastEmbed.ts#L11)

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

[embed/VbrickEmbed.ts:82](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L82)

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

[embed/VbrickEmbed.ts:28](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L28)

___

### initializeEmbed

▸ `Protected` **initializeEmbed**(): `void`

#### Returns

`void`

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[initializeEmbed](embed_VbrickEmbed.VbrickEmbed.md#initializeembed)

#### Defined in

[embed/VbrickWebcastEmbed.ts:27](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickWebcastEmbed.ts#L27)

___

### initializeToken

▸ `Protected` **initializeToken**(): `Promise`<[`VbrickSDKToken`](../interfaces/VbrickSDK.VbrickSDKToken.md)\>

#### Returns

`Promise`<[`VbrickSDKToken`](../interfaces/VbrickSDK.VbrickSDKToken.md)\>

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[initializeToken](embed_VbrickEmbed.VbrickEmbed.md#initializetoken)

#### Defined in

[embed/VbrickWebcastEmbed.ts:23](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickWebcastEmbed.ts#L23)

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

[embed/VbrickEmbed.ts:60](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L60)

___

### on

▸ **on**(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

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

[embed/VbrickEmbed.ts:56](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L56)
