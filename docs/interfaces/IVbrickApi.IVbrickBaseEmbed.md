[@vbrick/rev-sdk](../README.md) / [IVbrickApi](../modules/IVbrickApi.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed

[IVbrickApi](../modules/IVbrickApi.md).IVbrickBaseEmbed

## Hierarchy

- **`IVbrickBaseEmbed`**

  ↳ [`IVbrickWebcast`](IVbrickApi.IVbrickWebcast.md)

## Table of contents

### Methods

- [destroy](IVbrickApi.IVbrickBaseEmbed.md#destroy)
- [off](IVbrickApi.IVbrickBaseEmbed.md#off)
- [on](IVbrickApi.IVbrickBaseEmbed.md#on)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

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

#### Defined in

[IVbrickApi.ts:182](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L182)

___

### on

▸ **on**(`event`, `listener`): `void`

Fired if the player volume changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"volumeChanged"`` |
| `listener` | (`__namedParameters`: `Object`) => `void` |

#### Returns

`void`

#### Defined in

[IVbrickApi.ts:137](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L137)

▸ **on**(`event`, `listener`): `void`

Fired when the player status changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerStatusChanged"`` |
| `listener` | (`event`: { `status`: [`PlayerStatus`](../enums/IVbrickApi.PlayerStatus.md)  }) => `void` |

#### Returns

`void`

#### Defined in

[IVbrickApi.ts:148](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L148)

▸ **on**(`event`, `listener`): `void`

Fired when the captions are toggled, or the language changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"captionsChanged"`` |
| `listener` | (`event`: { `enabled`: `boolean` ; `language`: `string`  }) => `void` |

#### Returns

`void`

#### Defined in

[IVbrickApi.ts:160](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L160)

▸ **on**(`event`, `listener`): `void`

Fired when the playback speed changes. Only available for prerecorded video on demand.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playbackSpeedChanged"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Defined in

[IVbrickApi.ts:167](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L167)

▸ **on**(`event`, `listener`): `void`

Fired when the user seeks in the video player

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"seeked"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Defined in

[IVbrickApi.ts:172](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L172)

▸ **on**(`event`, `listener`): `void`

Fired if there is an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`event`: { `err`: `any` ; `msg`: `string`  }) => `void` |

#### Returns

`void`

#### Defined in

[IVbrickApi.ts:177](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L177)
