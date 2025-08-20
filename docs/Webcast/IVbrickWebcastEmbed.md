[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / IVbrickWebcastEmbed

# Interface: IVbrickWebcastEmbed

Defined in: [embed/IVbrickApi.ts:138](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L138)

## Extends

- [`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md)\<[`IWebcastInfo`](IWebcastInfo.md), keyof [`TEmbedMessages`](../Base/TEmbedMessages.md) & [`TWebcastMessages`](TWebcastMessages.md)\>

## Properties

### currentSubtitles

> `readonly` **currentSubtitles**: [`ISubtitles`](../Base/ISubtitles.md)

Defined in: [embed/IVbrickApi.ts:33](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L33)

Whether subtitles are enabled, and selected language

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`currentSubtitles`](../Base/IVbrickBaseEmbed.md#currentsubtitles)

***

### info?

> `readonly` `optional` **info**: [`IWebcastInfo`](IWebcastInfo.md)

Defined in: [embed/IVbrickApi.ts:38](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L38)

metadata of the video/webcast

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`info`](../Base/IVbrickBaseEmbed.md#info)

***

### playerStatus

> `readonly` **playerStatus**: [`PlayerStatus`](../Base/PlayerStatus.md)

Defined in: [embed/IVbrickApi.ts:23](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L23)

video playing, buffering, etc

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`playerStatus`](../Base/IVbrickBaseEmbed.md#playerstatus)

***

### volume

> `readonly` **volume**: `number`

Defined in: [embed/IVbrickApi.ts:28](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L28)

Player Volume. 0-1

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`volume`](../Base/IVbrickBaseEmbed.md#volume)

***

### webcastStatus

> `readonly` **webcastStatus**: [`WebcastStatus`](WebcastStatus.md)

Defined in: [embed/IVbrickApi.ts:142](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L142)

Indicates whether the webcast is started, or broadcasting.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [embed/IVbrickApi.ts:84](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L84)

Removes the embedded content from the DOM.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`destroy`](../Base/IVbrickBaseEmbed.md#destroy)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [embed/IVbrickApi.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L44)

returns a promise once the player has completed authentication and load.
Will reject with an error if authentication/load failed

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`initialize`](../Base/IVbrickBaseEmbed.md#initialize)

***

### off()

> **off**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:79](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L79)

Removes an event listener

#### Type Parameters

##### T

`T` *extends* keyof TEmbedMessages \| keyof TWebcastMessages

#### Parameters

##### event

`T`

##### listener

[`IListener`](../Base/IListener.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`off`](../Base/IVbrickBaseEmbed.md#off)

***

### on()

> **on**\<`T`\>(`event`, `listener`): `void`

Defined in: [embed/IVbrickApi.ts:74](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L74)

Register an event handler. Events are fired at different lifecycle stages of the webcast

#### Type Parameters

##### T

`T` *extends* keyof TEmbedMessages \| keyof TWebcastMessages

#### Parameters

##### event

`T`

name of event

##### listener

[`IListener`](../Base/IListener.md)\<`T`\>

callback when event is fired. Keep a reference if you intend to call [\['off'\]](../Base/IVbrickBaseEmbed.md) later

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`on`](../Base/IVbrickBaseEmbed.md#on)

***

### pause()

> **pause**(): `void`

Defined in: [embed/IVbrickApi.ts:54](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L54)

Pauses the video if it is playing.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`pause`](../Base/IVbrickBaseEmbed.md#pause)

***

### play()

> **play**(): `void`

Defined in: [embed/IVbrickApi.ts:49](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L49)

Plays the video if it is paused.

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`play`](../Base/IVbrickBaseEmbed.md#play)

***

### setSubtitles()

> **setSubtitles**(`subtitles`): `void`

Defined in: [embed/IVbrickApi.ts:67](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L67)

Indicates whether the webcast is started, or broadcasting.
update the current subtitles settings

#### Parameters

##### subtitles

[`ISubtitles`](../Base/ISubtitles.md)

enable/disable subtitles and set language (leave language blank to use closed captions encoded into video stream)

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`setSubtitles`](../Base/IVbrickBaseEmbed.md#setsubtitles)

***

### setVolume()

> **setVolume**(`volume`): `void`

Defined in: [embed/IVbrickApi.ts:60](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L60)

Sets player volume

#### Parameters

##### volume

`number`

number 0-1

#### Returns

`void`

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`setVolume`](../Base/IVbrickBaseEmbed.md#setvolume)

***

### updateLayout()

> **updateLayout**(`layout`): `void`

Defined in: [embed/IVbrickApi.ts:149](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L149)

Change the visibility of video/slides. Only applicable when the "showFullWebcast" config
flag is enabled and the event includes slides

#### Parameters

##### layout

[`IWebcastLayout`](IWebcastLayout.md)

set if video/slides are displayed

#### Returns

`void`

***

### updateToken()

> **updateToken**(`token`): `Promise`\<`void`\>

Defined in: [embed/IVbrickApi.ts:90](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickApi.ts#L90)

Allows updating the access token if the old one has expired.

#### Parameters

##### token

[`VbrickSDKToken`](../Base/VbrickSDKToken.md)

New token

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IVbrickBaseEmbed`](../Base/IVbrickBaseEmbed.md).[`updateToken`](../Base/IVbrickBaseEmbed.md#updatetoken)
