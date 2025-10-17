[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / VbrickEmbedConfig

# Interface: VbrickEmbedConfig

Defined in: [embed/VbrickEmbedConfig.ts:214](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L214)

Options available when embedding a VOD/video or webcast

## Extends

- [`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md).[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md)

## Properties

### ~~accent?~~

> `optional` **accent**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:122](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L122)

#### Deprecated

- embed parameter name - alias of accentColor

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`accent`](../VOD/VbrickVideoEmbedConfig.md#accent)

***

### accentColor?

> `optional` **accentColor**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:119](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L119)

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`accentColor`](../VOD/VbrickVideoEmbedConfig.md#accentcolor)

***

### applyDefaultTheme?

> `optional` **applyDefaultTheme**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:91](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L91)

flag to override account theme to default theme.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`applyDefaultTheme`](../VOD/VbrickVideoEmbedConfig.md#applydefaulttheme)

***

### autoplay?

> `optional` **autoplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L44)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`autoplay`](../VOD/VbrickVideoEmbedConfig.md#autoplay)

***

### baseUrl

> **baseUrl**: `string`

Defined in: [VbrickSDK.ts:41](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L41)

URL for Rev

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`baseUrl`](../VOD/VbrickVideoEmbedConfig.md#baseurl)

***

### className?

> `optional` **className**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:15](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L15)

An optional class to be set on embeds.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`className`](../VOD/VbrickVideoEmbedConfig.md#classname)

***

### defaultSidebar?

> `optional` **defaultSidebar**: [`VideoPlaybackSidebarButton`](../VOD/VideoPlaybackSidebarButton.md)

Defined in: [embed/VbrickEmbedConfig.ts:81](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

provide the sidebar name to be opened by default when video loads.
showFullPlayer value needs to be true for this to work.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`defaultSidebar`](../VOD/VbrickVideoEmbedConfig.md#defaultsidebar)

***

### ~~enableFullRev?~~

> `optional` **enableFullRev**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:174](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L174)

#### Deprecated

- embed parameter

#### Inherited from

[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md).[`enableFullRev`](../Webcast/VbrickWebcastEmbedConfig.md#enablefullrev)

***

### ~~forceClosedCaptions?~~

> `optional` **forceClosedCaptions**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:124](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L124)

#### Deprecated

- embed parameter name - alias of forcedCaptions

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`forceClosedCaptions`](../VOD/VbrickVideoEmbedConfig.md#forceclosedcaptions)

***

### forcedCaptions?

> `optional` **forcedCaptions**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:68](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L68)

Use the Close Captions embedded in video stream as Subtitles

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`forcedCaptions`](../VOD/VbrickVideoEmbedConfig.md#forcedcaptions)

***

### height?

> `optional` **height**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:25](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L25)

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`height`](../VOD/VbrickVideoEmbedConfig.md#height)

***

### ~~hideAnalytics?~~

> `optional` **hideAnalytics**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:158](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L158)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideAnalytics`](../VOD/VbrickVideoEmbedConfig.md#hideanalytics)

***

### hideChapterImages?

> `optional` **hideChapterImages**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:63](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L63)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapterImages`](../VOD/VbrickVideoEmbedConfig.md#hidechapterimages)

***

### hideChapterMenu?

> `optional` **hideChapterMenu**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:62](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L62)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapterMenu`](../VOD/VbrickVideoEmbedConfig.md#hidechaptermenu)

***

### hideChapterNavigation?

> `optional` **hideChapterNavigation**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:61](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L61)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapterNavigation`](../VOD/VbrickVideoEmbedConfig.md#hidechapternavigation)

***

### hideChapters?

> `optional` **hideChapters**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:60](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapters`](../VOD/VbrickVideoEmbedConfig.md#hidechapters)

***

### ~~hideComments?~~

> `optional` **hideComments**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:149](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L149)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideComments`](../VOD/VbrickVideoEmbedConfig.md#hidecomments)

***

### hideFullscreen?

> `optional` **hideFullscreen**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:70](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L70)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideFullscreen`](../VOD/VbrickVideoEmbedConfig.md#hidefullscreen)

***

### ~~hideInfo?~~

> `optional` **hideInfo**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:147](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L147)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideInfo`](../VOD/VbrickVideoEmbedConfig.md#hideinfo)

***

### hideOverlayControls?

> `optional` **hideOverlayControls**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:64](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L64)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideOverlayControls`](../VOD/VbrickVideoEmbedConfig.md#hideoverlaycontrols)

***

### hidePlayControls?

> `optional` **hidePlayControls**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:65](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hidePlayControls`](../VOD/VbrickVideoEmbedConfig.md#hideplaycontrols)

***

### ~~hidePlaylist?~~

> `optional` **hidePlaylist**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:155](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L155)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hidePlaylist`](../VOD/VbrickVideoEmbedConfig.md#hideplaylist)

***

### ~~hidePulse?~~

> `optional` **hidePulse**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:151](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L151)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hidePulse`](../VOD/VbrickVideoEmbedConfig.md#hidepulse)

***

### ~~hideReview?~~

> `optional` **hideReview**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:153](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L153)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideReview`](../VOD/VbrickVideoEmbedConfig.md#hidereview)

***

### hideSettings?

> `optional` **hideSettings**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:69](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L69)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideSettings`](../VOD/VbrickVideoEmbedConfig.md#hidesettings)

***

### hideSubtitles?

> `optional` **hideSubtitles**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:66](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L66)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideSubtitles`](../VOD/VbrickVideoEmbedConfig.md#hidesubtitles)

***

### hideToolbar?

> `optional` **hideToolbar**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:194](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L194)

Only applicable when layout is 'slider'
Do not show bottom toolbar, only show the current video. This makes playlist functionality only possible through javascript API.

#### Inherited from

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md).[`hideToolbar`](../Playlist/VbrickPlaylistEmbedConfig.md#hidetoolbar)

***

### initialVolume?

> `optional` **initialVolume**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`initialVolume`](../VOD/VbrickVideoEmbedConfig.md#initialvolume)

***

### layout?

> `optional` **layout**: `"row"` \| `"grid"` \| `"slider"`

Defined in: [embed/VbrickEmbedConfig.ts:189](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L189)

Select layout of playlist. Options are:
- row (aka Filmstrip) - thumbnails of videos along bottom
- grid - grid of thumbnails. Not compatible with autoplay functionality
- slider - small prev/next buttons at bottom ov video player

#### Inherited from

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md).[`layout`](../Playlist/VbrickPlaylistEmbedConfig.md#layout)

***

### log?

> `optional` **log**: `boolean`

Defined in: [VbrickSDK.ts:51](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L51)

If true, sdk will log to console

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`log`](../VOD/VbrickVideoEmbedConfig.md#log)

***

### logoUrl?

> `optional` **logoUrl**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:114](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L114)

Branding Settings. Logo image URL

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`logoUrl`](../VOD/VbrickVideoEmbedConfig.md#logourl)

***

### ~~loopVideo?~~

> `optional` **loopVideo**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:126](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L126)

#### Deprecated

- embed parameter name - alias of playInLoop

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`loopVideo`](../VOD/VbrickVideoEmbedConfig.md#loopvideo)

***

### maxVideos?

> `optional` **maxVideos**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:204](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L204)

Only applicable when layout is 'grid'
Set the maximum number of videos to include in grid view

#### Inherited from

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md).[`maxVideos`](../Playlist/VbrickPlaylistEmbedConfig.md#maxvideos)

***

### mobileLayoutBreakPoint?

> `optional` **mobileLayoutBreakPoint**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:98](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L98)

In case of showFullPlayer = true, user can provide a mobile breakpoint size
so that player and sidebar will render nicely together.
if not provided then 991 is the default value for mobile layout.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`mobileLayoutBreakPoint`](../VOD/VbrickVideoEmbedConfig.md#mobilelayoutbreakpoint)

***

### ~~noCc?~~

> `optional` **noCc**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:128](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L128)

#### Deprecated

- embed parameter name - alias of hideSubtitles

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noCc`](../VOD/VbrickVideoEmbedConfig.md#nocc)

***

### ~~noCenterButtons?~~

> `optional` **noCenterButtons**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:130](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L130)

#### Deprecated

- embed parameter name - alias of hideOverlayControls

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noCenterButtons`](../VOD/VbrickVideoEmbedConfig.md#nocenterbuttons)

***

### ~~noChapterDisplay?~~

> `optional` **noChapterDisplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:142](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L142)

#### Deprecated

- embed parameter name - alias of hideChapterImages

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapterDisplay`](../VOD/VbrickVideoEmbedConfig.md#nochapterdisplay)

***

### ~~noChapterMenu?~~

> `optional` **noChapterMenu**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:144](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L144)

#### Deprecated

- embed parameter name - alias of hideChapterMenu

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapterMenu`](../VOD/VbrickVideoEmbedConfig.md#nochaptermenu)

***

### ~~noChapters?~~

> `optional` **noChapters**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:132](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L132)

#### Deprecated

- embed parameter name - alias of hideChapters

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapters`](../VOD/VbrickVideoEmbedConfig.md#nochapters)

***

### ~~noChapterSeek?~~

> `optional` **noChapterSeek**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:140](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L140)

#### Deprecated

- embed parameter name - alias of hideChapterNavigation

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapterSeek`](../VOD/VbrickVideoEmbedConfig.md#nochapterseek)

***

### ~~noFullscreen?~~

> `optional` **noFullscreen**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:134](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L134)

#### Deprecated

- embed parameter name - alias of hideFullscreen

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noFullscreen`](../VOD/VbrickVideoEmbedConfig.md#nofullscreen)

***

### noLocalNetworkAccess?

> `optional` **noLocalNetworkAccess**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:32](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L32)

do not add the 'local-network-access' Permissions-Policy iframe "allow" attribute.
This may block ECDN / User Location Services functionality from working properly.

#### Default

```ts
false
```

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noLocalNetworkAccess`](../VOD/VbrickVideoEmbedConfig.md#nolocalnetworkaccess)

***

### ~~noPlayBar?~~

> `optional` **noPlayBar**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:136](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L136)

#### Deprecated

- embed parameter name - alias of hidePlayControls

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noPlayBar`](../VOD/VbrickVideoEmbedConfig.md#noplaybar)

***

### ~~noSettings?~~

> `optional` **noSettings**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:138](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L138)

#### Deprecated

- embed parameter name - alias of hideSettings

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noSettings`](../VOD/VbrickVideoEmbedConfig.md#nosettings)

***

### playInLoop?

> `optional` **playInLoop**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:59](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L59)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`playInLoop`](../VOD/VbrickVideoEmbedConfig.md#playinloop)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:37](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L37)

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`popupAuth`](../VOD/VbrickVideoEmbedConfig.md#popupauth)

***

### showFullPlayer?

> `optional` **showFullPlayer**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:75](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L75)

shows video player with sidebar.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`showFullPlayer`](../VOD/VbrickVideoEmbedConfig.md#showfullplayer)

***

### showFullWebcast?

> `optional` **showFullWebcast**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:171](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L171)

Include Chat, QA and Polls widgets in embed (if configured)

#### Inherited from

[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md).[`showFullWebcast`](../Webcast/VbrickWebcastEmbedConfig.md#showfullwebcast)

***

### sidebarFilterQuery?

> `optional` **sidebarFilterQuery**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:87](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L87)

query to filter sidebar items. esp. use in pulse sidebar.
showFullPlayer = true and defaultSidebar should have a value to make it work.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`sidebarFilterQuery`](../VOD/VbrickVideoEmbedConfig.md#sidebarfilterquery)

***

### sidebarTabs?

> `optional` **sidebarTabs**: `Partial`\<`Record`\<`` `${VideoPlaybackSidebarButton}` ``, `boolean`\>\>

Defined in: [embed/VbrickEmbedConfig.ts:104](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L104)

In case of showFullPlayer = true, user can customize the sidebar tabs to include
If not provided or undefined then the default value for each tab is true

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`sidebarTabs`](../VOD/VbrickVideoEmbedConfig.md#sidebartabs)

***

### startAt?

> `optional` **startAt**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:109](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L109)

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`startAt`](../VOD/VbrickVideoEmbedConfig.md#startat)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:42](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L42)

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`timeoutSeconds`](../VOD/VbrickVideoEmbedConfig.md#timeoutseconds)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Defined in: [VbrickSDK.ts:46](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L46)

Token for authentication

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`token`](../VOD/VbrickVideoEmbedConfig.md#token)

***

### videosPerRow?

> `optional` **videosPerRow**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:199](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L199)

Only applicable when layout is 'grid'
Set the number of videos in each grid row (valid numbers are between 3 and 5)

#### Inherited from

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md).[`videosPerRow`](../Playlist/VbrickPlaylistEmbedConfig.md#videosperrow)

***

### width?

> `optional` **width**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:20](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L20)

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`width`](../VOD/VbrickVideoEmbedConfig.md#width)
