[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / VbrickVideoEmbedConfig

# Interface: VbrickVideoEmbedConfig

Defined in: [embed/VbrickEmbedConfig.ts:58](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L58)

Options available when embedding a VOD/video

## Extends

- [`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md)

## Extended by

- [`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md)
- [`VbrickEmbedConfig`](../Base/VbrickEmbedConfig.md)

## Properties

### ~~accent?~~

> `optional` **accent**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:122](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L122)

#### Deprecated

- embed parameter name - alias of accentColor

***

### accentColor?

> `optional` **accentColor**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:119](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L119)

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

***

### applyDefaultTheme?

> `optional` **applyDefaultTheme**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:91](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L91)

flag to override account theme to default theme.

***

### autoplay?

> `optional` **autoplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L44)

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`autoplay`](../Base/VbrickBaseEmbedConfig.md#autoplay)

***

### baseUrl

> **baseUrl**: `string`

Defined in: [VbrickSDK.ts:41](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L41)

URL for Rev

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`baseUrl`](../Base/VbrickBaseEmbedConfig.md#baseurl)

***

### className?

> `optional` **className**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:15](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L15)

An optional class to be set on embeds.

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`className`](../Base/VbrickBaseEmbedConfig.md#classname)

***

### defaultSidebar?

> `optional` **defaultSidebar**: [`VideoPlaybackSidebarButton`](VideoPlaybackSidebarButton.md)

Defined in: [embed/VbrickEmbedConfig.ts:81](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L81)

provide the sidebar name to be opened by default when video loads.
showFullPlayer value needs to be true for this to work.

***

### ~~forceClosedCaptions?~~

> `optional` **forceClosedCaptions**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:124](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L124)

#### Deprecated

- embed parameter name - alias of forcedCaptions

***

### forcedCaptions?

> `optional` **forcedCaptions**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:68](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L68)

Use the Close Captions embedded in video stream as Subtitles

***

### height?

> `optional` **height**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:25](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L25)

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`height`](../Base/VbrickBaseEmbedConfig.md#height)

***

### ~~hideAnalytics?~~

> `optional` **hideAnalytics**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:158](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L158)

#### Deprecated

- embed parameter name - alias for sidebar tab option

***

### hideChapterImages?

> `optional` **hideChapterImages**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:63](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L63)

***

### hideChapterMenu?

> `optional` **hideChapterMenu**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:62](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L62)

***

### hideChapterNavigation?

> `optional` **hideChapterNavigation**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:61](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L61)

***

### hideChapters?

> `optional` **hideChapters**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:60](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L60)

***

### ~~hideComments?~~

> `optional` **hideComments**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:149](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L149)

#### Deprecated

- embed parameter name - alias for sidebar tab option

***

### hideFullscreen?

> `optional` **hideFullscreen**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:70](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L70)

***

### ~~hideInfo?~~

> `optional` **hideInfo**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:147](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L147)

#### Deprecated

- embed parameter name - alias for sidebar tab option

***

### hideOverlayControls?

> `optional` **hideOverlayControls**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:64](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L64)

***

### hidePlayControls?

> `optional` **hidePlayControls**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:65](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L65)

***

### ~~hidePlaylist?~~

> `optional` **hidePlaylist**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:155](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L155)

#### Deprecated

- embed parameter name - alias for sidebar tab option

***

### ~~hidePulse?~~

> `optional` **hidePulse**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:151](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L151)

#### Deprecated

- embed parameter name - alias for sidebar tab option

***

### ~~hideReview?~~

> `optional` **hideReview**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:153](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L153)

#### Deprecated

- embed parameter name - alias for sidebar tab option

***

### hideSettings?

> `optional` **hideSettings**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:69](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L69)

***

### hideSubtitles?

> `optional` **hideSubtitles**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:66](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L66)

***

### initialVolume?

> `optional` **initialVolume**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`initialVolume`](../Base/VbrickBaseEmbedConfig.md#initialvolume)

***

### log?

> `optional` **log**: `boolean`

Defined in: [VbrickSDK.ts:51](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L51)

If true, sdk will log to console

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`log`](../Base/VbrickBaseEmbedConfig.md#log)

***

### logoUrl?

> `optional` **logoUrl**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:114](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L114)

Branding Settings. Logo image URL

***

### ~~loopVideo?~~

> `optional` **loopVideo**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:126](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L126)

#### Deprecated

- embed parameter name - alias of playInLoop

***

### mobileLayoutBreakPoint?

> `optional` **mobileLayoutBreakPoint**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:98](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L98)

In case of showFullPlayer = true, user can provide a mobile breakpoint size
so that player and sidebar will render nicely together.
if not provided then 991 is the default value for mobile layout.

***

### ~~noCc?~~

> `optional` **noCc**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:128](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L128)

#### Deprecated

- embed parameter name - alias of hideSubtitles

***

### ~~noCenterButtons?~~

> `optional` **noCenterButtons**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:130](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L130)

#### Deprecated

- embed parameter name - alias of hideOverlayControls

***

### ~~noChapterDisplay?~~

> `optional` **noChapterDisplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:142](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L142)

#### Deprecated

- embed parameter name - alias of hideChapterImages

***

### ~~noChapterMenu?~~

> `optional` **noChapterMenu**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:144](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L144)

#### Deprecated

- embed parameter name - alias of hideChapterMenu

***

### ~~noChapters?~~

> `optional` **noChapters**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:132](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L132)

#### Deprecated

- embed parameter name - alias of hideChapters

***

### ~~noChapterSeek?~~

> `optional` **noChapterSeek**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:140](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L140)

#### Deprecated

- embed parameter name - alias of hideChapterNavigation

***

### ~~noFullscreen?~~

> `optional` **noFullscreen**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:134](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L134)

#### Deprecated

- embed parameter name - alias of hideFullscreen

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

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`noLocalNetworkAccess`](../Base/VbrickBaseEmbedConfig.md#nolocalnetworkaccess)

***

### ~~noPlayBar?~~

> `optional` **noPlayBar**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:136](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L136)

#### Deprecated

- embed parameter name - alias of hidePlayControls

***

### ~~noSettings?~~

> `optional` **noSettings**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:138](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L138)

#### Deprecated

- embed parameter name - alias of hideSettings

***

### playInLoop?

> `optional` **playInLoop**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:59](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L59)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:37](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L37)

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`popupAuth`](../Base/VbrickBaseEmbedConfig.md#popupauth)

***

### showFullPlayer?

> `optional` **showFullPlayer**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:75](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L75)

shows video player with sidebar.

***

### sidebarFilterQuery?

> `optional` **sidebarFilterQuery**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:87](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L87)

query to filter sidebar items. esp. use in pulse sidebar.
showFullPlayer = true and defaultSidebar should have a value to make it work.

***

### sidebarTabs?

> `optional` **sidebarTabs**: `Partial`\<`Record`\<`` `${VideoPlaybackSidebarButton}` ``, `boolean`\>\>

Defined in: [embed/VbrickEmbedConfig.ts:104](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L104)

In case of showFullPlayer = true, user can customize the sidebar tabs to include
If not provided or undefined then the default value for each tab is true

***

### startAt?

> `optional` **startAt**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:109](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L109)

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:42](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L42)

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`timeoutSeconds`](../Base/VbrickBaseEmbedConfig.md#timeoutseconds)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](../Base/VbrickSDKToken.md)

Defined in: [VbrickSDK.ts:46](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L46)

Token for authentication

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`token`](../Base/VbrickBaseEmbedConfig.md#token)

***

### width?

> `optional` **width**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:20](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L20)

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`width`](../Base/VbrickBaseEmbedConfig.md#width)
