[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / VbrickBaseEmbedConfig

# Interface: VbrickBaseEmbedConfig

Options when creating the iframe embed for a video/webcast

## Extends

- [`VbrickSDKConfig`](VbrickSDKConfig.md)

## Extended by

- [`VbrickVideoEmbedConfig`](VbrickVideoEmbedConfig.md)
- [`VbrickWebcastEmbedConfig`](VbrickWebcastEmbedConfig.md)

## Properties

### autoplay?

> `optional` **autoplay**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L35)

***

### baseUrl

> **baseUrl**: `string`

URL for Rev

#### Inherited from

[`VbrickSDKConfig`](VbrickSDKConfig.md).[`baseUrl`](VbrickSDKConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

***

### className?

> `optional` **className**: `string`

An optional class to be set on embeds.

#### Defined in

[embed/VbrickEmbedConfig.ts:13](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L13)

***

### height?

> `optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:23](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L23)

***

### initialVolume?

> `optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L40)

***

### log?

> `optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[`VbrickSDKConfig`](VbrickSDKConfig.md).[`log`](VbrickSDKConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Defined in

[embed/VbrickEmbedConfig.ts:28](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L28)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Defined in

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L33)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[`VbrickSDKConfig`](VbrickSDKConfig.md).[`token`](VbrickSDKConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

***

### width?

> `optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Defined in

[embed/VbrickEmbedConfig.ts:18](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L18)
