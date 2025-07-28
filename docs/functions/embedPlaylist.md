[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / embedPlaylist

# Function: embedPlaylist()

> **embedPlaylist**(`element`, `playlistId`, `config`): [`IVbrickPlaylistEmbed`](../interfaces/IVbrickPlaylistEmbed.md)

Embeds a playlist on the page

## Parameters

• **element**: `string` \| `HTMLElement`

Either a CSS selector string or HTML Element where the embed content will be rendered

• **playlistId**: `string`

ID of the playlist to embed

• **config**: [`VbrickPlaylistEmbedConfig`](../interfaces/VbrickPlaylistEmbedConfig.md)

A configuration object

## Returns

[`IVbrickPlaylistEmbed`](../interfaces/IVbrickPlaylistEmbed.md)

An [IVbrickPlaylistEmbed](../interfaces/IVbrickPlaylistEmbed.md) object

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

## Defined in

[embed/index.ts:90](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/index.ts#L90)
