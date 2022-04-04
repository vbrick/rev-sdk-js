[@vbrick/rev-sdk](../README.md) / [Modules](../modules.md) / [IVbrickApi](../modules/IVbrickApi.md) / IVbrickWebcastEmbed

# Interface: IVbrickWebcastEmbed

[IVbrickApi](../modules/IVbrickApi.md).IVbrickWebcastEmbed

## Hierarchy

- [`IVbrickBaseEmbed`](IVbrickApi.IVbrickBaseEmbed.md)

  ↳ **`IVbrickWebcastEmbed`**

## Table of contents

### Properties

- [status](IVbrickApi.IVbrickWebcastEmbed.md#status)

### Methods

- [destroy](IVbrickApi.IVbrickWebcastEmbed.md#destroy)
- [off](IVbrickApi.IVbrickWebcastEmbed.md#off)
- [on](IVbrickApi.IVbrickWebcastEmbed.md#on)

## Properties

### status

• `Readonly` **status**: [`WebcastStatus`](../enums/IVbrickApi.WebcastStatus.md)

Indicates whether the webcast is started, or broadcasting.

#### Defined in

IVbrickApi.ts:116

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[destroy](IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

IVbrickApi.ts:211

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

IVbrickApi.ts:206

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

IVbrickApi.ts:123

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

IVbrickApi.ts:128

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

IVbrickApi.ts:133

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

IVbrickApi.ts:140

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

IVbrickApi.ts:145
