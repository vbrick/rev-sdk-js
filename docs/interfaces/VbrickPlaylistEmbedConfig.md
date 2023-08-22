[@vbrick/rev-sdk](../README.md) / VbrickPlaylistEmbedConfig

# Interface: VbrickPlaylistEmbedConfig

## Hierarchy

- [`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md)

  ↳ **`VbrickPlaylistEmbedConfig`**

  ↳↳ [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Table of contents

### Properties

- [accent](VbrickPlaylistEmbedConfig.md#accent)
- [accentColor](VbrickPlaylistEmbedConfig.md#accentcolor)
- [autoplay](VbrickPlaylistEmbedConfig.md#autoplay)
- [baseUrl](VbrickPlaylistEmbedConfig.md#baseurl)
- [className](VbrickPlaylistEmbedConfig.md#classname)
- [forceClosedCaptions](VbrickPlaylistEmbedConfig.md#forceclosedcaptions)
- [forcedCaptions](VbrickPlaylistEmbedConfig.md#forcedcaptions)
- [height](VbrickPlaylistEmbedConfig.md#height)
- [hideChapters](VbrickPlaylistEmbedConfig.md#hidechapters)
- [hideFullscreen](VbrickPlaylistEmbedConfig.md#hidefullscreen)
- [hideOverlayControls](VbrickPlaylistEmbedConfig.md#hideoverlaycontrols)
- [hidePlayControls](VbrickPlaylistEmbedConfig.md#hideplaycontrols)
- [hideSettings](VbrickPlaylistEmbedConfig.md#hidesettings)
- [hideSubtitles](VbrickPlaylistEmbedConfig.md#hidesubtitles)
- [hideToolbar](VbrickPlaylistEmbedConfig.md#hidetoolbar)
- [initialVolume](VbrickPlaylistEmbedConfig.md#initialvolume)
- [layout](VbrickPlaylistEmbedConfig.md#layout)
- [log](VbrickPlaylistEmbedConfig.md#log)
- [logoUrl](VbrickPlaylistEmbedConfig.md#logourl)
- [loopVideo](VbrickPlaylistEmbedConfig.md#loopvideo)
- [maxVideos](VbrickPlaylistEmbedConfig.md#maxvideos)
- [noCc](VbrickPlaylistEmbedConfig.md#nocc)
- [noCenterButtons](VbrickPlaylistEmbedConfig.md#nocenterbuttons)
- [noChapters](VbrickPlaylistEmbedConfig.md#nochapters)
- [noFullscreen](VbrickPlaylistEmbedConfig.md#nofullscreen)
- [noPlayBar](VbrickPlaylistEmbedConfig.md#noplaybar)
- [noSettings](VbrickPlaylistEmbedConfig.md#nosettings)
- [playInLoop](VbrickPlaylistEmbedConfig.md#playinloop)
- [popupAuth](VbrickPlaylistEmbedConfig.md#popupauth)
- [startAt](VbrickPlaylistEmbedConfig.md#startat)
- [timeoutSeconds](VbrickPlaylistEmbedConfig.md#timeoutseconds)
- [token](VbrickPlaylistEmbedConfig.md#token)
- [videosPerRow](VbrickPlaylistEmbedConfig.md#videosperrow)
- [width](VbrickPlaylistEmbedConfig.md#width)

## Properties

### accent

• `Optional` **accent**: `string`

**`Deprecated`**

- embed parameter name - alias of accentColor

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[accent](VbrickVideoEmbedConfig.md#accent)

#### Defined in

[embed/VbrickEmbedConfig.ts:73](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L73)

___

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[accentColor](VbrickVideoEmbedConfig.md#accentcolor)

#### Defined in

[embed/VbrickEmbedConfig.ts:70](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L70)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[autoplay](VbrickVideoEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:34](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L34)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[baseUrl](VbrickVideoEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[className](VbrickVideoEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:12](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L12)

___

### forceClosedCaptions

• `Optional` **forceClosedCaptions**: `string`

**`Deprecated`**

- embed parameter name - alias of forcedCaptions

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[forceClosedCaptions](VbrickVideoEmbedConfig.md#forceclosedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:75](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L75)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[forcedCaptions](VbrickVideoEmbedConfig.md#forcedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[height](VbrickVideoEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:22](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L22)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideChapters](VbrickVideoEmbedConfig.md#hidechapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L48)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideFullscreen](VbrickVideoEmbedConfig.md#hidefullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:55](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L55)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideOverlayControls](VbrickVideoEmbedConfig.md#hideoverlaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:49](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hidePlayControls](VbrickVideoEmbedConfig.md#hideplaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L50)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideSettings](VbrickVideoEmbedConfig.md#hidesettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

___

### hideSubtitles

• `Optional` **hideSubtitles**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[hideSubtitles](VbrickVideoEmbedConfig.md#hidesubtitles)

#### Defined in

[embed/VbrickEmbedConfig.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L51)

___

### hideToolbar

• `Optional` **hideToolbar**: `boolean`

Only applicable when layout is 'slider'
Do not show bottom toolbar, only show the current video. This makes playlist functionality only possible through javascript API.

#### Defined in

[embed/VbrickEmbedConfig.ts:121](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L121)

___

### initialVolume

• `Optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[initialVolume](VbrickVideoEmbedConfig.md#initialvolume)

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L39)

___

### layout

• `Optional` **layout**: ``"row"`` \| ``"grid"`` \| ``"slider"``

Select layout of playlist. Options are:
- row (aka Filmstrip) - thumbnails of videos along bottom
- grid - grid of thumbnails. Not compatible with autoplay functionality
- slider - small prev/next buttons at bottom ov video player

#### Defined in

[embed/VbrickEmbedConfig.ts:116](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L116)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[log](VbrickVideoEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[logoUrl](VbrickVideoEmbedConfig.md#logourl)

#### Defined in

[embed/VbrickEmbedConfig.ts:65](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

___

### loopVideo

• `Optional` **loopVideo**: `string`

**`Deprecated`**

- embed parameter name - alias of playInLoop

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[loopVideo](VbrickVideoEmbedConfig.md#loopvideo)

#### Defined in

[embed/VbrickEmbedConfig.ts:77](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L77)

___

### maxVideos

• `Optional` **maxVideos**: `number`

Only applicable when layout is 'grid'
Set the maximum number of videos to include in grid view

#### Defined in

[embed/VbrickEmbedConfig.ts:131](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L131)

___

### noCc

• `Optional` **noCc**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideSubtitles

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[noCc](VbrickVideoEmbedConfig.md#nocc)

#### Defined in

[embed/VbrickEmbedConfig.ts:79](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L79)

___

### noCenterButtons

• `Optional` **noCenterButtons**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideOverlayControls

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[noCenterButtons](VbrickVideoEmbedConfig.md#nocenterbuttons)

#### Defined in

[embed/VbrickEmbedConfig.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

___

### noChapters

• `Optional` **noChapters**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideChapters

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[noChapters](VbrickVideoEmbedConfig.md#nochapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:83](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L83)

___

### noFullscreen

• `Optional` **noFullscreen**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideFullscreen

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[noFullscreen](VbrickVideoEmbedConfig.md#nofullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:85](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L85)

___

### noPlayBar

• `Optional` **noPlayBar**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hidePlayControls

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[noPlayBar](VbrickVideoEmbedConfig.md#noplaybar)

#### Defined in

[embed/VbrickEmbedConfig.ts:87](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L87)

___

### noSettings

• `Optional` **noSettings**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideSettings

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[noSettings](VbrickVideoEmbedConfig.md#nosettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:89](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L89)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[playInLoop](VbrickVideoEmbedConfig.md#playinloop)

#### Defined in

[embed/VbrickEmbedConfig.ts:47](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L47)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[popupAuth](VbrickVideoEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:27](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L27)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[startAt](VbrickVideoEmbedConfig.md#startat)

#### Defined in

[embed/VbrickEmbedConfig.ts:60](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[timeoutSeconds](VbrickVideoEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:32](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L32)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[token](VbrickVideoEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

___

### videosPerRow

• `Optional` **videosPerRow**: `number`

Only applicable when layout is 'grid'
Set the number of videos in each grid row (valid numbers are between 3 and 5)

#### Defined in

[embed/VbrickEmbedConfig.ts:126](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L126)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[VbrickVideoEmbedConfig](VbrickVideoEmbedConfig.md).[width](VbrickVideoEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:17](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L17)
