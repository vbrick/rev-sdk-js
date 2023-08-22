[@vbrick/rev-sdk](../README.md) / VbrickVideoEmbedConfig

# Interface: VbrickVideoEmbedConfig

Options available when embedding a VOD/video

## Hierarchy

- [`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md)

  ↳ **`VbrickVideoEmbedConfig`**

  ↳↳ [`VbrickPlaylistEmbedConfig`](VbrickPlaylistEmbedConfig.md)

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
- [initialVolume](VbrickVideoEmbedConfig.md#initialvolume)
- [log](VbrickVideoEmbedConfig.md#log)
- [logoUrl](VbrickVideoEmbedConfig.md#logourl)
- [loopVideo](VbrickVideoEmbedConfig.md#loopvideo)
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

- embed parameter name - alias of accentColor

#### Defined in

[embed/VbrickEmbedConfig.ts:73](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L73)

___

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:70](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L70)

___

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

### forceClosedCaptions

• `Optional` **forceClosedCaptions**: `string`

**`Deprecated`**

- embed parameter name - alias of forcedCaptions

#### Defined in

[embed/VbrickEmbedConfig.ts:75](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L75)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[height](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:22](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L22)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L48)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:55](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L55)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:49](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L50)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

___

### hideSubtitles

• `Optional` **hideSubtitles**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L51)

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

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:65](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

___

### loopVideo

• `Optional` **loopVideo**: `string`

**`Deprecated`**

- embed parameter name - alias of playInLoop

#### Defined in

[embed/VbrickEmbedConfig.ts:77](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L77)

___

### noCc

• `Optional` **noCc**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideSubtitles

#### Defined in

[embed/VbrickEmbedConfig.ts:79](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L79)

___

### noCenterButtons

• `Optional` **noCenterButtons**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideOverlayControls

#### Defined in

[embed/VbrickEmbedConfig.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

___

### noChapters

• `Optional` **noChapters**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideChapters

#### Defined in

[embed/VbrickEmbedConfig.ts:83](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L83)

___

### noFullscreen

• `Optional` **noFullscreen**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideFullscreen

#### Defined in

[embed/VbrickEmbedConfig.ts:85](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L85)

___

### noPlayBar

• `Optional` **noPlayBar**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hidePlayControls

#### Defined in

[embed/VbrickEmbedConfig.ts:87](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L87)

___

### noSettings

• `Optional` **noSettings**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideSettings

#### Defined in

[embed/VbrickEmbedConfig.ts:89](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L89)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:47](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L47)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickBaseEmbedConfig](VbrickBaseEmbedConfig.md).[popupAuth](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:27](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L27)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:60](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

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
