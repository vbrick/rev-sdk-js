[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / embedVideo

# Function: embedVideo()

> **embedVideo**(`element`, `videoId`, `config`): [`IVbrickVideoEmbed`](../interfaces/IVbrickVideoEmbed.md)

Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.

## Parameters

• **element**: `string` \| `HTMLElement`

Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string.

• **videoId**: `string`

ID of the video to embed

• **config**: [`VbrickVideoEmbedConfig`](../interfaces/VbrickVideoEmbedConfig.md)

A configuration object

## Returns

[`IVbrickVideoEmbed`](../interfaces/IVbrickVideoEmbed.md)

An [IVbrickVideoEmbed](../interfaces/IVbrickVideoEmbed.md) object

## Defined in

[embed/index.ts:20](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/index.ts#L20)
