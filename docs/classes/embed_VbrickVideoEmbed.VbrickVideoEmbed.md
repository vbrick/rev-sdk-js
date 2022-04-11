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

- [\_captions](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#_captions)
- [\_playerStatus](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#_playerstatus)
- [\_volume](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#_volume)
- [config](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#config)
- [container](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#container)
- [eventBus](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#eventbus)
- [iframe](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#iframe)
- [iframeUrl](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#iframeurl)
- [logger](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#logger)
- [unsubscribes](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#unsubscribes)
- [videoInfo](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#videoinfo)

### Accessors

- [captions](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#captions)
- [playerStatus](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#playerstatus)
- [volume](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#volume)

### Methods

- [destroy](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#destroy)
- [initialize](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#initialize)
- [initializeEmbed](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#initializeembed)
- [initializeToken](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#initializetoken)
- [off](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#off)
- [on](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#on)
- [pause](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#pause)
- [play](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#play)
- [setVolume](embed_VbrickVideoEmbed.VbrickVideoEmbed.md#setvolume)

## Constructors

### constructor

• **new VbrickVideoEmbed**(`videoId`, `config`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `videoId` | `string` |
| `config` | [`VbrickEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickEmbedConfig.md) |
| `container` | `HTMLElement` |

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[constructor](embed_VbrickEmbed.VbrickEmbed.md#constructor)

#### Defined in

[embed/VbrickVideoEmbed.ts:43](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L43)

## Properties

### \_captions

• `Private` **\_captions**: [`ICaptionSettings`](../interfaces/embed_IVbrickApi.ICaptionSettings.md)

#### Defined in

[embed/VbrickVideoEmbed.ts:34](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L34)

___

### \_playerStatus

• `Private` **\_playerStatus**: `any`

#### Defined in

[embed/VbrickVideoEmbed.ts:18](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L18)

___

### \_volume

• `Private` **\_volume**: `number`

#### Defined in

[embed/VbrickVideoEmbed.ts:26](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L26)

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

[embed/VbrickEmbed.ts:11](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L11)

___

### iframe

• `Protected` **iframe**: `HTMLIFrameElement`

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[iframe](embed_VbrickEmbed.VbrickEmbed.md#iframe)

#### Defined in

[embed/VbrickEmbed.ts:10](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L10)

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

[embed/VbrickEmbed.ts:14](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L14)

___

### unsubscribes

• `Protected` **unsubscribes**: () => `void`[]

#### Inherited from

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[unsubscribes](embed_VbrickEmbed.VbrickEmbed.md#unsubscribes)

#### Defined in

[embed/VbrickEmbed.ts:13](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L13)

___

### videoInfo

• `Readonly` **videoInfo**: `any`

Contains metadata for the video

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[videoInfo](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#videoinfo)

#### Defined in

[embed/VbrickVideoEmbed.ts:39](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L39)

## Accessors

### captions

• `get` **captions**(): [`ICaptionSettings`](../interfaces/embed_IVbrickApi.ICaptionSettings.md)

Whether captions are enabled, and selected language

#### Returns

[`ICaptionSettings`](../interfaces/embed_IVbrickApi.ICaptionSettings.md)

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[captions](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#captions)

#### Defined in

[embed/VbrickVideoEmbed.ts:31](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L31)

___

### playerStatus

• `get` **playerStatus**(): [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)

video playing, buffering, etc

#### Returns

[`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[playerStatus](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#playerstatus)

#### Defined in

[embed/VbrickVideoEmbed.ts:15](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L15)

___

### volume

• `get` **volume**(): `number`

Player Volume. 0-1

#### Returns

`number`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[volume](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#volume)

#### Defined in

[embed/VbrickVideoEmbed.ts:23](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L23)

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

[embed/VbrickVideoEmbed.ts:92](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L92)

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

[embed/VbrickEmbed.ts:28](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L28)

___

### initializeEmbed

▸ `Protected` **initializeEmbed**(): `void`

#### Returns

`void`

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[initializeEmbed](embed_VbrickEmbed.VbrickEmbed.md#initializeembed)

#### Defined in

[embed/VbrickVideoEmbed.ts:86](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L86)

___

### initializeToken

▸ `Protected` **initializeToken**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Overrides

[VbrickEmbed](embed_VbrickEmbed.VbrickEmbed.md).[initializeToken](embed_VbrickEmbed.VbrickEmbed.md#initializetoken)

#### Defined in

[embed/VbrickVideoEmbed.ts:72](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L72)

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

[embed/VbrickEmbed.ts:60](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L60)

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

[embed/VbrickEmbed.ts:56](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickEmbed.ts#L56)

___

### pause

▸ **pause**(): `void`

Pauses the video if it is playing.

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[pause](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#pause)

#### Defined in

[embed/VbrickVideoEmbed.ts:60](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L60)

___

### play

▸ **play**(): `void`

Plays the video if it is paused.

#### Returns

`void`

#### Implementation of

[IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md).[play](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md#play)

#### Defined in

[embed/VbrickVideoEmbed.ts:54](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L54)

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

[embed/VbrickVideoEmbed.ts:68](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/VbrickVideoEmbed.ts#L68)
