[@vbrick/rev-sdk](../README.md) / [embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md) / VbrickEmbedConfig

# Interface: VbrickEmbedConfig

[embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md).VbrickEmbedConfig

Options available when embedding a VOD/video or webcast

## Hierarchy

- [`VbrickSDKConfig`](VbrickSDK.VbrickSDKConfig.md)

  ↳ **`VbrickEmbedConfig`**

## Table of contents

### Properties

- [accentColor](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#accentcolor)
- [autoplay](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#autoplay)
- [baseUrl](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#baseurl)
- [className](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#classname)
- [forcedCaptions](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#forcedcaptions)
- [height](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#height)
- [hideCaptions](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hidecaptions)
- [hideChapters](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hidechapters)
- [hideFullscreen](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hidefullscreen)
- [hideOverlayControls](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hideoverlaycontrols)
- [hidePlayControls](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hideplaycontrols)
- [hideSettings](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hidesettings)
- [hideVideo](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#hidevideo)
- [log](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#log)
- [logoUrl](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#logourl)
- [playInLoop](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#playinloop)
- [popupAuth](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#popupauth)
- [startAt](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#startat)
- [token](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#token)
- [width](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:58](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L58)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:34](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L34)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[baseUrl](VbrickSDK.VbrickSDKConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:34](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/VbrickSDK.ts#L34)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Defined in

[embed/VbrickEmbedConfig.ts:12](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L12)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L40)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:22](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L22)

___

### hideCaptions

• `Optional` **hideCaptions**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L39)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:36](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L36)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:42](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L42)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:37](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L37)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:38](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L38)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:41](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L41)

___

### hideVideo

• `Optional` **hideVideo**: `boolean`

Optional, For embedded webcasts, hides the video. Default is false.

#### Defined in

[embed/VbrickEmbedConfig.ts:27](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L27)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[log](VbrickSDK.VbrickSDKConfig.md#log)

#### Defined in

[VbrickSDK.ts:44](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/VbrickSDK.ts#L44)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L53)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L35)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Defined in

[embed/VbrickEmbedConfig.ts:32](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L32)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L48)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[token](VbrickSDK.VbrickSDKConfig.md#token)

#### Defined in

[VbrickSDK.ts:39](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/VbrickSDK.ts#L39)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:17](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/VbrickEmbedConfig.ts#L17)
