[@vbrick/rev-sdk](../README.md) / [Modules](../modules.md) / index

# Module: index

A javascript library for working with embedded content from Vbrick Rev

**`remarks`**

This library allows for embedding and interacting with Rev content.

## Table of contents

### Functions

- [defaults](index.md#defaults)
- [embedWebcast](index.md#embedwebcast)

## Functions

### defaults

▸ **defaults**(`configuration`): `void`

Assign default configuration values that will be applied to future api calls.

**`example`**
Presetting a rev URL:
```
vbrickEmbed.defaults({ baseUrl: 'https://rev1.site.com' })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuration` | `Partial`<[`IVbrickWebcastConfig`](../interfaces/IVbrickApi.IVbrickWebcastConfig.md)\> | A configuration object. |

#### Returns

`void`

#### Defined in

VbrickApi.ts:18

___

### embedWebcast

▸ **embedWebcast**(`element`, `webcastId`, `config`): [`IVbrickWebcast`](../interfaces/IVbrickApi.IVbrickWebcast.md)

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

[`IVbrickWebcast`](../interfaces/IVbrickApi.IVbrickWebcast.md)

An [`IVbrickWebcastConfig`](../interfaces/IVbrickApi.IVbrickWebcastConfig.md) object

#### Defined in

VbrickApi.ts:42
