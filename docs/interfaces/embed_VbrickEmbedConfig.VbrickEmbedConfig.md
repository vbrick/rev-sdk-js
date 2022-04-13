[@vbrick/rev-sdk](../README.md) / [embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md) / VbrickEmbedConfig

# Interface: VbrickEmbedConfig

[embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md).VbrickEmbedConfig

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
- [popOut](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#popout)
- [startAt](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#startat)
- [token](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#token)
- [width](embed_VbrickEmbedConfig.VbrickEmbedConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:56](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L56)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:32](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L32)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[baseUrl](VbrickSDK.VbrickSDKConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:25](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/VbrickSDK.ts#L25)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Defined in

[embed/VbrickEmbedConfig.ts:8](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L8)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:38](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L38)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:18](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L18)

___

### hideCaptions

• `Optional` **hideCaptions**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:37](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L37)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:34](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L34)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L40)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L35)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:36](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L36)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L39)

___

### hideVideo

• `Optional` **hideVideo**: `boolean`

Optional, For embedded webcasts, hides the video. Default is false.

#### Defined in

[embed/VbrickEmbedConfig.ts:23](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L23)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[log](VbrickSDK.VbrickSDKConfig.md#log)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/VbrickSDK.ts#L35)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:51](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L51)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L33)

___

### popOut

• `Optional` **popOut**: `boolean`

Plays the video in a popup window. If false(default) the video plays directly in the embed element.
Only implemented for VOD Embeds

#### Defined in

[embed/VbrickEmbedConfig.ts:30](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L30)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:46](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L46)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickSDKConfig](VbrickSDK.VbrickSDKConfig.md).[token](VbrickSDK.VbrickSDKConfig.md#token)

#### Defined in

[VbrickSDK.ts:30](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/VbrickSDK.ts#L30)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:13](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/embed/VbrickEmbedConfig.ts#L13)
