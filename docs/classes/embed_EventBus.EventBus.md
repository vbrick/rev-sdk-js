[@vbrick/rev-sdk](../README.md) / [embed/EventBus](../modules/embed_EventBus.md) / EventBus

# Class: EventBus

[embed/EventBus](../modules/embed_EventBus.md).EventBus

## Table of contents

### Constructors

- [constructor](embed_EventBus.EventBus.md#constructor)

### Properties

- [baseUrl](embed_EventBus.EventBus.md#baseurl)
- [eventHandlers](embed_EventBus.EventBus.md#eventhandlers)
- [msgListener](embed_EventBus.EventBus.md#msglistener)
- [shouldLog](embed_EventBus.EventBus.md#shouldlog)
- [win](embed_EventBus.EventBus.md#win)

### Methods

- [awaitEvent](embed_EventBus.EventBus.md#awaitevent)
- [callHandlers](embed_EventBus.EventBus.md#callhandlers)
- [destroy](embed_EventBus.EventBus.md#destroy)
- [getHandlers](embed_EventBus.EventBus.md#gethandlers)
- [handleMessage](embed_EventBus.EventBus.md#handlemessage)
- [off](embed_EventBus.EventBus.md#off)
- [on](embed_EventBus.EventBus.md#on)
- [publish](embed_EventBus.EventBus.md#publish)
- [publishError](embed_EventBus.EventBus.md#publisherror)

## Constructors

### constructor

• **new EventBus**(`iframe`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iframe` | `HTMLIFrameElement` |
| `config` | [`VbrickSDKConfig`](../interfaces/VbrickSDK.VbrickSDKConfig.md) |

#### Defined in

embed/EventBus.ts:15

## Properties

### baseUrl

• `Private` `Readonly` **baseUrl**: `string`

#### Defined in

embed/EventBus.ts:10

___

### eventHandlers

• `Private` **eventHandlers**: `Object` = `{}`

#### Index signature

▪ [e: `string`]: [`IListener`](../interfaces/embed_EventBus.IListener.md)[]

#### Defined in

embed/EventBus.ts:13

___

### msgListener

• `Private` **msgListener**: (`e`: `MessageEvent`<`any`\>) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MessageEvent`<`any`\> |

##### Returns

`void`

#### Defined in

embed/EventBus.ts:9

___

### shouldLog

• `Private` `Readonly` **shouldLog**: `boolean`

#### Defined in

embed/EventBus.ts:11

___

### win

• `Private` **win**: `Window`

#### Defined in

embed/EventBus.ts:8

## Methods

### awaitEvent

▸ **awaitEvent**(`event`, `failEvent?`, `timeout?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` | `undefined` |
| `failEvent?` | `string` | `undefined` |
| `timeout` | `number` | `30000` |

#### Returns

`Promise`<`any`\>

#### Defined in

embed/EventBus.ts:35

___

### callHandlers

▸ `Private` **callHandlers**(`event`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

embed/EventBus.ts:97

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

embed/EventBus.ts:110

___

### getHandlers

▸ `Private` **getHandlers**(`event`): [`IListener`](../interfaces/embed_EventBus.IListener.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

[`IListener`](../interfaces/embed_EventBus.IListener.md)[]

#### Defined in

embed/EventBus.ts:102

___

### handleMessage

▸ `Private` **handleMessage**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MessageEvent`<`any`\> |

#### Returns

`void`

#### Defined in

embed/EventBus.ts:82

___

### off

▸ **off**(`event`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`void`

#### Defined in

embed/EventBus.ts:56

___

### on

▸ **on**(`event`, `fn`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | [`IListener`](../interfaces/embed_EventBus.IListener.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

embed/EventBus.ts:28

___

### publish

▸ **publish**(`event`, `msg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `msg?` | `any` |

#### Returns

`void`

#### Defined in

embed/EventBus.ts:64

___

### publishError

▸ **publishError**(`msg`, `err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `err` | `any` |

#### Returns

`void`

#### Defined in

embed/EventBus.ts:73
