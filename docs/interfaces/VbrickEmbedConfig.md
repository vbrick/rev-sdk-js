[@vbrick/rev-sdk](../README.md) / VbrickEmbedConfig

# Interface: VbrickEmbedConfig

Options available when embedding a VOD/video or webcast

## Hierarchy

- [`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md)

- [`VbrickWebcastEmbedConfig`](VbrickWebcastEmbedConfig.md)

  ↳ **`VbrickEmbedConfig`**

## Table of contents

### Properties

- [accentColor](VbrickEmbedConfig.md#accentcolor)
- [autoplay](VbrickEmbedConfig.md#autoplay)
- [baseUrl](VbrickEmbedConfig.md#baseurl)
- [className](VbrickEmbedConfig.md#classname)
- [forcedCaptions](VbrickEmbedConfig.md#forcedcaptions)
- [height](VbrickEmbedConfig.md#height)
- [hideChapters](VbrickEmbedConfig.md#hidechapters)
- [hideFullscreen](VbrickEmbedConfig.md#hidefullscreen)
- [hideOverlayControls](VbrickEmbedConfig.md#hideoverlaycontrols)
- [hidePlayControls](VbrickEmbedConfig.md#hideplaycontrols)
- [hideSettings](VbrickEmbedConfig.md#hidesettings)
- [hideSubtitles](VbrickEmbedConfig.md#hidesubtitles)
- [log](VbrickEmbedConfig.md#log)
- [logoUrl](VbrickEmbedConfig.md#logourl)
- [playInLoop](VbrickEmbedConfig.md#playinloop)
- [popupAuth](VbrickEmbedConfig.md#popupauth)
- [showFullWebcast](VbrickEmbedConfig.md#showfullwebcast)
- [startAt](VbrickEmbedConfig.md#startat)
- [timeoutSeconds](VbrickEmbedConfig.md#timeoutseconds)
- [token](VbrickEmbedConfig.md#token)
- [width](VbrickEmbedConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[accentColor](VbrickVideoEmbedConfig.md#accentcolor)

#### Defined in

[embed/VbrickEmbedConfig.ts:64](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L64)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[autoplay](VbrickVideoEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L39)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[baseUrl](VbrickWebcastEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:34](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/VbrickSDK.ts#L34)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[className](VbrickWebcastEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:11](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L11)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[forcedCaptions](VbrickVideoEmbedConfig.md#forcedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:46](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L46)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[height](VbrickWebcastEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L21)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideChapters](VbrickVideoEmbedConfig.md#hidechapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:41](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L41)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideFullscreen](VbrickVideoEmbedConfig.md#hidefullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L48)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideOverlayControls](VbrickVideoEmbedConfig.md#hideoverlaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:42](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L42)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hidePlayControls](VbrickVideoEmbedConfig.md#hideplaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:43](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L43)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideSettings](VbrickVideoEmbedConfig.md#hidesettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:47](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L47)

___

### hideSubtitles

• `Optional` **hideSubtitles**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideSubtitles](VbrickVideoEmbedConfig.md#hidesubtitles)

#### Defined in

[embed/VbrickEmbedConfig.ts:44](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L44)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[log](VbrickWebcastEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:44](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/VbrickSDK.ts#L44)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[logoUrl](VbrickVideoEmbedConfig.md#logourl)

#### Defined in

[embed/VbrickEmbedConfig.ts:59](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L59)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[playInLoop](VbrickVideoEmbedConfig.md#playinloop)

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L40)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[popupAuth](VbrickWebcastEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:26](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L26)

___

### showFullWebcast

• `Optional` **showFullWebcast**: `boolean`

Include Chat, QA and Polls widgets in embed (if configured)

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[showFullWebcast](VbrickWebcastEmbedConfig.md#showfullwebcast)

#### Defined in

[embed/VbrickEmbedConfig.ts:75](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L75)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[startAt](VbrickVideoEmbedConfig.md#startat)

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L54)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[timeoutSeconds](VbrickWebcastEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:31](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L31)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[token](VbrickWebcastEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:39](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/VbrickSDK.ts#L39)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[width](VbrickWebcastEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:16](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/VbrickEmbedConfig.ts#L16)
