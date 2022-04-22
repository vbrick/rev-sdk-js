[@vbrick/rev-sdk](../README.md) / [embed/IVbrickApi](../modules/embed_IVbrickApi.md) / IVbrickBaseEmbed

# Interface: IVbrickBaseEmbed

[embed/IVbrickApi](../modules/embed_IVbrickApi.md).IVbrickBaseEmbed

## Hierarchy

- **`IVbrickBaseEmbed`**

  ↳ [`IVbrickVideoEmbed`](embed_IVbrickApi.IVbrickVideoEmbed.md)

  ↳ [`IVbrickWebcastEmbed`](embed_IVbrickApi.IVbrickWebcastEmbed.md)

## Implemented by

- [`VbrickEmbed`](../classes/embed_VbrickEmbed.VbrickEmbed.md)

## Table of contents

### Methods

- [destroy](embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)
- [off](embed_IVbrickApi.IVbrickBaseEmbed.md#off)
- [on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)
- [updateToken](embed_IVbrickApi.IVbrickBaseEmbed.md#updatetoken)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:176](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L176)

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

[embed/IVbrickApi.ts:171](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L171)

___

### on

▸ **on**(`event`, `listener`): `void`

Fired when iframe has loaded

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"load"`` |
| `listener` | (`event`: `undefined`) => `void` |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:154](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L154)

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

[embed/IVbrickApi.ts:159](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L159)

▸ **on**(`event`, `listener`): `void`

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | name of event |
| `listener` | (`event`: `any`) => `void` | callback when event is fired. Keep a reference if you intend to call [IVbrickBaseEmbed.off](embed_IVbrickApi.IVbrickBaseEmbed.md#off) later |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:166](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L166)

___

### updateToken

▸ **updateToken**(`token`): `void`

Allows updating the access token if the old one has expired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md) | New token |

#### Returns

`void`

#### Defined in

[embed/IVbrickApi.ts:182](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L182)
