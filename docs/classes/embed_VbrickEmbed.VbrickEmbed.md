[@vbrick/rev-sdk](../README.md) / [embed/VbrickEmbed](../modules/embed_VbrickEmbed.md) / VbrickEmbed

# Class: VbrickEmbed

[embed/VbrickEmbed](../modules/embed_VbrickEmbed.md).VbrickEmbed

Base class for embedded content.

## Hierarchy

- **`VbrickEmbed`**

  ↳ [`VbrickVideoEmbed`](embed_VbrickVideoEmbed.VbrickVideoEmbed.md)

  ↳ [`VbrickWebcastEmbed`](embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md)

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

[embed/VbrickEmbed.ts:16](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L16)

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

[embed/VbrickEmbed.ts:11](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L11)

___

### iframe

• `Protected` **iframe**: `HTMLIFrameElement`

#### Defined in

[embed/VbrickEmbed.ts:10](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L10)

___

### iframeUrl

• `Protected` `Readonly` **iframeUrl**: `string`

___

### init

• `Private` **init**: `Promise`<`any`\>

#### Defined in

[embed/VbrickEmbed.ts:12](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L12)

___

### logger

• `Protected` **logger**: [`ILogger`](../interfaces/Log.ILogger.md)

#### Defined in

[embed/VbrickEmbed.ts:14](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L14)

___

### unsubscribes

• `Protected` **unsubscribes**: () => `void`[]

#### Defined in

[embed/VbrickEmbed.ts:13](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L13)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[embed/VbrickEmbed.ts:82](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L82)

___

### initialize

▸ **initialize**(): `Promise`<`any`\>

Indicates the embedded content was initialized and authenticated.
If there was a problem loading the content, or a problem with the token, the promise will be rejected.

#### Returns

`Promise`<`any`\>

#### Defined in

[embed/VbrickEmbed.ts:28](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L28)

___

### initializeEmbed

▸ `Protected` `Abstract` **initializeEmbed**(): `void`

#### Returns

`void`

#### Defined in

[embed/VbrickEmbed.ts:54](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L54)

___

### initializeToken

▸ `Protected` `Abstract` **initializeToken**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[embed/VbrickEmbed.ts:53](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L53)

___

### off

▸ **off**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Defined in

[embed/VbrickEmbed.ts:60](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L60)

___

### on

▸ **on**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Defined in

[embed/VbrickEmbed.ts:56](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L56)

___

### render

▸ `Private` **render**(): `HTMLIFrameElement`

#### Returns

`HTMLIFrameElement`

#### Defined in

[embed/VbrickEmbed.ts:64](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbed.ts#L64)
