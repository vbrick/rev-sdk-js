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

- [webcastStatus](embed_IVbrickApi.IVbrickWebcastEmbed.md#webcaststatus)

### Methods

- [destroy](embed_IVbrickApi.IVbrickWebcastEmbed.md#destroy)
- [off](embed_IVbrickApi.IVbrickWebcastEmbed.md#off)
- [on](embed_IVbrickApi.IVbrickWebcastEmbed.md#on)
- [updateToken](embed_IVbrickApi.IVbrickWebcastEmbed.md#updatetoken)

## Properties

### webcastStatus

• `Readonly` **webcastStatus**: [`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)

Indicates whether the webcast is started, or broadcasting.

#### Defined in

[embed/IVbrickApi.ts:114](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L114)

## Methods

### destroy

▸ **destroy**(): `void`

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[destroy](embed_IVbrickApi.IVbrickBaseEmbed.md#destroy)

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

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[off](embed_IVbrickApi.IVbrickBaseEmbed.md#off)

#### Defined in

[embed/IVbrickApi.ts:171](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L171)

___

### on

▸ **on**(`event`, `listener`): `void`

Fired on initial load

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"webcastLoaded"`` |
| `listener` | (`event`: { `status`: [`WebcastStatus`](../enums/embed_WebcastStatus.WebcastStatus.md)  }) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:119](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L119)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast starts broadcasting.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"broadcastStarted"`` |
| `listener` | (`event`: { `status`: [`Broadcasting`](../enums/embed_WebcastStatus.WebcastStatus.md#broadcasting)  }) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:124](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L124)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast stops broadcasting.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"broadcastStopped"`` |
| `listener` | (`event`: { `status`: [`Completed`](../enums/embed_WebcastStatus.WebcastStatus.md#completed)  }) => `void` |

#### Returns

`void`

#### Overrides

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[on](embed_IVbrickApi.IVbrickBaseEmbed.md#on)

#### Defined in

[embed/IVbrickApi.ts:129](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L129)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast starts.

isPreProduction: boolean, Indicates that the webcast is running in pre-production mode, and is not started publicly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"webastStarted"`` |
| `listener` | (`event`: { `isPreProduction`: `boolean` ; `status`: [`InProgress`](../enums/embed_WebcastStatus.WebcastStatus.md#inprogress)  }) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:136](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L136)

▸ **on**(`event`, `listener`): `void`

Fired when the webcast ends.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"webcastEnded"`` |
| `listener` | (`event`: { `status`: [`Completed`](../enums/embed_WebcastStatus.WebcastStatus.md#completed)  }) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:141](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L141)

▸ **on**(`event`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (`event`: `any`) => `void` |

#### Returns

`void`

#### Overrides

IVbrickBaseEmbed.on

#### Defined in

[embed/IVbrickApi.ts:143](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L143)

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

#### Inherited from

[IVbrickBaseEmbed](embed_IVbrickApi.IVbrickBaseEmbed.md).[updateToken](embed_IVbrickApi.IVbrickBaseEmbed.md#updatetoken)

#### Defined in

[embed/IVbrickApi.ts:182](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/IVbrickApi.ts#L182)
