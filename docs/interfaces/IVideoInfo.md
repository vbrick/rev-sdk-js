[@vbrick/rev-sdk](../README.md) / IVideoInfo

# Interface: IVideoInfo

Video Metadata

## Hierarchy

- [`IBasicInfo`](IBasicInfo.md)

  ↳ **`IVideoInfo`**

## Table of contents

### Properties

- [chapters](IVideoInfo.md#chapters)
- [duration](IVideoInfo.md#duration)
- [hasAudioOnly](IVideoInfo.md#hasaudioonly)
- [is360](IVideoInfo.md#is360)
- [isLive](IVideoInfo.md#islive)
- [playbacks](IVideoInfo.md#playbacks)
- [status](IVideoInfo.md#status)
- [subtitles](IVideoInfo.md#subtitles)
- [title](IVideoInfo.md#title)
- [videoId](IVideoInfo.md#videoid)

## Properties

### chapters

• **chapters**: { `extension?`: `string` ; `imageId?`: `string` ; `time`: `number` ; `title?`: `string`  }[]

#### Defined in

[embed/IVbrickTypes.ts:37](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L37)

___

### duration

• **duration**: `number`

#### Defined in

[embed/IVbrickTypes.ts:32](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L32)

___

### hasAudioOnly

• **hasAudioOnly**: `boolean`

#### Defined in

[embed/IVbrickTypes.ts:35](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L35)

___

### is360

• **is360**: `boolean`

#### Defined in

[embed/IVbrickTypes.ts:34](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L34)

___

### isLive

• **isLive**: `boolean`

#### Overrides

[IBasicInfo](IBasicInfo.md).[isLive](IBasicInfo.md#islive)

#### Defined in

[embed/IVbrickTypes.ts:33](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L33)

___

### playbacks

• **playbacks**: { `deviceName?`: `string` ; `id`: `string` ; `label`: `string` ; `streamDeliveryType`: `string` ; `zoneName?`: `string`  }[]

#### Defined in

[embed/IVbrickTypes.ts:43](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L43)

___

### status

• **status**: `string`

#### Defined in

[embed/IVbrickTypes.ts:31](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L31)

___

### subtitles

• **subtitles**: { `language`: `string`  }[]

#### Overrides

[IBasicInfo](IBasicInfo.md).[subtitles](IBasicInfo.md#subtitles)

#### Defined in

[embed/IVbrickTypes.ts:36](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L36)

___

### title

• **title**: `string`

#### Overrides

[IBasicInfo](IBasicInfo.md).[title](IBasicInfo.md#title)

#### Defined in

[embed/IVbrickTypes.ts:30](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L30)

___

### videoId

• **videoId**: `string`

#### Defined in

[embed/IVbrickTypes.ts:29](https://github.com/vbrick/rev-sdk-js/blob/3af4ced/src/embed/IVbrickTypes.ts#L29)
