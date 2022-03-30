[@vbrick/rev-sdk](../README.md) / [IVbrickApi](../modules/IVbrickApi.md) / IVbrickVideoConfig

# Interface: IVbrickVideoConfig

[IVbrickApi](../modules/IVbrickApi.md).IVbrickVideoConfig

## Hierarchy

- [`IVbrickEmbedConfig`](IVbrickApi.IVbrickEmbedConfig.md)

  ↳ **`IVbrickVideoConfig`**

## Table of contents

### Properties

- [accentColor](IVbrickApi.IVbrickVideoConfig.md#accentcolor)
- [autoplay](IVbrickApi.IVbrickVideoConfig.md#autoplay)
- [baseUrl](IVbrickApi.IVbrickVideoConfig.md#baseurl)
- [className](IVbrickApi.IVbrickVideoConfig.md#classname)
- [forcedCaptions](IVbrickApi.IVbrickVideoConfig.md#forcedcaptions)
- [height](IVbrickApi.IVbrickVideoConfig.md#height)
- [hideCaptions](IVbrickApi.IVbrickVideoConfig.md#hidecaptions)
- [hideChapters](IVbrickApi.IVbrickVideoConfig.md#hidechapters)
- [hideFullscreen](IVbrickApi.IVbrickVideoConfig.md#hidefullscreen)
- [hideOverlayControls](IVbrickApi.IVbrickVideoConfig.md#hideoverlaycontrols)
- [hidePlayControls](IVbrickApi.IVbrickVideoConfig.md#hideplaycontrols)
- [hideSettings](IVbrickApi.IVbrickVideoConfig.md#hidesettings)
- [log](IVbrickApi.IVbrickVideoConfig.md#log)
- [logoUrl](IVbrickApi.IVbrickVideoConfig.md#logourl)
- [playInLoop](IVbrickApi.IVbrickVideoConfig.md#playinloop)
- [popOut](IVbrickApi.IVbrickVideoConfig.md#popout)
- [startAt](IVbrickApi.IVbrickVideoConfig.md#startat)
- [token](IVbrickApi.IVbrickVideoConfig.md#token)
- [width](IVbrickApi.IVbrickVideoConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[IVbrickApi.ts:83](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L83)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

[IVbrickApi.ts:59](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L59)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[IVbrickEmbedConfig](IVbrickApi.IVbrickEmbedConfig.md).[baseUrl](IVbrickApi.IVbrickEmbedConfig.md#baseurl)

#### Defined in

[IVbrickApi.ts:23](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L23)

___

### className

• **className**: `string`

An optional class to be set on the iframe.

#### Inherited from

[IVbrickEmbedConfig](IVbrickApi.IVbrickEmbedConfig.md).[className](IVbrickApi.IVbrickEmbedConfig.md#classname)

#### Defined in

[IVbrickApi.ts:28](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L28)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

#### Defined in

[IVbrickApi.ts:65](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L65)

___

### height

• **height**: `string`

Height of the iframe. Default is "100%"

#### Inherited from

[IVbrickEmbedConfig](IVbrickApi.IVbrickEmbedConfig.md).[height](IVbrickApi.IVbrickEmbedConfig.md#height)

#### Defined in

[IVbrickApi.ts:38](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L38)

___

### hideCaptions

• `Optional` **hideCaptions**: `boolean`

#### Defined in

[IVbrickApi.ts:64](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L64)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[IVbrickApi.ts:61](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L61)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[IVbrickApi.ts:67](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L67)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[IVbrickApi.ts:62](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L62)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[IVbrickApi.ts:63](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L63)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[IVbrickApi.ts:66](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L66)

___

### log

• `Optional` **log**: `boolean`

If true, enable logging messages in the browser console.

#### Inherited from

[IVbrickEmbedConfig](IVbrickApi.IVbrickEmbedConfig.md).[log](IVbrickApi.IVbrickEmbedConfig.md#log)

#### Defined in

[IVbrickApi.ts:43](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L43)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[IVbrickApi.ts:78](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L78)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[IVbrickApi.ts:60](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L60)

___

### popOut

• `Optional` **popOut**: `boolean`

Plays the video in a popup window. If false(default) the video plays directly in the embed element.

#### Defined in

[IVbrickApi.ts:57](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L57)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[IVbrickApi.ts:73](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L73)

___

### token

• **token**: [`IVbrickAPIToken`](IVbrickApi.IVbrickAPIToken.md)

#### Inherited from

[IVbrickEmbedConfig](IVbrickApi.IVbrickEmbedConfig.md).[token](IVbrickApi.IVbrickEmbedConfig.md#token)

#### Defined in

[IVbrickApi.ts:18](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L18)

___

### width

• **width**: `string`

Width of the iframe. Default is "100%"

#### Inherited from

[IVbrickEmbedConfig](IVbrickApi.IVbrickEmbedConfig.md).[width](IVbrickApi.IVbrickEmbedConfig.md#width)

#### Defined in

[IVbrickApi.ts:33](https://github.com/vbrick/rev-sdk-js/blob/21b09fe/src/IVbrickApi.ts#L33)
