[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / IVideoInfo

# Interface: IVideoInfo

Defined in: [embed/IVbrickTypes.ts:34](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L34)

Video Metadata

## Extends

- [`IBasicInfo`](../Base/IBasicInfo.md)

## Properties

### chapters

> **chapters**: `object`[]

Defined in: [embed/IVbrickTypes.ts:43](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L43)

#### extension?

> `optional` **extension**: `string`

#### imageId?

> `optional` **imageId**: `string`

#### time

> **time**: `number`

#### title?

> `optional` **title**: `string`

***

### duration

> **duration**: `number`

Defined in: [embed/IVbrickTypes.ts:38](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L38)

***

### hasAudioOnly

> **hasAudioOnly**: `boolean`

Defined in: [embed/IVbrickTypes.ts:41](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L41)

***

### is360

> **is360**: `boolean`

Defined in: [embed/IVbrickTypes.ts:40](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L40)

***

### isLive

> **isLive**: `boolean`

Defined in: [embed/IVbrickTypes.ts:39](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L39)

#### Overrides

[`IBasicInfo`](../Base/IBasicInfo.md).[`isLive`](../Base/IBasicInfo.md#islive)

***

### playbacks

> **playbacks**: `object`[]

Defined in: [embed/IVbrickTypes.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L49)

#### deviceName?

> `optional` **deviceName**: `string`

#### id

> **id**: `string`

#### label

> **label**: `string`

#### streamDeliveryType

> **streamDeliveryType**: `string`

#### zoneName?

> `optional` **zoneName**: `string`

***

### status

> **status**: `string`

Defined in: [embed/IVbrickTypes.ts:37](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L37)

***

### subtitles

> **subtitles**: `object`[]

Defined in: [embed/IVbrickTypes.ts:42](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L42)

#### language

> **language**: `string`

#### Overrides

[`IBasicInfo`](../Base/IBasicInfo.md).[`subtitles`](../Base/IBasicInfo.md#subtitles)

***

### title

> **title**: `string`

Defined in: [embed/IVbrickTypes.ts:36](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L36)

#### Overrides

[`IBasicInfo`](../Base/IBasicInfo.md).[`title`](../Base/IBasicInfo.md#title)

***

### videoId

> **videoId**: `string`

Defined in: [embed/IVbrickTypes.ts:35](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L35)
