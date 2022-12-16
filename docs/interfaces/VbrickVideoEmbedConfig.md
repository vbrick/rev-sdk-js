[@vbrick/rev-sdk](../README.md) / VbrickVideoEmbedConfig

# Interface: VbrickVideoEmbedConfig

Options available when embedding a VOD/video

## Hierarchy

- [`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md)

  ↳ **`VbrickVideoEmbedConfig`**

  ↳↳ [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Table of contents

### Properties

- [accent](VbrickVideoEmbedConfig.md#accent)
- [accentColor](VbrickVideoEmbedConfig.md#accentcolor)
- [autoplay](VbrickVideoEmbedConfig.md#autoplay)
- [baseUrl](VbrickVideoEmbedConfig.md#baseurl)
- [className](VbrickVideoEmbedConfig.md#classname)
- [forceClosedCaptions](VbrickVideoEmbedConfig.md#forceclosedcaptions)
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
- [loopVideo](VbrickVideoEmbedConfig.md#loopvideo)
- [muted](VbrickVideoEmbedConfig.md#muted)
- [noCc](VbrickVideoEmbedConfig.md#nocc)
- [noCenterButtons](VbrickVideoEmbedConfig.md#nocenterbuttons)
- [noChapters](VbrickVideoEmbedConfig.md#nochapters)
- [noFullscreen](VbrickVideoEmbedConfig.md#nofullscreen)
- [noPlayBar](VbrickVideoEmbedConfig.md#noplaybar)
- [noSettings](VbrickVideoEmbedConfig.md#nosettings)
- [playInLoop](VbrickVideoEmbedConfig.md#playinloop)
- [popupAuth](VbrickVideoEmbedConfig.md#popupauth)
- [startAt](VbrickVideoEmbedConfig.md#startat)
- [timeoutSeconds](VbrickVideoEmbedConfig.md#timeoutseconds)
- [token](VbrickVideoEmbedConfig.md#token)
- [width](VbrickVideoEmbedConfig.md#width)

## Properties

### accent

• `Optional` **accent**: `string`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:72](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L72)

___

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:69](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L69)

___

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

### forceClosedCaptions

• `Optional` **forceClosedCaptions**: `string`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:74](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L74)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Defined in

[embed/VbrickEmbedConfig.ts:52](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L52)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[height](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L21)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:47](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L47)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L48)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:49](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

___

### hideSubtitles

• `Optional` **hideSubtitles**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L50)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[log](VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:64](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L64)

___

### loopVideo

• `Optional` **loopVideo**: `string`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:76](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L76)

___

### muted

• `Optional` **muted**: `boolean`

set the volume to 0 upon initial load

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[muted](VbrickBaseEmbedConfig.md#muted)

#### Defined in

[embed/VbrickEmbedConfig.ts:38](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L38)

___

### noCc

• `Optional` **noCc**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:78](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L78)

___

### noCenterButtons

• `Optional` **noCenterButtons**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:80](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L80)

___

### noChapters

• `Optional` **noChapters**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:82](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L82)

___

### noFullscreen

• `Optional` **noFullscreen**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:84](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L84)

___

### noPlayBar

• `Optional` **noPlayBar**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:86](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L86)

___

### noSettings

• `Optional` **noSettings**: `boolean`

**`Deprecated`**

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:88](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L88)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:46](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L46)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[popupAuth](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:26](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L26)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:59](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L59)

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
