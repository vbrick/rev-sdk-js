[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / VbrickVideoEmbedConfig

# Interface: VbrickVideoEmbedConfig

Options available when embedding a VOD/video

## Extends

- [`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md)

## Extended by

- [`VbrickPlaylistEmbedConfig`](VbrickPlaylistEmbedConfig.md)
- [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Properties

### ~~accent?~~

> `optional` **accent**: `string`

#### Deprecated

- embed parameter name - alias of accentColor

#### Defined in

[embed/VbrickEmbedConfig.ts:112](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L112)

***

### accentColor?

> `optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:109](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L109)

***

### applyDefaultTheme?

> `optional` **applyDefaultTheme**: `boolean`

flag to override account theme to default theme.

#### Defined in

[embed/VbrickEmbedConfig.ts:81](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

***

### autoplay?

> `optional` **autoplay**: `boolean`

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`autoplay`](VbrickBaseEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L35)

***

### baseUrl

> **baseUrl**: `string`

URL for Rev

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`baseUrl`](VbrickBaseEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

***

### className?

> `optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`className`](VbrickBaseEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:13](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L13)

***

### defaultSidebar?

> `optional` **defaultSidebar**: [`VideoPlaybackSidebarButton`](../enumerations/VideoPlaybackSidebarButton.md)

provide the sidebar name to be opened by default when video loads.
showFullPlayer value needs to be true for this to work.

#### Defined in

[embed/VbrickEmbedConfig.ts:71](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L71)

***

### ~~forceClosedCaptions?~~

> `optional` **forceClosedCaptions**: `string`

#### Deprecated

- embed parameter name - alias of forcedCaptions

#### Defined in

[embed/VbrickEmbedConfig.ts:114](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L114)

***

### forcedCaptions?

> `optional` **forcedCaptions**: `boolean`

Use the Close Captions embedded in video stream as Subtitles

#### Defined in

[embed/VbrickEmbedConfig.ts:58](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L58)

***

### height?

> `optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`height`](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:23](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L23)

***

### ~~hideAnalytics?~~

> `optional` **hideAnalytics**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Defined in

[embed/VbrickEmbedConfig.ts:148](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L148)

***

### hideChapterImages?

> `optional` **hideChapterImages**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L53)

***

### hideChapterMenu?

> `optional` **hideChapterMenu**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:52](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L52)

***

### hideChapterNavigation?

> `optional` **hideChapterNavigation**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:51](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L51)

***

### hideChapters?

> `optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:49](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

***

### hideChapterSeek?

> `optional` **hideChapterSeek**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:50](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L50)

***

### ~~hideComments?~~

> `optional` **hideComments**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Defined in

[embed/VbrickEmbedConfig.ts:139](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L139)

***

### hideFullscreen?

> `optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:60](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

***

### ~~hideInfo?~~

> `optional` **hideInfo**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Defined in

[embed/VbrickEmbedConfig.ts:137](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L137)

***

### hideOverlayControls?

> `optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L54)

***

### hidePlayControls?

> `optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:55](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L55)

***

### ~~hidePlaylist?~~

> `optional` **hidePlaylist**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Defined in

[embed/VbrickEmbedConfig.ts:145](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L145)

***

### ~~hidePulse?~~

> `optional` **hidePulse**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Defined in

[embed/VbrickEmbedConfig.ts:141](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L141)

***

### ~~hideReview?~~

> `optional` **hideReview**: `boolean`

#### Deprecated

- embed parameter name - alias for sidebar tab option

#### Defined in

[embed/VbrickEmbedConfig.ts:143](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L143)

***

### hideSettings?

> `optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:59](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L59)

***

### hideSubtitles?

> `optional` **hideSubtitles**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:56](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L56)

***

### initialVolume?

> `optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`initialVolume`](VbrickBaseEmbedConfig.md#initialvolume)

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L40)

***

### log?

> `optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`log`](VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

***

### logoUrl?

> `optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:104](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L104)

***

### ~~loopVideo?~~

> `optional` **loopVideo**: `string`

#### Deprecated

- embed parameter name - alias of playInLoop

#### Defined in

[embed/VbrickEmbedConfig.ts:116](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L116)

***

### mobileLayoutBreakPoint?

> `optional` **mobileLayoutBreakPoint**: `number`

In case of showFullPlayer = true, user can provide a mobile breakpoint size
so that player and sidebar will render nicely together.
if not provided then 991 is the default value for mobile layout.

#### Defined in

[embed/VbrickEmbedConfig.ts:88](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L88)

***

### ~~noCc?~~

> `optional` **noCc**: `boolean`

#### Deprecated

- embed parameter name - alias of hideSubtitles

#### Defined in

[embed/VbrickEmbedConfig.ts:118](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L118)

***

### ~~noCenterButtons?~~

> `optional` **noCenterButtons**: `boolean`

#### Deprecated

- embed parameter name - alias of hideOverlayControls

#### Defined in

[embed/VbrickEmbedConfig.ts:120](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L120)

***

### ~~noChapterDisplay?~~

> `optional` **noChapterDisplay**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapterImages

#### Defined in

[embed/VbrickEmbedConfig.ts:132](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L132)

***

### ~~noChapterMenu?~~

> `optional` **noChapterMenu**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapterMenu

#### Defined in

[embed/VbrickEmbedConfig.ts:134](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L134)

***

### ~~noChapters?~~

> `optional` **noChapters**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapters

#### Defined in

[embed/VbrickEmbedConfig.ts:122](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L122)

***

### ~~noChapterSeek?~~

> `optional` **noChapterSeek**: `boolean`

#### Deprecated

- embed parameter name - alias of hideChapterNavigation

#### Defined in

[embed/VbrickEmbedConfig.ts:130](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L130)

***

### ~~noFullscreen?~~

> `optional` **noFullscreen**: `boolean`

#### Deprecated

- embed parameter name - alias of hideFullscreen

#### Defined in

[embed/VbrickEmbedConfig.ts:124](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L124)

***

### ~~noPlayBar?~~

> `optional` **noPlayBar**: `boolean`

#### Deprecated

- embed parameter name - alias of hidePlayControls

#### Defined in

[embed/VbrickEmbedConfig.ts:126](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L126)

***

### ~~noSettings?~~

> `optional` **noSettings**: `boolean`

#### Deprecated

- embed parameter name - alias of hideSettings

#### Defined in

[embed/VbrickEmbedConfig.ts:128](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L128)

***

### playInLoop?

> `optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L48)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`popupAuth`](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:28](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L28)

***

### showFullPlayer?

> `optional` **showFullPlayer**: `boolean`

shows video player with sidebar.

#### Defined in

[embed/VbrickEmbedConfig.ts:65](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

***

### sidebarFilterQuery?

> `optional` **sidebarFilterQuery**: `string`

query to filter sidebar items. esp. use in pulse sidebar.
showFullPlayer = true and defaultSidebar should have a value to make it work.

#### Defined in

[embed/VbrickEmbedConfig.ts:77](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L77)

***

### sidebarTabs?

> `optional` **sidebarTabs**: `Partial`\<`Record`\<`"ai"` \| `"chapters"` \| `"comments"` \| `"info"` \| `"playlist"` \| `"pulse"` \| `"reports"` \| `"review"` \| `"share"`, `boolean`\>\>

In case of showFullPlayer = true, user can customize the sidebar tabs to include
If not provided or undefined then the default value for each tab is true

#### Defined in

[embed/VbrickEmbedConfig.ts:94](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L94)

***

### startAt?

> `optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:99](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L99)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`timeoutSeconds`](VbrickBaseEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L33)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`token`](VbrickBaseEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

***

### width?

> `optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`width`](VbrickBaseEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:18](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L18)
