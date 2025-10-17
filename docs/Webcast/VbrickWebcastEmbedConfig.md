[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / VbrickWebcastEmbedConfig

# Interface: VbrickWebcastEmbedConfig

Defined in: [embed/VbrickEmbedConfig.ts:167](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L167)

Options available when embedding a webcast

## Extends

- [`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md)

## Extended by

- [`VbrickEmbedConfig`](../Base/VbrickEmbedConfig.md)

## Properties

### autoplay?

> `optional` **autoplay**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L44)

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`autoplay`](../Base/VbrickBaseEmbedConfig.md#autoplay)

***

### baseUrl

> **baseUrl**: `string`

Defined in: [VbrickSDK.ts:41](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L41)

URL for Rev

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`baseUrl`](../Base/VbrickBaseEmbedConfig.md#baseurl)

***

### className?

> `optional` **className**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:15](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L15)

An optional class to be set on embeds.

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`className`](../Base/VbrickBaseEmbedConfig.md#classname)

***

### ~~enableFullRev?~~

> `optional` **enableFullRev**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:174](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L174)

#### Deprecated

- embed parameter

***

### height?

> `optional` **height**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:25](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L25)

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`height`](../Base/VbrickBaseEmbedConfig.md#height)

***

### initialVolume?

> `optional` **initialVolume**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L49)

set the volume to upon initial load (for muting or otherwise)

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`initialVolume`](../Base/VbrickBaseEmbedConfig.md#initialvolume)

***

### log?

> `optional` **log**: `boolean`

Defined in: [VbrickSDK.ts:51](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L51)

If true, sdk will log to console

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`log`](../Base/VbrickBaseEmbedConfig.md#log)

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

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`noLocalNetworkAccess`](../Base/VbrickBaseEmbedConfig.md#nolocalnetworkaccess)

***

### popupAuth?

> `optional` **popupAuth**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:37](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L37)

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`popupAuth`](../Base/VbrickBaseEmbedConfig.md#popupauth)

***

### showFullWebcast?

> `optional` **showFullWebcast**: `boolean`

Defined in: [embed/VbrickEmbedConfig.ts:171](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L171)

Include Chat, QA and Polls widgets in embed (if configured)

***

### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

Defined in: [embed/VbrickEmbedConfig.ts:42](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L42)

seconds to wait for the embed initialization to complete. default is 30 seconds

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`timeoutSeconds`](../Base/VbrickBaseEmbedConfig.md#timeoutseconds)

***

### token?

> `optional` **token**: [`VbrickSDKToken`](../Base/VbrickSDKToken.md)

Defined in: [VbrickSDK.ts:46](https://github.com/lukeselden/rev-sdk-js/blob/main/src/VbrickSDK.ts#L46)

Token for authentication

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`token`](../Base/VbrickBaseEmbedConfig.md#token)

***

### width?

> `optional` **width**: `string`

Defined in: [embed/VbrickEmbedConfig.ts:20](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/VbrickEmbedConfig.ts#L20)

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[`VbrickBaseEmbedConfig`](../Base/VbrickBaseEmbedConfig.md).[`width`](../Base/VbrickBaseEmbedConfig.md#width)
