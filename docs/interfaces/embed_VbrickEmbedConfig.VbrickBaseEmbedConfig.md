[@vbrick/rev-sdk](../README.md) / [embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md) / VbrickBaseEmbedConfig

# Interface: VbrickBaseEmbedConfig

[embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md).VbrickBaseEmbedConfig

Options when creating the iframe embed for a video/webcast

## Hierarchy

- [`VbrickSDKConfig`](VbrickSDK.VbrickSDKConfig.md)

  ↳ **`VbrickBaseEmbedConfig`**

  ↳↳ [`VbrickVideoEmbedConfig`](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md)

  ↳↳ [`VbrickWebcastEmbedConfig`](embed_VbrickEmbedConfig.VbrickWebcastEmbedConfig.md)

## Table of contents

### Properties

- [baseUrl](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#baseurl)
- [className](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#classname)
- [height](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#height)
- [log](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#log)
- [token](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#token)
- [width](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#width)

## Properties

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[baseUrl](VbrickSDK.VbrickSDKConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:34](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/VbrickSDK.ts#L34)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Defined in

[embed/VbrickEmbedConfig.ts:11](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L11)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L21)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[log](VbrickSDK.VbrickSDKConfig.md#log)

#### Defined in

[VbrickSDK.ts:44](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/VbrickSDK.ts#L44)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[token](VbrickSDK.VbrickSDKConfig.md#token)

#### Defined in

[VbrickSDK.ts:39](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/VbrickSDK.ts#L39)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:16](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L16)
