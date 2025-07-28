[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / VbrickWebcastEmbedConfig

# Interface: VbrickWebcastEmbedConfig

Options available when embedding a webcast

## Extends

- [`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md)

## Extended by

- [`VbrickEmbedConfig`](VbrickEmbedConfig.md)

## Properties

### autoplay?

> `optional` **autoplay**: `boolean`

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`autoplay`](VbrickBaseEmbedConfig.md#autoplay)

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L35)

***

### baseUrl

> **baseUrl**: `string`

URL for Rev

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`baseUrl`](VbrickBaseEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:35](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L35)

***

### className?

> `optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`className`](VbrickBaseEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:13](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L13)

***

### ~~enableFullRev?~~

> `optional` **enableFullRev**: `boolean`

#### Deprecated

- embed parameter

#### Defined in

[embed/VbrickEmbedConfig.ts:162](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L162)

***

### height?

> `optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`height`](VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:23](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L23)

***

### initialVolume?

> `optional` **initialVolume**: `number`

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`initialVolume`](VbrickBaseEmbedConfig.md#initialvolume)

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L40)

***

### log?

> `optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`log`](VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:45](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L45)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`popupAuth`](VbrickBaseEmbedConfig.md#popupauth)

#### Defined in

[embed/VbrickEmbedConfig.ts:28](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L28)

***

### showFullWebcast?

> `optional` **showFullWebcast**: `boolean`

Include Chat, QA and Polls widgets in embed (if configured)

#### Defined in

[embed/VbrickEmbedConfig.ts:159](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L159)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`timeoutSeconds`](VbrickBaseEmbedConfig.md#timeoutseconds)

#### Defined in

[embed/VbrickEmbedConfig.ts:33](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L33)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](VbrickSDKToken.md)

Token for authentication

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`token`](VbrickBaseEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:40](https://github.com/vbrick/rev-sdk-js/blob/main/src/VbrickSDK.ts#L40)

***

### width?

> `optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](VbrickBaseEmbedConfig.md).[`width`](VbrickBaseEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:18](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L18)
