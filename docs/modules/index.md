[@vbrick/rev-sdk](../README.md) / index

# Module: index

A javascript library for working with embedded content from Vbrick Rev

**`remarks`**

This library allows for embedding and interacting with Rev content.

## Table of contents

### Functions

- [embedVideo](index.md#embedvideo)
- [embedWebcast](index.md#embedwebcast)
- [setDefaultConfig](index.md#setdefaultconfig)

## Functions

### embedVideo

▸ **embedVideo**(`element`, `videoId`, `config`): `VbrickVideoEmbed`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `string` \| `HTMLElement` |
| `videoId` | `string` |
| `config` | [`IVbrickVideoConfig`](../interfaces/IVbrickApi.IVbrickVideoConfig.md) |

#### Returns

`VbrickVideoEmbed`

#### Defined in

[EmbedVideo.ts:6](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/EmbedVideo.ts#L6)

___

### embedWebcast

▸ **embedWebcast**(`element`, `webcastId`, `config`): [`IVbrickWebcastEmbed`](../interfaces/IVbrickApi.IVbrickWebcastEmbed.md)

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
| `webcastId` | `string` |  |
| `config` | [`IVbrickWebcastConfig`](../interfaces/IVbrickApi.IVbrickWebcastConfig.md) | A configuration object |

#### Returns

[`IVbrickWebcastEmbed`](../interfaces/IVbrickApi.IVbrickWebcastEmbed.md)

An [`IVbrickWebcastConfig`](../interfaces/IVbrickApi.IVbrickWebcastConfig.md) object

#### Defined in

[EmbedWebcast.ts:26](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/EmbedWebcast.ts#L26)

___

### setDefaultConfig

▸ **setDefaultConfig**(`configuration`): `void`

Assign default configuration values that will be applied to future api calls.

**`example`**
Presetting a rev URL:
```
vbrickEmbed.setDefaultConfig({ baseUrl: 'https://rev1.site.com' })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuration` | `Partial`<`TConfig`\> | A configuration object. |

#### Returns

`void`

#### Defined in

[Config.ts:20](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/Config.ts#L20)
