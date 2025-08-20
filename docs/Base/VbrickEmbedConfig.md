[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / VbrickEmbedConfig

# Interface: VbrickEmbedConfig

Defined in: [embed/VbrickEmbedConfig.ts:207](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L207)

Options available when embedding a VOD/video or webcast

## Extends

- [`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md).[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md)

## Properties

### ~~accent?~~

> `optional` **accent**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:115](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L115)

#### Deprecated

- embed parameter name - alias of accentColor

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`accent`](../VOD/VbrickVideoEmbedConfig.md#accent)

***

### accentColor?

> `optional` **accentColor**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:112](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L112)

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`accentColor`](../VOD/VbrickVideoEmbedConfig.md#accentcolor)

***

### applyDefaultTheme?

> `optional` **applyDefaultTheme**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:84](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L84)

flag to override account theme to default theme.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`applyDefaultTheme`](../VOD/VbrickVideoEmbedConfig.md#applydefaulttheme)

***

### autoplay?

> `optional` **autoplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:37](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L37)

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

Defined in: [embed/VbrickEmbedConfig.ts:74](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L74)

provide the sidebar name to be opened by default when video loads.
showFullPlayer value needs to be true for this to work.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`defaultSidebar`](../VOD/VbrickVideoEmbedConfig.md#defaultsidebar)

***

### ~~enableFullRev?~~

> `optional` **enableFullRev**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:167](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L167)

#### Deprecated

- embed parameter

#### Inherited from

[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md).[`enableFullRev`](../Webcast/VbrickWebcastEmbedConfig.md#enablefullrev)

***

### ~~forceClosedCaptions?~~

> `optional` **forceClosedCaptions**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:117](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L117)

#### Deprecated

- embed parameter name - alias of forcedCaptions

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`forceClosedCaptions`](../VOD/VbrickVideoEmbedConfig.md#forceclosedcaptions)

***

### forcedCaptions?

> `optional` **forcedCaptions**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:61](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L61)

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

Defined in: [embed/VbrickEmbedConfig.ts:151](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L151)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideAnalytics`](../VOD/VbrickVideoEmbedConfig.md#hideanalytics)

***

### hideChapterImages?

> `optional` **hideChapterImages**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:56](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L56)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapterImages`](../VOD/VbrickVideoEmbedConfig.md#hidechapterimages)

***

### hideChapterMenu?

> `optional` **hideChapterMenu**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:55](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L55)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapterMenu`](../VOD/VbrickVideoEmbedConfig.md#hidechaptermenu)

***

### hideChapterNavigation?

> `optional` **hideChapterNavigation**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:54](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapterNavigation`](../VOD/VbrickVideoEmbedConfig.md#hidechapternavigation)

***

### hideChapters?

> `optional` **hideChapters**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:53](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideChapters`](../VOD/VbrickVideoEmbedConfig.md#hidechapters)

***

### ~~hideComments?~~

> `optional` **hideComments**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:142](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L142)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideComments`](../VOD/VbrickVideoEmbedConfig.md#hidecomments)

***

### hideFullscreen?

> `optional` **hideFullscreen**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:63](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L63)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideFullscreen`](../VOD/VbrickVideoEmbedConfig.md#hidefullscreen)

***

### ~~hideInfo?~~

> `optional` **hideInfo**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:140](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L140)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideInfo`](../VOD/VbrickVideoEmbedConfig.md#hideinfo)

***

### hideOverlayControls?

> `optional` **hideOverlayControls**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:57](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L57)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideOverlayControls`](../VOD/VbrickVideoEmbedConfig.md#hideoverlaycontrols)

***

### hidePlayControls?

> `optional` **hidePlayControls**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:58](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L58)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hidePlayControls`](../VOD/VbrickVideoEmbedConfig.md#hideplaycontrols)

***

### ~~hidePlaylist?~~

> `optional` **hidePlaylist**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:148](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L148)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hidePlaylist`](../VOD/VbrickVideoEmbedConfig.md#hideplaylist)

***

### ~~hidePulse?~~

> `optional` **hidePulse**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:144](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L144)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hidePulse`](../VOD/VbrickVideoEmbedConfig.md#hidepulse)

***

### ~~hideReview?~~

> `optional` **hideReview**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:146](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L146)

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideReview`](../VOD/VbrickVideoEmbedConfig.md#hidereview)

***

### hideSettings?

> `optional` **hideSettings**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:62](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L62)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideSettings`](../VOD/VbrickVideoEmbedConfig.md#hidesettings)

***

### hideSubtitles?

> `optional` **hideSubtitles**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:59](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L59)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`hideSubtitles`](../VOD/VbrickVideoEmbedConfig.md#hidesubtitles)

***

### hideToolbar?

> `optional` **hideToolbar**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:187](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L187)

Only applicable when layout is 'slider'
Do not show bottom toolbar, only show the current video. This makes playlist functionality only possible through javascript API.

#### Inherited from

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md).[`hideToolbar`](../Playlist/VbrickPlaylistEmbedConfig.md#hidetoolbar)

***

### initialVolume?

> `optional` **initialVolume**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:42](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L42)

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`initialVolume`](../VOD/VbrickVideoEmbedConfig.md#initialvolume)

***

### layout?

> `optional` **layout**: `"row"` \| `"grid"` \| `"slider"`

Defined in: [embed/VbrickEmbedConfig.ts:182](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L182)

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

Defined in: [embed/VbrickEmbedConfig.ts:107](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L107)

Branding Settings. Logo image URL

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`logoUrl`](../VOD/VbrickVideoEmbedConfig.md#logourl)

***

### ~~loopVideo?~~

> `optional` **loopVideo**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:119](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L119)

#### Deprecated

- embed parameter name - alias of playInLoop

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`loopVideo`](../VOD/VbrickVideoEmbedConfig.md#loopvideo)

***

### maxVideos?

> `optional` **maxVideos**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:197](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L197)

Only applicable when layout is 'grid'
Set the maximum number of videos to include in grid view

#### Inherited from

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md).[`maxVideos`](../Playlist/VbrickPlaylistEmbedConfig.md#maxvideos)

***

### mobileLayoutBreakPoint?

> `optional` **mobileLayoutBreakPoint**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:91](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L91)

In case of showFullPlayer = true, user can provide a mobile breakpoint size
so that player and sidebar will render nicely together.
if not provided then 991 is the default value for mobile layout.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`mobileLayoutBreakPoint`](../VOD/VbrickVideoEmbedConfig.md#mobilelayoutbreakpoint)

***

### ~~noCc?~~

> `optional` **noCc**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:121](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L121)

#### Deprecated

- embed parameter name - alias of hideSubtitles

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noCc`](../VOD/VbrickVideoEmbedConfig.md#nocc)

***

### ~~noCenterButtons?~~

> `optional` **noCenterButtons**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:123](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L123)

#### Deprecated

- embed parameter name - alias of hideOverlayControls

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noCenterButtons`](../VOD/VbrickVideoEmbedConfig.md#nocenterbuttons)

***

### ~~noChapterDisplay?~~

> `optional` **noChapterDisplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:135](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L135)

#### Deprecated

- embed parameter name - alias of hideChapterImages

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapterDisplay`](../VOD/VbrickVideoEmbedConfig.md#nochapterdisplay)

***

### ~~noChapterMenu?~~

> `optional` **noChapterMenu**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:137](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L137)

#### Deprecated

- embed parameter name - alias of hideChapterMenu

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapterMenu`](../VOD/VbrickVideoEmbedConfig.md#nochaptermenu)

***

### ~~noChapters?~~

> `optional` **noChapters**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:125](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L125)

#### Deprecated

- embed parameter name - alias of hideChapters

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapters`](../VOD/VbrickVideoEmbedConfig.md#nochapters)

***

### ~~noChapterSeek?~~

> `optional` **noChapterSeek**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:133](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L133)

#### Deprecated

- embed parameter name - alias of hideChapterNavigation

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noChapterSeek`](../VOD/VbrickVideoEmbedConfig.md#nochapterseek)

***

### ~~noFullscreen?~~

> `optional` **noFullscreen**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:127](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L127)

#### Deprecated

- embed parameter name - alias of hideFullscreen

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noFullscreen`](../VOD/VbrickVideoEmbedConfig.md#nofullscreen)

***

### ~~noPlayBar?~~

> `optional` **noPlayBar**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:129](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L129)

#### Deprecated

- embed parameter name - alias of hidePlayControls

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noPlayBar`](../VOD/VbrickVideoEmbedConfig.md#noplaybar)

***

### ~~noSettings?~~

> `optional` **noSettings**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:131](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L131)

#### Deprecated

- embed parameter name - alias of hideSettings

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`noSettings`](../VOD/VbrickVideoEmbedConfig.md#nosettings)

***

### playInLoop?

> `optional` **playInLoop**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:52](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L52)

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`playInLoop`](../VOD/VbrickVideoEmbedConfig.md#playinloop)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:30](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L30)

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`popupAuth`](../VOD/VbrickVideoEmbedConfig.md#popupauth)

***

### showFullPlayer?

> `optional` **showFullPlayer**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:68](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L68)

shows video player with sidebar.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`showFullPlayer`](../VOD/VbrickVideoEmbedConfig.md#showfullplayer)

***

### showFullWebcast?

> `optional` **showFullWebcast**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:164](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L164)

Include Chat, QA and Polls widgets in embed (if configured)

#### Inherited from

[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md).[`showFullWebcast`](../Webcast/VbrickWebcastEmbedConfig.md#showfullwebcast)

***

### sidebarFilterQuery?

> `optional` **sidebarFilterQuery**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:80](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L80)

query to filter sidebar items. esp. use in pulse sidebar.
showFullPlayer = true and defaultSidebar should have a value to make it work.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`sidebarFilterQuery`](../VOD/VbrickVideoEmbedConfig.md#sidebarfilterquery)

***

### sidebarTabs?

> `optional` **sidebarTabs**: `Partial`\<`Record`\<`` `${VideoPlaybackSidebarButton}` ``, `boolean`\>\>

Defined in: [embed/VbrickEmbedConfig.ts:97](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L97)

In case of showFullPlayer = true, user can customize the sidebar tabs to include
If not provided or undefined then the default value for each tab is true

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`sidebarTabs`](../VOD/VbrickVideoEmbedConfig.md#sidebartabs)

***

### startAt?

> `optional` **startAt**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:102](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L102)

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Inherited from

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md).[`startAt`](../VOD/VbrickVideoEmbedConfig.md#startat)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:35](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L35)

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

Defined in: [embed/VbrickEmbedConfig.ts:192](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L192)

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
