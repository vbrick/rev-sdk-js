[@vbrick/rev-sdk](../README.md) / VbrickVideoEmbedConfig

# Interface: VbrickVideoEmbedConfig

Options available when embedding a VOD/video

## Hierarchy

- [`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md)

  ↳ **`VbrickVideoEmbedConfig`**

  ↳↳ [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Table of contents

### Properties

- [accentColor](VbrickVideoEmbedConfig.md#accentcolor)
- [autoplay](VbrickVideoEmbedConfig.md#autoplay)
- [baseUrl](VbrickVideoEmbedConfig.md#baseurl)
- [className](VbrickVideoEmbedConfig.md#classname)
- [forcedCaptions](VbrickVideoEmbedConfig.md#forcedcaptions)
- [height](VbrickVideoEmbedConfig.md#height)
- [hideChapters](VbrickVideoEmbedConfig.md#hidechapters)
- [hideFullscreen](VbrickVideoEmbedConfig.md#hidefullscreen)
- [hideOverlayControls](VbrickVideoEmbedConfig.md#hideoverlaycontrols)
- [hidePlayControls](VbrickVideoEmbedConfig.md#hideplaycontrols)
- [hideSettings](VbrickVideoEmbedConfig.md#hidesettings)
- [hideSubtitles](VbrickVideoEmbedConfig.md#hidesubtitles)
- [log](VbrickVideoEmbedConfig.md#log)
- [logoUrl](VbrickVideoEmbedConfig.md#logourl)
- [playInLoop](VbrickVideoEmbedConfig.md#playinloop)
- [popupAuth](VbrickVideoEmbedConfig.md#popupauth)
- [startAt](VbrickVideoEmbedConfig.md#startat)
- [timeoutSeconds](VbrickVideoEmbedConfig.md#timeoutseconds)
- [token](VbrickVideoEmbedConfig.md#token)
- [width](VbrickVideoEmbedConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:64](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L64)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L39)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[baseUrl](VbrickBaseEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:34](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/VbrickSDK.ts#L34)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[className](VbrickBaseEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:11](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L11)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Defined in

[embed/VbrickEmbedConfig.ts:46](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L46)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[height](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L21)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:41](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L41)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L48)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:42](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L42)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:43](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L43)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:47](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L47)

___

### hideSubtitles

• `Optional` **hideSubtitles**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:44](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L44)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[log](VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:44](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/VbrickSDK.ts#L44)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:59](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L59)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L40)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[popupAuth](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:26](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L26)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L54)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[timeoutSeconds](VbrickBaseEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:31](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L31)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[token](VbrickBaseEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:39](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/VbrickSDK.ts#L39)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[width](VbrickBaseEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:16](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/VbrickEmbedConfig.ts#L16)
