[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / VbrickBaseEmbedConfig

# Interface: VbrickBaseEmbedConfig

Defined in: [embed/VbrickEmbedConfig.ts:11](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L11)

Options when creating the iframe embed for a video/webcast

## Extends

- [`VbrickSDKConfig`](VbrickSDKConfig.md)

## Extended by

- [`VbrickVideoEmbedConfig`](../VOD/VbrickVideoEmbedConfig.md)
- [`VbrickWebcastEmbedConfig`](../Webcast/VbrickWebcastEmbedConfig.md)

## Properties

### autoplay?

> `optional` **autoplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L44)

***

### baseUrl

> **baseUrl**: `string`

Defined in: [VbrickSDK.ts:41](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L41)

URL for Rev

#### Inherited from

[`VbrickSDKConfig`](VbrickSDKConfig.md).[`baseUrl`](VbrickSDKConfig.md#baseurl)

***

### className?

> `optional` **className**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:15](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L15)

An optional class to be set on embeds.

***

### height?

> `optional` **height**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:25](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L25)

Optional height to be set on embeds. Default is "100%"

***

### initialVolume?

> `optional` **initialVolume**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

set the volume to upon initial load (for muting or otherwise)

***

### log?

> `optional` **log**: `boolean`

Defined in: [VbrickSDK.ts:51](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L51)

If true, sdk will log to console

#### Inherited from

[`VbrickSDKConfig`](VbrickSDKConfig.md).[`log`](VbrickSDKConfig.md#log)

***

### noLocalNetworkAccess?

> `optional` **noLocalNetworkAccess**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:32](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L32)

do not add the 'local-network-access' Permissions-Policy iframe "allow" attribute.
This may block ECDN / User Location Services functionality from working properly.

#### Default

```ts
false
```

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:37](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L37)

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:42](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L42)

seconds to wait for the embed initialization to complete. default is 30 seconds

***

### token?

> `optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Defined in: [VbrickSDK.ts:46](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L46)

Token for authentication

#### Inherited from

[`VbrickSDKConfig`](VbrickSDKConfig.md).[`token`](VbrickSDKConfig.md#token)

***

### width?

> `optional` **width**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:20](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L20)

Optional width to be set on embeds. Default is "100%"
