[@vbrick/rev-sdk](../README.md) / VbrickWebcastEmbedConfig

# Interface: VbrickWebcastEmbedConfig

Options available when embedding a webcast

## Hierarchy

- [`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md)

  ↳ **`VbrickWebcastEmbedConfig`**

  ↳↳ [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Table of contents

### Properties

- [autoplay](VbrickWebcastEmbedConfig.md#autoplay)
- [baseUrl](VbrickWebcastEmbedConfig.md#baseurl)
- [className](VbrickWebcastEmbedConfig.md#classname)
- [enableFullRev](VbrickWebcastEmbedConfig.md#enablefullrev)
- [height](VbrickWebcastEmbedConfig.md#height)
- [initialVolume](VbrickWebcastEmbedConfig.md#initialvolume)
- [log](VbrickWebcastEmbedConfig.md#log)
- [popupAuth](VbrickWebcastEmbedConfig.md#popupauth)
- [showFullWebcast](VbrickWebcastEmbedConfig.md#showfullwebcast)
- [timeoutSeconds](VbrickWebcastEmbedConfig.md#timeoutseconds)
- [token](VbrickWebcastEmbedConfig.md#token)
- [width](VbrickWebcastEmbedConfig.md#width)

## Properties

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[autoplay](VbrickBaseEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:34](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L34)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[baseUrl](VbrickBaseEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[className](VbrickBaseEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:12](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L12)

___

### enableFullRev

• `Optional` **enableFullRev**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:103](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L103)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[height](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:22](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L22)

___

### initialVolume

• `Optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[initialVolume](VbrickBaseEmbedConfig.md#initialvolume)

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L39)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[log](VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[popupAuth](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:27](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L27)

___

### showFullWebcast

• `Optional` **showFullWebcast**: `boolean`

Include Chat, QA and Polls widgets in embed (if configured)

#### Defined in

[embed/VbrickEmbedConfig.ts:100](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L100)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[timeoutSeconds](VbrickBaseEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:32](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L32)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[token](VbrickBaseEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[width](VbrickBaseEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:17](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L17)
