[@vbrick/rev-sdk](../README.md) / VbrickBaseEmbedConfig

# Interface: VbrickBaseEmbedConfig

Options when creating the iframe embed for a video/webcast

## Hierarchy

- [`VbrickSDKConfig`](VbrickSDKConfig.md)

  ↳ **`VbrickBaseEmbedConfig`**

  ↳↳ [`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md)

  ↳↳ [`VbrickWebcastEmbedConfig`](VbrickWebcastEmbedConfig.md)

## Table of contents

### Properties

- [autoplay](VbrickBaseEmbedConfig.md#autoplay)
- [baseUrl](VbrickBaseEmbedConfig.md#baseurl)
- [className](VbrickBaseEmbedConfig.md#classname)
- [height](VbrickBaseEmbedConfig.md#height)
- [initialVolume](VbrickBaseEmbedConfig.md#initialvolume)
- [log](VbrickBaseEmbedConfig.md#log)
- [popupAuth](VbrickBaseEmbedConfig.md#popupauth)
- [timeoutSeconds](VbrickBaseEmbedConfig.md#timeoutseconds)
- [token](VbrickBaseEmbedConfig.md#token)
- [width](VbrickBaseEmbedConfig.md#width)

## Properties

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L33)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickSDKConfig](VbrickSDKConfig.md).[baseUrl](VbrickSDKConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Defined in

[embed/VbrickEmbedConfig.ts:11](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L11)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L21)

___

### initialVolume

• `Optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Defined in

[embed/VbrickEmbedConfig.ts:38](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L38)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickSDKConfig](VbrickSDKConfig.md).[log](VbrickSDKConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Defined in

[embed/VbrickEmbedConfig.ts:26](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L26)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Defined in

[embed/VbrickEmbedConfig.ts:31](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L31)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickSDKConfig](VbrickSDKConfig.md).[token](VbrickSDKConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:16](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L16)
