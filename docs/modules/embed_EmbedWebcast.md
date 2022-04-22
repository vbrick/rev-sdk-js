[@vbrick/rev-sdk](../README.md) / embed/EmbedWebcast

# Module: embed/EmbedWebcast

## Table of contents

### Functions

- [embedWebcast](embed_EmbedWebcast.md#embedwebcast)

## Functions

### embedWebcast

▸ **embedWebcast**(`element`, `webcastId`, `config`): [`IVbrickWebcastEmbed`](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md)

Embeds a webcast on the page

**`example`**
Embedding a webcast:
```
//In HTML:  <div id="webcast-embed"></div>

const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedWebcast('#webcast-embed', webcastId, {
    showVideo: true,
    token
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `string` \| `HTMLElement` | Either a CSS selector string or HTML Element where the embed content will be rendered |
| `webcastId` | `string` | ID of the webcast to embed |
| `config` | [`VbrickWebcastEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickWebcastEmbedConfig.md) | A configuration object |

#### Returns

[`IVbrickWebcastEmbed`](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md)

An [IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md) object

#### Defined in

[embed/EmbedWebcast.ts:28](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/EmbedWebcast.ts#L28)
