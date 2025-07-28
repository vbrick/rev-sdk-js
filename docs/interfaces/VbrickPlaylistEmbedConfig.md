[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / VbrickPlaylistEmbedConfig

# Interface: VbrickPlaylistEmbedConfig

## Extends

- [`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md)

## Extended by

- [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Properties

### ~~accent?~~

> `optional` **accent**: `string`

#### Deprecated

- embed parameter name - alias of accentColor

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`accent`](VbrickVideoEmbedConfig.md#accent)

#### Defined in

[embed/VbrickEmbedConfig.ts:112](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L112)

***

### accentColor?

> `optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`accentColor`](VbrickVideoEmbedConfig.md#accentcolor)

#### Defined in

[embed/VbrickEmbedConfig.ts:109](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L109)

***

### applyDefaultTheme?

> `optional` **applyDefaultTheme**: `boolean`

flag to override account theme to default theme.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`applyDefaultTheme`](VbrickVideoEmbedConfig.md#applydefaulttheme)

#### Defined in

[embed/VbrickEmbedConfig.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

***

### autoplay?

> `optional` **autoplay**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`autoplay`](VbrickVideoEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L35)

***

### baseUrl

> **baseUrl**: `string`

URL for Rev

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`baseUrl`](VbrickVideoEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

***

### className?

> `optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`className`](VbrickVideoEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:13](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L13)

***

### defaultSidebar?

> `optional` **defaultSidebar**: [`VideoPlaybackSidebarButton`](../enumerations/VideoPlaybackSidebarButton.md)

provide the sidebar name to be opened by default when video loads.
showFullPlayer value needs to be true for this to work.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`defaultSidebar`](VbrickVideoEmbedConfig.md#defaultsidebar)

#### Defined in

[embed/VbrickEmbedConfig.ts:71](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L71)

***

### ~~forceClosedCaptions?~~

> `optional` **forceClosedCaptions**: `string`

#### Deprecated

- embed parameter name - alias of forcedCaptions

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`forceClosedCaptions`](VbrickVideoEmbedConfig.md#forceclosedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:114](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L114)

***

### forcedCaptions?

> `optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`forcedCaptions`](VbrickVideoEmbedConfig.md#forcedcaptions)

#### Defined in

[embed/VbrickEmbedConfig.ts:58](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L58)

***

### height?

> `optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`height`](VbrickVideoEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:23](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L23)

***

### ~~hideAnalytics?~~

> `optional` **hideAnalytics**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideAnalytics`](VbrickVideoEmbedConfig.md#hideanalytics)

#### Defined in

[embed/VbrickEmbedConfig.ts:148](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L148)

***

### hideChapterImages?

> `optional` **hideChapterImages**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideChapterImages`](VbrickVideoEmbedConfig.md#hidechapterimages)

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

***

### hideChapterMenu?

> `optional` **hideChapterMenu**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideChapterMenu`](VbrickVideoEmbedConfig.md#hidechaptermenu)

#### Defined in

[embed/VbrickEmbedConfig.ts:52](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L52)

***

### hideChapterNavigation?

> `optional` **hideChapterNavigation**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideChapterNavigation`](VbrickVideoEmbedConfig.md#hidechapternavigation)

#### Defined in

[embed/VbrickEmbedConfig.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L51)

***

### hideChapters?

> `optional` **hideChapters**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideChapters`](VbrickVideoEmbedConfig.md#hidechapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:49](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

***

### hideChapterSeek?

> `optional` **hideChapterSeek**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideChapterSeek`](VbrickVideoEmbedConfig.md#hidechapterseek)

#### Defined in

[embed/VbrickEmbedConfig.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L50)

***

### ~~hideComments?~~

> `optional` **hideComments**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideComments`](VbrickVideoEmbedConfig.md#hidecomments)

#### Defined in

[embed/VbrickEmbedConfig.ts:139](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L139)

***

### hideFullscreen?

> `optional` **hideFullscreen**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideFullscreen`](VbrickVideoEmbedConfig.md#hidefullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:60](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

***

### ~~hideInfo?~~

> `optional` **hideInfo**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideInfo`](VbrickVideoEmbedConfig.md#hideinfo)

#### Defined in

[embed/VbrickEmbedConfig.ts:137](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L137)

***

### hideOverlayControls?

> `optional` **hideOverlayControls**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideOverlayControls`](VbrickVideoEmbedConfig.md#hideoverlaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

***

### hidePlayControls?

> `optional` **hidePlayControls**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hidePlayControls`](VbrickVideoEmbedConfig.md#hideplaycontrols)

#### Defined in

[embed/VbrickEmbedConfig.ts:55](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L55)

***

### ~~hidePlaylist?~~

> `optional` **hidePlaylist**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hidePlaylist`](VbrickVideoEmbedConfig.md#hideplaylist)

#### Defined in

[embed/VbrickEmbedConfig.ts:145](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L145)

***

### ~~hidePulse?~~

> `optional` **hidePulse**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hidePulse`](VbrickVideoEmbedConfig.md#hidepulse)

#### Defined in

[embed/VbrickEmbedConfig.ts:141](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L141)

***

### ~~hideReview?~~

> `optional` **hideReview**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideReview`](VbrickVideoEmbedConfig.md#hidereview)

#### Defined in

[embed/VbrickEmbedConfig.ts:143](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L143)

***

### hideSettings?

> `optional` **hideSettings**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideSettings`](VbrickVideoEmbedConfig.md#hidesettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:59](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L59)

***

### hideSubtitles?

> `optional` **hideSubtitles**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`hideSubtitles`](VbrickVideoEmbedConfig.md#hidesubtitles)

#### Defined in

[embed/VbrickEmbedConfig.ts:56](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L56)

***

### hideToolbar?

> `optional` **hideToolbar**: `boolean`

Only applicable when layout is 'slider'
Do not show bottom toolbar, only show the current video. This makes playlist functionality only possible through javascript API.

#### Defined in

[embed/VbrickEmbedConfig.ts:180](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L180)

***

### initialVolume?

> `optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`initialVolume`](VbrickVideoEmbedConfig.md#initialvolume)

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L40)

***

### layout?

> `optional` **layout**: `"row"` \| `"grid"` \| `"slider"`

Select layout of playlist. Options are:
- row (aka Filmstrip) - thumbnails of videos along bottom
- grid - grid of thumbnails. Not compatible with autoplay functionality
- slider - small prev/next buttons at bottom ov video player

#### Defined in

[embed/VbrickEmbedConfig.ts:175](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L175)

***

### log?

> `optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`log`](VbrickVideoEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

***

### logoUrl?

> `optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`logoUrl`](VbrickVideoEmbedConfig.md#logourl)

#### Defined in

[embed/VbrickEmbedConfig.ts:104](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L104)

***

### ~~loopVideo?~~

> `optional` **loopVideo**: `string`

#### Deprecated

- embed parameter name - alias of playInLoop

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`loopVideo`](VbrickVideoEmbedConfig.md#loopvideo)

#### Defined in

[embed/VbrickEmbedConfig.ts:116](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L116)

***

### maxVideos?

> `optional` **maxVideos**: `number`

Only applicable when layout is 'grid'
Set the maximum number of videos to include in grid view

#### Defined in

[embed/VbrickEmbedConfig.ts:190](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L190)

***

### mobileLayoutBreakPoint?

> `optional` **mobileLayoutBreakPoint**: `number`

In case of showFullPlayer = true, user can provide a mobile breakpoint size
so that player and sidebar will render nicely together.
if not provided then 991 is the default value for mobile layout.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`mobileLayoutBreakPoint`](VbrickVideoEmbedConfig.md#mobilelayoutbreakpoint)

#### Defined in

[embed/VbrickEmbedConfig.ts:88](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L88)

***

### ~~noCc?~~

> `optional` **noCc**: `boolean`

#### Deprecated

- embed parameter name - alias of hideSubtitles

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noCc`](VbrickVideoEmbedConfig.md#nocc)

#### Defined in

[embed/VbrickEmbedConfig.ts:118](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L118)

***

### ~~noCenterButtons?~~

> `optional` **noCenterButtons**: `boolean`

#### Deprecated

- embed parameter name - alias of hideOverlayControls

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noCenterButtons`](VbrickVideoEmbedConfig.md#nocenterbuttons)

#### Defined in

[embed/VbrickEmbedConfig.ts:120](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L120)

***

### ~~noChapterDisplay?~~

> `optional` **noChapterDisplay**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapterImages

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noChapterDisplay`](VbrickVideoEmbedConfig.md#nochapterdisplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:132](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L132)

***

### ~~noChapterMenu?~~

> `optional` **noChapterMenu**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapterMenu

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noChapterMenu`](VbrickVideoEmbedConfig.md#nochaptermenu)

#### Defined in

[embed/VbrickEmbedConfig.ts:134](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L134)

***

### ~~noChapters?~~

> `optional` **noChapters**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapters

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noChapters`](VbrickVideoEmbedConfig.md#nochapters)

#### Defined in

[embed/VbrickEmbedConfig.ts:122](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L122)

***

### ~~noChapterSeek?~~

> `optional` **noChapterSeek**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapterNavigation

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noChapterSeek`](VbrickVideoEmbedConfig.md#nochapterseek)

#### Defined in

[embed/VbrickEmbedConfig.ts:130](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L130)

***

### ~~noFullscreen?~~

> `optional` **noFullscreen**: `boolean`

#### Deprecated

- embed parameter name - alias of hideFullscreen

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noFullscreen`](VbrickVideoEmbedConfig.md#nofullscreen)

#### Defined in

[embed/VbrickEmbedConfig.ts:124](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L124)

***

### ~~noPlayBar?~~

> `optional` **noPlayBar**: `boolean`

#### Deprecated

- embed parameter name - alias of hidePlayControls

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noPlayBar`](VbrickVideoEmbedConfig.md#noplaybar)

#### Defined in

[embed/VbrickEmbedConfig.ts:126](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L126)

***

### ~~noSettings?~~

> `optional` **noSettings**: `boolean`

#### Deprecated

- embed parameter name - alias of hideSettings

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`noSettings`](VbrickVideoEmbedConfig.md#nosettings)

#### Defined in

[embed/VbrickEmbedConfig.ts:128](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L128)

***

### playInLoop?

> `optional` **playInLoop**: `boolean`

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`playInLoop`](VbrickVideoEmbedConfig.md#playinloop)

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L48)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`popupAuth`](VbrickVideoEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:28](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L28)

***

### showFullPlayer?

> `optional` **showFullPlayer**: `boolean`

shows video player with sidebar.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`showFullPlayer`](VbrickVideoEmbedConfig.md#showfullplayer)

#### Defined in

[embed/VbrickEmbedConfig.ts:65](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

***

### sidebarFilterQuery?

> `optional` **sidebarFilterQuery**: `string`

query to filter sidebar items. esp. use in pulse sidebar.
showFullPlayer = true and defaultSidebar should have a value to make it work.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`sidebarFilterQuery`](VbrickVideoEmbedConfig.md#sidebarfilterquery)

#### Defined in

[embed/VbrickEmbedConfig.ts:77](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L77)

***

### sidebarTabs?

> `optional` **sidebarTabs**: `Partial`\<`Record`\<`"ai"` \| `"chapters"` \| `"comments"` \| `"info"` \| `"playlist"` \| `"pulse"` \| `"reports"` \| `"review"` \| `"share"`, `boolean`\>\>

In case of showFullPlayer = true, user can customize the sidebar tabs to include
If not provided or undefined then the default value for each tab is true

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`sidebarTabs`](VbrickVideoEmbedConfig.md#sidebartabs)

#### Defined in

[embed/VbrickEmbedConfig.ts:94](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L94)

***

### startAt?

> `optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`startAt`](VbrickVideoEmbedConfig.md#startat)

#### Defined in

[embed/VbrickEmbedConfig.ts:99](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L99)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`timeoutSeconds`](VbrickVideoEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L33)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`token`](VbrickVideoEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

***

### videosPerRow?

> `optional` **videosPerRow**: `number`

Only applicable when layout is 'grid'
Set the number of videos in each grid row (valid numbers are between 3 and 5)

#### Defined in

[embed/VbrickEmbedConfig.ts:185](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L185)

***

### width?

> `optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md).[`width`](VbrickVideoEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:18](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L18)
