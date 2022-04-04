[@vbrick/rev-sdk](../README.md) / [Modules](../modules.md) / [IVbrickApi](../modules/IVbrickApi.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed

[IVbrickApi](../modules/IVbrickApi.md).IVbrickBaseEmbed

## Hierarchy

- **`IVbrickBaseEmbed`**

  ↳ [`IVbrickVideoEmbed`](IVbrickApi.IVbrickVideoEmbed.md)

  ↳ [`IVbrickWebcastEmbed`](IVbrickApi.IVbrickWebcastEmbed.md)

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

#### Defined in

IVbrickApi.ts:206

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

#### Defined in

IVbrickApi.ts:155

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

IVbrickApi.ts:161

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

IVbrickApi.ts:172

▸ **on**(`event`, `listener`): `void`

Fired when the captions are toggled, or the language changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"captionsChanged"`` |
| `listener` | (`event`: [`ICaptionSettings`](IVbrickApi.ICaptionSettings.md)) => `void` |

#### Returns

`void`

#### Defined in

IVbrickApi.ts:184

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

IVbrickApi.ts:191

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

IVbrickApi.ts:196

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

IVbrickApi.ts:201
