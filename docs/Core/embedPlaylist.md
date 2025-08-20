[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / embedPlaylist

# Function: embedPlaylist()

> **embedPlaylist**(`element`, `playlistId`, `config`): [`IVbrickPlaylistEmbed`](../Playlist/IVbrickPlaylistEmbed.md)

Defined in: [embed/index.ts:96](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/index.ts#L96)

Embeds a playlist on the page

## Parameters

### element

Either a CSS selector string or HTML Element where the embed content will be rendered

`string` | `HTMLElement`

### playlistId

`string`

ID of the playlist to embed

### config

[`VbrickPlaylistEmbedConfig`](../Playlist/VbrickPlaylistEmbedConfig.md)

A configuration object

## Returns

[`IVbrickPlaylistEmbed`](../Playlist/IVbrickPlaylistEmbed.md)

An [IVbrickPlaylistEmbed](../Playlist/IVbrickPlaylistEmbed.md) object

## Example

Embedding a playlist:
```
//In HTML:  <div id="playlist-embed"></div>

const playlistId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedPlaylist('#playlist-embed', playlistId, {
    autoplay: true,
    token
});
```
