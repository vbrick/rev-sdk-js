[@vbrick/rev-sdk](../README.md) / index

# Module: index

A javascript SDK for embedding or calling rev APIs

## Table of contents

### References

- [ICaptionSettings](index.md#icaptionsettings)
- [IVbrickBaseEmbed](index.md#ivbrickbaseembed)
- [IVbrickVideoEmbed](index.md#ivbrickvideoembed)
- [IVbrickWebcastEmbed](index.md#ivbrickwebcastembed)
- [IVideoInfo](index.md#ivideoinfo)
- [PlayerStatus](index.md#playerstatus)
- [TokenType](index.md#tokentype)
- [VbrickBaseEmbedConfig](index.md#vbrickbaseembedconfig)
- [VbrickEmbedConfig](index.md#vbrickembedconfig)
- [VbrickSDKConfig](index.md#vbricksdkconfig)
- [VbrickSDKToken](index.md#vbricksdktoken)
- [VbrickVideoEmbedConfig](index.md#vbrickvideoembedconfig)
- [VbrickWebcastEmbedConfig](index.md#vbrickwebcastembedconfig)
- [WebcastStatus](index.md#webcaststatus)
- [embedVideo](index.md#embedvideo)
- [embedWebcast](index.md#embedwebcast)

### Variables

- [default](index.md#default)

## References

### ICaptionSettings

Re-exports [ICaptionSettings](../interfaces/embed_IVbrickApi.ICaptionSettings.md)

___

### IVbrickBaseEmbed

Re-exports [IVbrickBaseEmbed](../interfaces/embed_IVbrickApi.IVbrickBaseEmbed.md)

___

### IVbrickVideoEmbed

Re-exports [IVbrickVideoEmbed](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md)

___

### IVbrickWebcastEmbed

Re-exports [IVbrickWebcastEmbed](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md)

___

### IVideoInfo

Re-exports [IVideoInfo](../interfaces/embed_IVbrickApi.IVideoInfo.md)

___

### PlayerStatus

Re-exports [PlayerStatus](../enums/embed_PlayerStatus.PlayerStatus.md)

___

### TokenType

Re-exports [TokenType](../enums/VbrickSDK.TokenType.md)

___

### VbrickBaseEmbedConfig

Re-exports [VbrickBaseEmbedConfig](../interfaces/embed_VbrickEmbedConfig.VbrickBaseEmbedConfig.md)

___

### VbrickEmbedConfig

Re-exports [VbrickEmbedConfig](embed_VbrickEmbedConfig.md#vbrickembedconfig)

___

### VbrickSDKConfig

Re-exports [VbrickSDKConfig](../interfaces/VbrickSDK.VbrickSDKConfig.md)

___

### VbrickSDKToken

Re-exports [VbrickSDKToken](../interfaces/VbrickSDK.VbrickSDKToken.md)

___

### VbrickVideoEmbedConfig

Re-exports [VbrickVideoEmbedConfig](../interfaces/embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md)

___

### VbrickWebcastEmbedConfig

Re-exports [VbrickWebcastEmbedConfig](../interfaces/embed_VbrickEmbedConfig.VbrickWebcastEmbedConfig.md)

___

### WebcastStatus

Re-exports [WebcastStatus](../enums/embed_WebcastStatus.WebcastStatus.md)

___

### embedVideo

Re-exports [embedVideo](embed_EmbedVideo.md#embedvideo)

___

### embedWebcast

Re-exports [embedWebcast](embed_EmbedWebcast.md#embedwebcast)

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `embedVideo` | (`element`: `string` \| `HTMLElement`, `videoId`: `string`, `config`: [`VbrickVideoEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickVideoEmbedConfig.md)) => [`IVbrickVideoEmbed`](../interfaces/embed_IVbrickApi.IVbrickVideoEmbed.md) |
| `embedWebcast` | (`element`: `string` \| `HTMLElement`, `webcastId`: `string`, `config`: [`VbrickWebcastEmbedConfig`](../interfaces/embed_VbrickEmbedConfig.VbrickWebcastEmbedConfig.md)) => [`IVbrickWebcastEmbed`](../interfaces/embed_IVbrickApi.IVbrickWebcastEmbed.md) |

#### Defined in

[index.ts:20](https://github.com/vbrick/rev-sdk-js/blob/e325589/src/index.ts#L20)
