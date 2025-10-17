[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / embedVideo

# Function: embedVideo()

> **embedVideo**(`element`, `videoId`, `config`): [`IVbrickVideoEmbed`](../VOD/IVbrickVideoEmbed.md)

Defined in: [embed/index.ts:22](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/index.ts#L22)

Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.

## Parameters

### element

Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.

`string` | `HTMLElement`

### videoId

`string`

ID of the video to embed

### config

[`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md)

A configuration object

## Returns

[`IVbrickVideoEmbed`](../VOD/IVbrickVideoEmbed.md)

An [IVbrickVideoEmbed](../VOD/IVbrickVideoEmbed.md) object
