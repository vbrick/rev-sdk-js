[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / embedWebcast

# Function: embedWebcast()

> **embedWebcast**(`element`, `webcastId`, `config`): [`IVbrickWebcastEmbed`](../interfaces/IVbrickWebcastEmbed.md)

Embeds a webcast on the page

## Parameters

• **element**: `string` \| `HTMLElement`

Either a CSS selector string or HTML Element where the embed content will be rendered

• **webcastId**: `string`

ID of the webcast to embed

• **config**: [`VbrickWebcastEmbedConfig`](../interfaces/VbrickWebcastEmbedConfig.md)

A configuration object

## Returns

[`IVbrickWebcastEmbed`](../interfaces/IVbrickWebcastEmbed.md)

An [IVbrickWebcastEmbed](../interfaces/IVbrickWebcastEmbed.md) object

## Example

Embedding a webcast:
```
//In HTML:  <div id="webcast-embed"></div>

const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedWebcast('#webcast-embed', webcastId, {
    showVideo: true,
    token
});
```

## Defined in

[embed/index.ts:55](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/index.ts#L55)
