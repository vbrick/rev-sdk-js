[@vbrick/rev-sdk](../README.md) / [embed/EventBus](../modules/embed_EventBus.md) / EventBus

# Class: EventBus

[embed/EventBus](../modules/embed_EventBus.md).EventBus

## Table of contents

### Constructors

- [constructor](embed_EventBus.EventBus.md#constructor)

### Properties

- [baseUrl](embed_EventBus.EventBus.md#baseurl)
- [eventHandlers](embed_EventBus.EventBus.md#eventhandlers)
- [isDestroyed](embed_EventBus.EventBus.md#isdestroyed)
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

[embed/EventBus.ts:16](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L16)

## Properties

### baseUrl

• `Private` `Readonly` **baseUrl**: `string`

#### Defined in

[embed/EventBus.ts:10](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L10)

___

### eventHandlers

• `Private` **eventHandlers**: `Object` = `{}`

#### Index signature

▪ [e: `string`]: [`IListener`](../interfaces/embed_EventBus.IListener.md)[]

#### Defined in

[embed/EventBus.ts:14](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L14)

___

### isDestroyed

• `Private` **isDestroyed**: `boolean` = `false`

#### Defined in

[embed/EventBus.ts:12](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L12)

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

[embed/EventBus.ts:9](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L9)

___

### shouldLog

• `Private` `Readonly` **shouldLog**: `boolean`

#### Defined in

[embed/EventBus.ts:11](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L11)

___

### win

• `Private` **win**: `Window`

#### Defined in

[embed/EventBus.ts:8](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L8)

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

[embed/EventBus.ts:36](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L36)

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

[embed/EventBus.ts:101](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L101)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[embed/EventBus.ts:114](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L114)

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

[embed/EventBus.ts:106](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L106)

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

[embed/EventBus.ts:86](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L86)

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

[embed/EventBus.ts:60](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L60)

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

[embed/EventBus.ts:29](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L29)

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

[embed/EventBus.ts:68](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L68)

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

[embed/EventBus.ts:77](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/EventBus.ts#L77)
