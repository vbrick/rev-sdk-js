[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / embedWebcast

# Function: embedWebcast()

> **embedWebcast**(`element`, `webcastId`, `config`): [`IVbrickWebcastEmbed`](../Webcast/IVbrickWebcastEmbed.md)

Defined in: [embed/index.ts:59](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/index.ts#L59)

Embeds a webcast on the page

## Parameters

### element

Either a CSS selector string or HTML Element where the embed content will be rendered

`string` | `HTMLElement`

### webcastId

`string`

ID of the webcast to embed

### config

[`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md)

A configuration object

## Returns

[`IVbrickWebcastEmbed`](../Webcast/IVbrickWebcastEmbed.md)

An [IVbrickWebcastEmbed](../Webcast/IVbrickWebcastEmbed.md) object

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
