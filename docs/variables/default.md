[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / default

# Variable: default

> `const` **default**: `object`

## Type declaration

### embedPlaylist()

> **embedPlaylist**: (`element`, `playlistId`, `config`) => [`IVbrickPlaylistEmbed`](../interfaces/IVbrickPlaylistEmbed.md)

Embeds a playlist on the page

#### Parameters

• **element**: `string` \| `HTMLElement`

Either a CSS selector string or HTML Element where the embed content will be rendered

• **playlistId**: `string`

ID of the playlist to embed

• **config**: [`VbrickPlaylistEmbedConfig`](../interfaces/VbrickPlaylistEmbedConfig.md)

A configuration object

#### Returns

[`IVbrickPlaylistEmbed`](../interfaces/IVbrickPlaylistEmbed.md)

An [IVbrickPlaylistEmbed](../interfaces/IVbrickPlaylistEmbed.md) object

#### Example

Embedding a playlist:
```
//In HTML:  <div id="playlist-embed"></div>

const playlistId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedPlaylist('#playlist-embed', playlistId, {
    autoplay: true,
    token
});
```

### embedVideo()

> **embedVideo**: (`element`, `videoId`, `config`) => [`IVbrickVideoEmbed`](../interfaces/IVbrickVideoEmbed.md)

Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.

#### Parameters

• **element**: `string` \| `HTMLElement`

Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.

• **videoId**: `string`

ID of the video to embed

• **config**: [`VbrickVideoEmbedConfig`](../interfaces/VbrickVideoEmbedConfig.md)

A configuration object

#### Returns

[`IVbrickVideoEmbed`](../interfaces/IVbrickVideoEmbed.md)

An [IVbrickVideoEmbed](../interfaces/IVbrickVideoEmbed.md) object

### embedWebcast()

> **embedWebcast**: (`element`, `webcastId`, `config`) => [`IVbrickWebcastEmbed`](../interfaces/IVbrickWebcastEmbed.md)

Embeds a webcast on the page

#### Parameters

• **element**: `string` \| `HTMLElement`

Either a CSS selector string or HTML Element where the embed content will be rendered

• **webcastId**: `string`

ID of the webcast to embed

• **config**: [`VbrickWebcastEmbedConfig`](../interfaces/VbrickWebcastEmbedConfig.md)

A configuration object

#### Returns

[`IVbrickWebcastEmbed`](../interfaces/IVbrickWebcastEmbed.md)

An [IVbrickWebcastEmbed](../interfaces/IVbrickWebcastEmbed.md) object

#### Example

Embedding a webcast:
```
//In HTML:  <div id="webcast-embed"></div>

const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedWebcast('#webcast-embed', webcastId, {
    showVideo: true,
    token
});
```

### PlayerStatus

> **PlayerStatus**: *typeof* [`PlayerStatus`](../enumerations/PlayerStatus.md)

### PlaylistLayout

> **PlaylistLayout**: *typeof* [`PlaylistLayout`](../enumerations/PlaylistLayout.md)

### TokenType

> **TokenType**: *typeof* [`TokenType`](../enumerations/TokenType.md)

### WebcastStatus

> **WebcastStatus**: *typeof* [`WebcastStatus`](../enumerations/WebcastStatus.md)

## Defined in

[index.ts:18](https://github.com/vbrick/rev-sdk-js/blob/main/src/index.ts#L18)
