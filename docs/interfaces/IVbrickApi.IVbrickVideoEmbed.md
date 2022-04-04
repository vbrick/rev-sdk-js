[@vbrick/rev-sdk](../README.md) / [IVbrickApi](../modules/IVbrickApi.md) / IVbrickVideoEmbed

# Interface: IVbrickVideoEmbed

[IVbrickApi](../modules/IVbrickApi.md).IVbrickVideoEmbed

## Hierarchy

- [`IVbrickBaseEmbed`](IVbrickApi.IVbrickBaseEmbed.md)

  ↳ **`IVbrickVideoEmbed`**

## Table of contents

### Methods

- [destroy](IVbrickApi.IVbrickVideoEmbed.md#destroy)
- [off](IVbrickApi.IVbrickVideoEmbed.md#off)
- [on](IVbrickApi.IVbrickVideoEmbed.md#on)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[destroy](IVbrickApi.IVbrickBaseEmbed.md#destroy)

#### Defined in

[IVbrickApi.ts:200](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L200)

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

[IVbrickApi.ts:195](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L195)

___

### on

▸ **on**(`event`, `listener`): `void`

Fires when the video metadata is loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"videoLoaded"`` |
| `listener` | (`event`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:144](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L144)

▸ **on**(`event`, `listener`): `void`

Fired if the player volume changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"volumeChanged"`` |
| `listener` | (`__namedParameters`: `Object`) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:150](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L150)

▸ **on**(`event`, `listener`): `void`

Fired when the player status changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerStatusChanged"`` |
| `listener` | (`event`: { `status`: [`PlayerStatus`](../enums/IVbrickApi.PlayerStatus.md)  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:161](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L161)

▸ **on**(`event`, `listener`): `void`

Fired when the captions are toggled, or the language changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"captionsChanged"`` |
| `listener` | (`event`: [`ICaptionSettings`](IVbrickApi.ICaptionSettings.md)) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:173](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L173)

▸ **on**(`event`, `listener`): `void`

Fired when the playback speed changes. Only available for prerecorded video on demand.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playbackSpeedChanged"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:180](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L180)

▸ **on**(`event`, `listener`): `void`

Fired when the user seeks in the video player

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"seeked"`` |
| `listener` | (`event`: { `speed`: `number`  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:185](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L185)

▸ **on**(`event`, `listener`): `void`

Fired if there is an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`event`: { `err`: `any` ; `msg`: `string`  }) => `void` |

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](IVbrickApi.IVbrickBaseEmbed.md).[on](IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[IVbrickApi.ts:190](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/IVbrickApi.ts#L190)
