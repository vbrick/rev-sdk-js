[@vbrick/rev-sdk](../README.md) / [embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md) / VbrickVideoEmbedConfig

# Interface: VbrickVideoEmbedConfig

[embed/VbrickEmbedConfig](../modules/embed_VbrickEmbedConfig.md).VbrickVideoEmbedConfig

Options available when embedding a VOD/video

## Hierarchy

- [`VbrickBaseEmbedConfig`](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md)

  ↳ **`VbrickVideoEmbedConfig`**

## Table of contents

### Properties

- [accentColor](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#accentcolor)
- [autoplay](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#autoplay)
- [baseUrl](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#baseurl)
- [className](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#classname)
- [forcedCaptions](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#forcedcaptions)
- [height](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#height)
- [hideCaptions](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#hidecaptions)
- [hideChapters](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#hidechapters)
- [hideFullscreen](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#hidefullscreen)
- [hideOverlayControls](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#hideoverlaycontrols)
- [hidePlayControls](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#hideplaycontrols)
- [hideSettings](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#hidesettings)
- [log](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#log)
- [logoUrl](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#logourl)
- [playInLoop](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#playinloop)
- [popupAuth](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#popupauth)
- [startAt](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#startat)
- [token](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#token)
- [width](embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md#width)

## Properties

### accentColor

• `Optional` **accentColor**: `string`

Branding Settings. Accent color to use in the player, in HTML #rrggbb format

#### Defined in

[embed/VbrickEmbedConfig.ts:58](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L58)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:34](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L34)

___

### baseUrl

• **baseUrl**: `string`

URL for Rev

#### Inherited from

[VbrickBaseEmbedConfig](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md).[baseUrl](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#baseurl)

#### Defined in

[VbrickSDK.ts:34](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/VbrickSDK.ts#L34)

___

### className

• `Optional` **className**: `string`

An optional class to be set on embeds.

#### Inherited from

[VbrickBaseEmbedConfig](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md).[className](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#classname)

#### Defined in

[embed/VbrickEmbedConfig.ts:11](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L11)

___

### forcedCaptions

• `Optional` **forcedCaptions**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:40](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L40)

___

### height

• `Optional` **height**: `string`

Optional height to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md).[height](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#height)

#### Defined in

[embed/VbrickEmbedConfig.ts:21](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L21)

___

### hideCaptions

• `Optional` **hideCaptions**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:39](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L39)

___

### hideChapters

• `Optional` **hideChapters**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:36](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L36)

___

### hideFullscreen

• `Optional` **hideFullscreen**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:42](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L42)

___

### hideOverlayControls

• `Optional` **hideOverlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:37](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L37)

___

### hidePlayControls

• `Optional` **hidePlayControls**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:38](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L38)

___

### hideSettings

• `Optional` **hideSettings**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:41](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L41)

___

### log

• `Optional` **log**: `boolean`

If true, sdk will log to console

#### Inherited from

[VbrickBaseEmbedConfig](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md).[log](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#log)

#### Defined in

[VbrickSDK.ts:44](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/VbrickSDK.ts#L44)

___

### logoUrl

• `Optional` **logoUrl**: `string`

Branding Settings. Logo image URL

#### Defined in

[embed/VbrickEmbedConfig.ts:53](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L53)

___

### playInLoop

• `Optional` **playInLoop**: `boolean`

#### Defined in

[embed/VbrickEmbedConfig.ts:35](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L35)

___

### popupAuth

• `Optional` **popupAuth**: `boolean`

For video embeds. If a user needs to log in, go through the login process in a popup window. This is the standard behavior for non-SDK Rev embeded videos

#### Defined in

[embed/VbrickEmbedConfig.ts:32](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L32)

___

### startAt

• `Optional` **startAt**: `string`

Starts the video at specified timestamp. must be in the format ##m##s. For example 00m30s.

#### Defined in

[embed/VbrickEmbedConfig.ts:48](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L48)

___

### token

• `Optional` **token**: [`VbrickSDKToken`](VbrickSDK.VbrickSDKToken.md)

Token for authentication

#### Inherited from

[VbrickBaseEmbedConfig](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md).[token](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#token)

#### Defined in

[VbrickSDK.ts:39](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/VbrickSDK.ts#L39)

___

### width

• `Optional` **width**: `string`

Optional width to be set on embeds. Default is "100%"

#### Inherited from

[VbrickBaseEmbedConfig](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md).[width](embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md#width)

#### Defined in

[embed/VbrickEmbedConfig.ts:16](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/embed/VbrickEmbedConfig.ts#L16)
