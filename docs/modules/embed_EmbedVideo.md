[@vbrick/rev-sdk](../README.md) / embed/EmbedVideo

# Module: embed/EmbedVideo

## Table of contents

### Functions

- [embedVideo](embed_EmbedVideo.md#embedvideo)

## Functions

### embedVideo

▸ **embedVideo**(`element`, `videoId`, `config`): [`IVbrickVideoEmbed`](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md)

Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `string` \| `HTMLElement` | Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string. |
| `videoId` | `string` | ID of the video to embed |
| `config` | [`VbrickEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickEmbedConfig.md) | A configuration object |

#### Returns

[`IVbrickVideoEmbed`](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md)

An [IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md) object

#### Defined in

[embed/EmbedVideo.ts:16](https://github.com/vbrick/rev-sdk-js/blob/cac113d/src/embed/EmbedVideo.ts#L16)
