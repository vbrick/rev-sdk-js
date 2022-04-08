[@vbrick/rev-sdk](../README.md) / [VbrickSDK](../modules/VbrickSDK.md) / VbrickSDKConfig

# Interface: VbrickSDKConfig

[VbrickSDK](../modules/VbrickSDK.md).VbrickSDKConfig

## Table of contents

### Properties

- [accentColor](VbrickSDK.VbrickSDKConfig.md#accentcolor)
- [autoplay](VbrickSDK.VbrickSDKConfig.md#autoplay)
- [baseUrl](VbrickSDK.VbrickSDKConfig.md#baseurl)
- [className](VbrickSDK.VbrickSDKConfig.md#classname)
- [forcedCaptions](VbrickSDK.VbrickSDKConfig.md#forcedcaptions)
- [height](VbrickSDK.VbrickSDKConfig.md#height)
- [hideCaptions](VbrickSDK.VbrickSDKConfig.md#hidecaptions)
- [hideChapters](VbrickSDK.VbrickSDKConfig.md#hidechapters)
- [hideFullscreen](VbrickSDK.VbrickSDKConfig.md#hidefullscreen)
- [hideOverlayControls](VbrickSDK.VbrickSDKConfig.md#hideoverlaycontrols)
- [hidePlayControls](VbrickSDK.VbrickSDKConfig.md#hideplaycontrols)
- [hideSettings](VbrickSDK.VbrickSDKConfig.md#hidesettings)
- [hideVideo](VbrickSDK.VbrickSDKConfig.md#hidevideo)
- [log](VbrickSDK.VbrickSDKConfig.md#log)
- [logoUrl](VbrickSDK.VbrickSDKConfig.md#logourl)
- [playInLoop](VbrickSDK.VbrickSDKConfig.md#playinloop)
- [popOut](VbrickSDK.VbrickSDKConfig.md#popout)
- [startAt](VbrickSDK.VbrickSDKConfig.md#startat)
- [token](VbrickSDK.VbrickSDKConfig.md#token)
- [width](VbrickSDK.VbrickSDKConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

VbrickSDK.ts:88

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

VbrickSDK.ts:64

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Defined in

VbrickSDK.ts:25

___

### className

• **className**: `string`

An optional class to be set on embeds.

#### Defined in

VbrickSDK.ts:40

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

#### Defined in

VbrickSDK.ts:70

___

### height

• **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Defined in

VbrickSDK.ts:50

___

### hideCaptions

• `Optional` **hideCaptions**: `boolean`

#### Defined in

VbrickSDK.ts:69

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

VbrickSDK.ts:66

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

VbrickSDK.ts:72

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

VbrickSDK.ts:67

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

VbrickSDK.ts:68

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

VbrickSDK.ts:71

___

### hideVideo

• `Optional` **hideVideo**: `boolean`

Optional, For embedded webcasts, hides the video. Default is false.

#### Defined in

VbrickSDK.ts:55

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Defined in

VbrickSDK.ts:35

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

VbrickSDK.ts:83

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

VbrickSDK.ts:65

___

### popOut

• `Optional` **popOut**: `boolean`

Plays the video in a popup window. If false(default) the video plays directly in the embed element.
Only implemented for VOD Embeds

#### Defined in

VbrickSDK.ts:62

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

VbrickSDK.ts:78

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md)

Token for authentication

#### Defined in

VbrickSDK.ts:30

___

### width

• **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Defined in

VbrickSDK.ts:45
