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
- [log](VbrickWebcastEmbedConfig.md#log)
- [muted](VbrickWebcastEmbedConfig.md#muted)
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

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L33)

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

[embed/VbrickEmbedConfig.ts:11](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L11)

___

### enableFullRev

• `Optional` **enableFullRev**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:102](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L102)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[height](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L21)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[log](VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

___

### muted

• `Optional` **muted**: `boolean`

set the volume to 0 upon initial load

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[muted](VbrickBaseEmbedConfig.md#muted)

#### Defined in

[embed/VbrickEmbedConfig.ts:38](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L38)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[popupAuth](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:26](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L26)

___

### showFullWebcast

• `Optional` **showFullWebcast**: `boolean`

Include Chat, QA and Polls widgets in embed (if configured)

#### Defined in

[embed/VbrickEmbedConfig.ts:99](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L99)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[timeoutSeconds](VbrickBaseEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:31](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L31)

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

[embed/VbrickEmbedConfig.ts:16](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L16)
