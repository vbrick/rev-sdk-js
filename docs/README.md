@vbrick/rev-sdk

# @vbrick/rev-sdk

A javascript SDK for embedding or calling rev APIs

## Table of contents

### Enumerations

- [PlayerStatus](enums/PlayerStatus.md)
- [TokenType](enums/TokenType.md)
- [WebcastStatus](enums/WebcastStatus.md)

### Interfaces

- [IBasicInfo](interfaces/IBasicInfo.md)
- [IComment](interfaces/IComment.md)
- [IPoll](interfaces/IPoll.md)
- [ISlideEvent](interfaces/ISlideEvent.md)
- [ISubtitles](interfaces/ISubtitles.md)
- [IVbrickBaseEmbed](interfaces/IVbrickBaseEmbed.md)
- [IVbrickVideoEmbed](interfaces/IVbrickVideoEmbed.md)
- [IVbrickWebcastEmbed](interfaces/IVbrickWebcastEmbed.md)
- [IVideoInfo](interfaces/IVideoInfo.md)
- [IWebcastInfo](interfaces/IWebcastInfo.md)
- [IWebcastLayout](interfaces/IWebcastLayout.md)
- [VbrickBaseEmbedConfig](interfaces/VbrickBaseEmbedConfig.md)
- [VbrickEmbedConfig](interfaces/VbrickEmbedConfig.md)
- [VbrickSDKConfig](interfaces/VbrickSDKConfig.md)
- [VbrickSDKToken](interfaces/VbrickSDKToken.md)
- [VbrickVideoEmbedConfig](interfaces/VbrickVideoEmbedConfig.md)
- [VbrickWebcastEmbedConfig](interfaces/VbrickWebcastEmbedConfig.md)

### Type Aliases

- [IListener](README.md#ilistener)
- [IWebcastStatusMessage](README.md#iwebcaststatusmessage)
- [TEmbedMessages](README.md#tembedmessages)
- [TPlayerMessages](README.md#tplayermessages)
- [TPollId](README.md#tpollid)
- [TVbrickEvent](README.md#tvbrickevent)
- [TVbrickMessages](README.md#tvbrickmessages)
- [TWebcastMessages](README.md#twebcastmessages)

### Variables

- [default](README.md#default)

### Functions

- [embedVideo](README.md#embedvideo)
- [embedWebcast](README.md#embedwebcast)

## Type Aliases

### IListener

Ƭ **IListener**<`TEvent`\>: [`TVbrickMessages`](README.md#tvbrickmessages)[`TEvent`] extends `void` ? () => `void` : (`data`: [`TVbrickMessages`](README.md#tvbrickmessages)[`TEvent`]) => `void`

Event callback parameters for the specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `string` & keyof [`TVbrickMessages`](README.md#tvbrickmessages) |

#### Defined in

[embed/IVbrickEvents.ts:103](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L103)

___

### IWebcastStatusMessage

Ƭ **IWebcastStatusMessage**<`T`\>: `Object`

Event indicating the current webcast status

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WebcastStatus`](enums/WebcastStatus.md) = [`WebcastStatus`](enums/WebcastStatus.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isPreProduction?` | `boolean` |
| `status` | `T` |

#### Defined in

[embed/IVbrickTypes.ts:56](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L56)

___

### TEmbedMessages

Ƭ **TEmbedMessages**: `Object`

Authentication/load events

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authChanged` | `void` | Authentication has been updated |
| `error` | { `msg`: `string`  } | Returned if an error occurs in the communication with the embed * (for example, a bad token)* |
| `error.msg` | `string` | Diagnostic error message |
| `load` | `void` | Fired on initial embed load |
| `playerStatusChanged` | { `status`: [`PlayerStatus`](enums/PlayerStatus.md)  } | Fired when the player has changed state *(Play/Pause/Buffering, etc.)* |
| `playerStatusChanged.status` | [`PlayerStatus`](enums/PlayerStatus.md) | - |
| `subtitlesChanged` | [`ISubtitles`](interfaces/ISubtitles.md) | Fired when subtitles are changed or enabled/disabled |
| `videoLoaded` | [`IVideoInfo`](interfaces/IVideoInfo.md) | Passes metadata of video |
| `volumeChanged` | `number` | Fired when the player's volume is updated |

#### Defined in

[embed/IVbrickEvents.ts:8](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L8)

___

### TPlayerMessages

Ƭ **TPlayerMessages**: `Object`

Video Player events

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentTime` | { `currentTime`: `number` ; `duration`: `number`  } | - |
| `currentTime.currentTime` | `number` | Current time in seconds into the video |
| `currentTime.duration` | `number` | Total duration of video |
| `playbackSpeedChanged` | `number` | Fired when the playback rate has been updated |
| `seeked` | { `endTime`: `number` ; `startTime`: `number`  } | Playback position has been changed |
| `seeked.endTime` | `number` | Playback position when seek ended |
| `seeked.startTime` | `number` | Playback position before seek started |

#### Defined in

[embed/IVbrickEvents.ts:32](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L32)

___

### TPollId

Ƭ **TPollId**: `Object`

The Webcast Poll that has been Closed/Unpublished

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pollId` | `string` |

#### Defined in

[embed/IVbrickTypes.ts:116](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickTypes.ts#L116)

___

### TVbrickEvent

Ƭ **TVbrickEvent**: `Extract`<keyof [`TVbrickMessages`](README.md#tvbrickmessages), `string`\>

Events emitted by Vbrick Embed

#### Defined in

[embed/IVbrickEvents.ts:97](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L97)

___

### TVbrickMessages

Ƭ **TVbrickMessages**: [`TEmbedMessages`](README.md#tembedmessages) & [`TPlayerMessages`](README.md#tplayermessages) & [`TWebcastMessages`](README.md#twebcastmessages)

All supported events and their corresponding listener callback payload

#### Defined in

[embed/IVbrickEvents.ts:91](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L91)

___

### TWebcastMessages

Ƭ **TWebcastMessages**: `Object`

Webcast events

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `broadcastStarted` | [`IWebcastStatusMessage`](README.md#iwebcaststatusmessage) | Webcast is active and video content displayed |
| `broadcastStopped` | [`IWebcastStatusMessage`](README.md#iwebcaststatusmessage) | Webcast is active but video stopped |
| `commentAdded` | [`IComment`](interfaces/IComment.md) | New Chat comment added |
| `layoutChanged` | [`IWebcastLayout`](interfaces/IWebcastLayout.md) | video/slides display has been changed |
| `pollClosed` | [`TPollId`](README.md#tpollid) | Includes the ID of a poll that is now closed |
| `pollOpened` | [`IPoll`](interfaces/IPoll.md) | Poll has been opened |
| `pollPublished` | [`IPoll`](interfaces/IPoll.md) | Poll is published - includes voting details |
| `pollUnpublished` | [`TPollId`](README.md#tpollid) | Poll has been removed |
| `slideChanged` | [`ISlideEvent`](interfaces/ISlideEvent.md) | Active slide has een updated |
| `webcastEnded` | [`IWebcastStatusMessage`](README.md#iwebcaststatusmessage) | Webcast is complete |
| `webcastLoaded` | [`IWebcastInfo`](interfaces/IWebcastInfo.md) & [`IWebcastStatusMessage`](README.md#iwebcaststatusmessage) | Passes metadata about the webcast |
| `webcastStarted` | [`IWebcastStatusMessage`](README.md#iwebcaststatusmessage) | Webcast is active (video not yet visible / in lobby) |

#### Defined in

[embed/IVbrickEvents.ts:58](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L58)

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PlayerStatus` | typeof [`PlayerStatus`](enums/PlayerStatus.md) |
| `TokenType` | typeof [`TokenType`](enums/TokenType.md) |
| `WebcastStatus` | typeof [`WebcastStatus`](enums/WebcastStatus.md) |
| `embedVideo` | (`element`: `string` \| `HTMLElement`, `videoId`: `string`, `config`: [`VbrickVideoEmbedConfig`](interfaces/VbrickVideoEmbedConfig.md)) => [`IVbrickVideoEmbed`](interfaces/IVbrickVideoEmbed.md) |
| `embedWebcast` | (`element`: `string` \| `HTMLElement`, `webcastId`: `string`, `config`: [`VbrickWebcastEmbedConfig`](interfaces/VbrickWebcastEmbedConfig.md)) => [`IVbrickWebcastEmbed`](interfaces/IVbrickWebcastEmbed.md) |

#### Defined in

[index.ts:17](https://github.com/vbrick/rev-sdk-js/blob/main/src/index.ts#L17)

## Functions

### embedVideo

▸ **embedVideo**(`element`, `videoId`, `config`): [`IVbrickVideoEmbed`](interfaces/IVbrickVideoEmbed.md)

Embed a VOD/video on a page, with optional token-based authentication. Returns a VbrickEmbed object for interacting with playback and receiving events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `string` \| `HTMLElement` | Container element where the embed content will be rendered. Either an HTMLElement or a CSS Selector string. |
| `videoId` | `string` | ID of the video to embed |
| `config` | [`VbrickVideoEmbedConfig`](interfaces/VbrickVideoEmbedConfig.md) | A configuration object |

#### Returns

[`IVbrickVideoEmbed`](interfaces/IVbrickVideoEmbed.md)

An [IVbrickVideoEmbed](interfaces/IVbrickVideoEmbed.md) object

#### Defined in

[embed/index.ts:19](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/index.ts#L19)

___

### embedWebcast

▸ **embedWebcast**(`element`, `webcastId`, `config`): [`IVbrickWebcastEmbed`](interfaces/IVbrickWebcastEmbed.md)

Embeds a webcast on the page

**`Example`**

Embedding a webcast:
```
//In HTML:  <div id="webcast-embed"></div>

const webcastId = '0d252797-6db7-44dc-aced-25a6843d529c';
revSdk.embedWebcast('#webcast-embed', webcastId, {
    showVideo: true,
    token
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `string` \| `HTMLElement` | Either a CSS selector string or HTML Element where the embed content will be rendered |
| `webcastId` | `string` | ID of the webcast to embed |
| `config` | [`VbrickWebcastEmbedConfig`](interfaces/VbrickWebcastEmbedConfig.md) | A configuration object |

#### Returns

[`IVbrickWebcastEmbed`](interfaces/IVbrickWebcastEmbed.md)

An [IVbrickWebcastEmbed](interfaces/IVbrickWebcastEmbed.md) object

#### Defined in

[embed/index.ts:54](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/index.ts#L54)
