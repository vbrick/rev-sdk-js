[@vbrick/rev-sdk](../README.md) / [embed/IVbrickApi](../modules/embed_IVbrickApi.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed

[embed/IVbrickApi](../modules/embed_IVbrickApi.md).IVbrickBaseEmbed

## Hierarchy

- **`IVbrickBaseEmbed`**

  ↳ [`IVbrickVideoEmbed`](embed_IVbrickApi.IVbrickVideoEmbed.md)

  ↳ [`IVbrickWebcastEmbed`](embed_IVbrickApi.IVbrickWebcastEmbed.md)

## Table of contents

### Methods

- [destroy](embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)
- [off](embed_IVbrickApi.IVbrickBaseEmbed.md#off)
- [on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:146](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L146)

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

[embed/IVbrickApi.ts:141](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L141)

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

[embed/IVbrickApi.ts:90](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L90)

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

[embed/IVbrickApi.ts:96](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L96)

▸ **on**(`event`, `listener`): `void`

Fired when the player status changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"playerStatusChanged"`` |
| `listener` | (`event`: { `status`: [`PlayerStatus`](../enums/embed_PlayerStatus.PlayerStatus.md)  }) => `void` |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:107](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L107)

▸ **on**(`event`, `listener`): `void`

Fired when the captions are toggled, or the language changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"captionsChanged"`` |
| `listener` | (`event`: [`ICaptionSettings`](embed_IVbrickApi.ICaptionSettings.md)) => `void` |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:119](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L119)

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

[embed/IVbrickApi.ts:126](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L126)

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

[embed/IVbrickApi.ts:131](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L131)

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

[embed/IVbrickApi.ts:136](https://github.com/vbrick/rev-sdk-js/blob/e732619/src/embed/IVbrickApi.ts#L136)
