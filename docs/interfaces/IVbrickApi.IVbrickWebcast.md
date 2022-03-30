[@vbrick/rev-sdk](../README.md) / [IVbrickApi](../modules/IVbrickApi.md) / IVbrickWebcast

# Interface: IVbrickWebcast

[IVbrickApi](../modules/IVbrickApi.md).IVbrickWebcast

## Hierarchy

- [`IVbrickBaseEmbed`](IVbrickApi.IVbrickBaseEmbed.md)

  ↳ **`IVbrickWebcast`**

## Table of contents

### Properties

- [status](IVbrickApi.IVbrickWebcast.md#status)

### Methods

- [destroy](IVbrickApi.IVbrickWebcast.md#destroy)
- [off](IVbrickApi.IVbrickWebcast.md#off)
- [on](IVbrickApi.IVbrickWebcast.md#on)

## Properties

### status

• `Readonly` **status**: [`WebcastStatus`](../enums/IVbrickApi.WebcastStatus.md)

Indicates whether the webcast is started, or broadcasting.

#### Defined in

[IVbrickApi.ts:97](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L97)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[destroy](IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[IVbrickApi.ts:187](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L187)

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

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[off](IVbrickApi.IVbrickBaseEmbed.md#off)

#### Defined in

[IVbrickApi.ts:182](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L182)

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

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:104](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L104)

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

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:109](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L109)

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

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:114](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L114)

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

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:121](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L121)

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

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:126](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L126)
