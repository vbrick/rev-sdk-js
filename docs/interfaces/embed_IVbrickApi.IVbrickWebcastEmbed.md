[@vbrick/rev-sdk](../README.md) / [embed/IVbrickApi](../modules/embed_IVbrickApi.md) / IVbrickWebcastEmbed

# Interface: IVbrickWebcastEmbed

[embed/IVbrickApi](../modules/embed_IVbrickApi.md).IVbrickWebcastEmbed

## Hierarchy

- [`IVbrickBaseEmbed`](embed_IVbrickApi.IVbrickBaseEmbed.md)

  ↳ **`IVbrickWebcastEmbed`**

## Implemented by

- [`VbrickWebcastEmbed`](../classes/embed_VbrickWebcastEmbed.VbrickWebcastEmbed.md)

## Table of contents

### Properties

- [status](embed_IVbrickApi.IVbrickWebcastEmbed.md#status)

### Methods

- [destroy](embed_IVbrickApi.IVbrickWebcastEmbed.md#destroy)
- [off](embed_IVbrickApi.IVbrickWebcastEmbed.md#off)
- [on](embed_IVbrickApi.IVbrickWebcastEmbed.md#on)

## Properties

### status

• `Readonly` **status**: [`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

Indicates whether the webcast is started, or broadcasting.

#### Defined in

[embed/IVbrickApi.ts:51](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L51)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[destroy](embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[embed/IVbrickApi.ts:146](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L146)

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

[embed/IVbrickApi.ts:141](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L141)

___

### on

▸ **on**(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (`event`: `any`) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:58](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L58)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast starts broadcasting.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"broadcastStarted"`` |
| `listener` | () => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:63](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L63)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast stops broadcasting.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"broadcastStopped"`` |
| `listener` | () => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:68](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L68)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast starts.

isPreProduction: boolean, Indicates that the webcast is running in pre-production mode, and is not started publicly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"webastStarted"`` |
| `listener` | (`event`: { `isPreProduction`: `boolean`  }) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:75](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L75)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast ends.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"webcastEnded"`` |
| `listener` | () => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:80](https://github.com/vbrick/rev-sdk-js/blob/c8dd2aa/src/embed/IVbrickApi.ts#L80)
