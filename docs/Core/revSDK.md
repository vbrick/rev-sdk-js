[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / revSDK

# Variable: revSDK

> `const` **revSDK**: `object`

Defined in: [index.ts:20](https://github.com/lukeselden/rev-sdk-js/blob/main/src/index.ts#L20)

## Type declaration

## Core

#### embedPlaylist()

> **embedPlaylist**: (`element`, `playlistId`, `config`) => [`IVbrickPlaylistEmbed`](../Playlist/IVbrickPlaylistEmbed.md)

Embeds a playlist on the page

##### Parameters

###### element

Either a CSS selector string or HTML Element where the embed content will be rendered

`string` | `HTMLElement`

###### playlistId

`string`

ID of the playlist to embed

###### config

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md)

A configuration object

##### Returns

[`IVbrickPlaylistEmbed`](../Playlist/IVbrickPlaylistEmbed.md)

An [IVbrickPlaylistEmbed](../Playlist/IVbrickPlaylistEmbed.md) object

##### Example

Embedding a playlist:
```
//In HTML:  <div id="playlist-embed"></div>

const playlistId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedPlaylist('#playlist-embed', playlistId, {
    autoplay: true,
    token
});
```

#### embedVideo()

> **embedVideo**: (`element`, `videoId`, `config`) => [`IVbrickVideoEmbed`](../VOD/IVbrickVideoEmbed.md)

Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.

##### Parameters

###### element

Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.

`string` | `HTMLElement`

###### videoId

`string`

ID of the video to embed

###### config

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md)

A configuration object

##### Returns

[`IVbrickVideoEmbed`](../VOD/IVbrickVideoEmbed.md)

An [IVbrickVideoEmbed](../VOD/IVbrickVideoEmbed.md) object

#### embedWebcast()

> **embedWebcast**: (`element`, `webcastId`, `config`) => [`IVbrickWebcastEmbed`](../Webcast/IVbrickWebcastEmbed.md)

Embeds a webcast on the page

##### Parameters

###### element

Either a CSS selector string or HTML Element where the embed content will be rendered

`string` | `HTMLElement`

###### webcastId

`string`

ID of the webcast to embed

###### config

[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md)

A configuration object

##### Returns

[`IVbrickWebcastEmbed`](../Webcast/IVbrickWebcastEmbed.md)

An [IVbrickWebcastEmbed](../Webcast/IVbrickWebcastEmbed.md) object

##### Example

Embedding a webcast:
```
//In HTML:  <div id="webcast-embed"></div>

const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedWebcast('#webcast-embed', webcastId, {
    showVideo: true,
    token
});
```

## Other

#### PlayerStatus

> **PlayerStatus**: *typeof* [`PlayerStatus`](../Base/PlayerStatus.md)

#### PlaylistLayout

> **PlaylistLayout**: *typeof* [`PlaylistLayout`](../Playlist/PlaylistLayout.md)

#### TokenType

> **TokenType**: *typeof* [`TokenType`](../Base/TokenType.md)

#### WebcastStatus

> **WebcastStatus**: *typeof* [`WebcastStatus`](../Webcast/WebcastStatus.md)
