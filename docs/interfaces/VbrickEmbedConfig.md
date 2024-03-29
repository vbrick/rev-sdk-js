[@vbrick/rev-sdk](../README.md) / VbrickEmbedConfig

# Interface: VbrickEmbedConfig

Options available when embedding a VOD/video or webcast

## Hierarchy

- [`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md)

- [`VbrickWebcastEmbedConfig`](VbrickWebcastEmbedConfig.md)

- [`VbrickPlaylistEmbedConfig`](VbrickPlaylistEmbedConfig.md)

  ↳ **`VbrickEmbedConfig`**

## Table of contents

### Properties

- [accent](VbrickEmbedConfig.md#accent)
- [accentColor](VbrickEmbedConfig.md#accentcolor)
- [autoplay](VbrickEmbedConfig.md#autoplay)
- [baseUrl](VbrickEmbedConfig.md#baseurl)
- [className](VbrickEmbedConfig.md#classname)
- [enableFullRev](VbrickEmbedConfig.md#enablefullrev)
- [forceClosedCaptions](VbrickEmbedConfig.md#forceclosedcaptions)
- [forcedCaptions](VbrickEmbedConfig.md#forcedcaptions)
- [height](VbrickEmbedConfig.md#height)
- [hideChapters](VbrickEmbedConfig.md#hidechapters)
- [hideFullscreen](VbrickEmbedConfig.md#hidefullscreen)
- [hideOverlayControls](VbrickEmbedConfig.md#hideoverlaycontrols)
- [hidePlayControls](VbrickEmbedConfig.md#hideplaycontrols)
- [hideSettings](VbrickEmbedConfig.md#hidesettings)
- [hideSubtitles](VbrickEmbedConfig.md#hidesubtitles)
- [hideToolbar](VbrickEmbedConfig.md#hidetoolbar)
- [initialVolume](VbrickEmbedConfig.md#initialvolume)
- [layout](VbrickEmbedConfig.md#layout)
- [log](VbrickEmbedConfig.md#log)
- [logoUrl](VbrickEmbedConfig.md#logourl)
- [loopVideo](VbrickEmbedConfig.md#loopvideo)
- [maxVideos](VbrickEmbedConfig.md#maxvideos)
- [noCc](VbrickEmbedConfig.md#nocc)
- [noCenterButtons](VbrickEmbedConfig.md#nocenterbuttons)
- [noChapters](VbrickEmbedConfig.md#nochapters)
- [noFullscreen](VbrickEmbedConfig.md#nofullscreen)
- [noPlayBar](VbrickEmbedConfig.md#noplaybar)
- [noSettings](VbrickEmbedConfig.md#nosettings)
- [playInLoop](VbrickEmbedConfig.md#playinloop)
- [popupAuth](VbrickEmbedConfig.md#popupauth)
- [showFullWebcast](VbrickEmbedConfig.md#showfullwebcast)
- [startAt](VbrickEmbedConfig.md#startat)
- [timeoutSeconds](VbrickEmbedConfig.md#timeoutseconds)
- [token](VbrickEmbedConfig.md#token)
- [videosPerRow](VbrickEmbedConfig.md#videosperrow)
- [width](VbrickEmbedConfig.md#width)

## Properties

### accent

• `Optional` **accent**: `string`

**`Deprecated`**

- embed parameter name - alias of accentColor

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[accent](VbrickPlaylistEmbedConfig.md#accent)

#### Defined in

[embed/VbrickEmbedConfig.ts:73](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L73)

___

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[accentColor](VbrickPlaylistEmbedConfig.md#accentcolor)

#### Defined in

[embed/VbrickEmbedConfig.ts:70](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L70)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[autoplay](VbrickPlaylistEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:34](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L34)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[baseUrl](VbrickPlaylistEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[className](VbrickPlaylistEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:12](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L12)

___

### enableFullRev

• `Optional` **enableFullRev**: `boolean`

**`Deprecated`**

- embed parameter

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[enableFullRev](VbrickWebcastEmbedConfig.md#enablefullrev)

#### Defined in

[embed/VbrickEmbedConfig.ts:103](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L103)

___

### forceClosedCaptions

• `Optional` **forceClosedCaptions**: `string`

**`Deprecated`**

- embed parameter name - alias of forcedCaptions

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[forceClosedCaptions](VbrickPlaylistEmbedConfig.md#forceclosedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:75](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L75)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[forcedCaptions](VbrickPlaylistEmbedConfig.md#forcedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[height](VbrickPlaylistEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:22](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L22)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hideChapters](VbrickPlaylistEmbedConfig.md#hidechapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L48)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hideFullscreen](VbrickPlaylistEmbedConfig.md#hidefullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:55](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L55)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hideOverlayControls](VbrickPlaylistEmbedConfig.md#hideoverlaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:49](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hidePlayControls](VbrickPlaylistEmbedConfig.md#hideplaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L50)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hideSettings](VbrickPlaylistEmbedConfig.md#hidesettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

___

### hideSubtitles

• `Optional` **hideSubtitles**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hideSubtitles](VbrickPlaylistEmbedConfig.md#hidesubtitles)

#### Defined in

[embed/VbrickEmbedConfig.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L51)

___

### hideToolbar

• `Optional` **hideToolbar**: `boolean`

Only applicable when layout is 'slider'
Do not show bottom toolbar, only show the current video. This makes playlist functionality only possible through javascript API.

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[hideToolbar](VbrickPlaylistEmbedConfig.md#hidetoolbar)

#### Defined in

[embed/VbrickEmbedConfig.ts:121](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L121)

___

### initialVolume

• `Optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[initialVolume](VbrickPlaylistEmbedConfig.md#initialvolume)

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L39)

___

### layout

• `Optional` **layout**: ``"row"`` \| ``"grid"`` \| ``"slider"``

Select layout of playlist. Options are:
- row (aka Filmstrip) - thumbnails of videos along bottom
- grid - grid of thumbnails. Not compatible with autoplay functionality
- slider - small prev/next buttons at bottom ov video player

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[layout](VbrickPlaylistEmbedConfig.md#layout)

#### Defined in

[embed/VbrickEmbedConfig.ts:116](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L116)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[log](VbrickPlaylistEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[logoUrl](VbrickPlaylistEmbedConfig.md#logourl)

#### Defined in

[embed/VbrickEmbedConfig.ts:65](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

___

### loopVideo

• `Optional` **loopVideo**: `string`

**`Deprecated`**

- embed parameter name - alias of playInLoop

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[loopVideo](VbrickPlaylistEmbedConfig.md#loopvideo)

#### Defined in

[embed/VbrickEmbedConfig.ts:77](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L77)

___

### maxVideos

• `Optional` **maxVideos**: `number`

Only applicable when layout is 'grid'
Set the maximum number of videos to include in grid view

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[maxVideos](VbrickPlaylistEmbedConfig.md#maxvideos)

#### Defined in

[embed/VbrickEmbedConfig.ts:131](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L131)

___

### noCc

• `Optional` **noCc**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideSubtitles

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[noCc](VbrickPlaylistEmbedConfig.md#nocc)

#### Defined in

[embed/VbrickEmbedConfig.ts:79](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L79)

___

### noCenterButtons

• `Optional` **noCenterButtons**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideOverlayControls

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[noCenterButtons](VbrickPlaylistEmbedConfig.md#nocenterbuttons)

#### Defined in

[embed/VbrickEmbedConfig.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

___

### noChapters

• `Optional` **noChapters**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideChapters

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[noChapters](VbrickPlaylistEmbedConfig.md#nochapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:83](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L83)

___

### noFullscreen

• `Optional` **noFullscreen**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideFullscreen

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[noFullscreen](VbrickPlaylistEmbedConfig.md#nofullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:85](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L85)

___

### noPlayBar

• `Optional` **noPlayBar**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hidePlayControls

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[noPlayBar](VbrickPlaylistEmbedConfig.md#noplaybar)

#### Defined in

[embed/VbrickEmbedConfig.ts:87](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L87)

___

### noSettings

• `Optional` **noSettings**: `boolean`

**`Deprecated`**

- embed parameter name - alias of hideSettings

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[noSettings](VbrickPlaylistEmbedConfig.md#nosettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:89](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L89)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[playInLoop](VbrickPlaylistEmbedConfig.md#playinloop)

#### Defined in

[embed/VbrickEmbedConfig.ts:47](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L47)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[popupAuth](VbrickPlaylistEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:27](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L27)

___

### showFullWebcast

• `Optional` **showFullWebcast**: `boolean`

Include Chat, QA and Polls widgets in embed (if configured)

#### Inherited from

[VbrickWebcastEmbedConfig](VbrickWebcastEmbedConfig.md).[showFullWebcast](VbrickWebcastEmbedConfig.md#showfullwebcast)

#### Defined in

[embed/VbrickEmbedConfig.ts:100](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L100)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[startAt](VbrickPlaylistEmbedConfig.md#startat)

#### Defined in

[embed/VbrickEmbedConfig.ts:60](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

___

### timeoutSeconds

• `Optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[timeoutSeconds](VbrickPlaylistEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:32](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L32)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[token](VbrickPlaylistEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

___

### videosPerRow

• `Optional` **videosPerRow**: `number`

Only applicable when layout is 'grid'
Set the number of videos in each grid row (valid numbers are between 3 and 5)

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[videosPerRow](VbrickPlaylistEmbedConfig.md#videosperrow)

#### Defined in

[embed/VbrickEmbedConfig.ts:126](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L126)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[VbrickPlaylistEmbedConfig](VbrickPlaylistEmbedConfig.md).[width](VbrickPlaylistEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:17](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L17)
