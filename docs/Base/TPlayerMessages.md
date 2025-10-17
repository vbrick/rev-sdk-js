[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / TPlayerMessages

# Type Alias: TPlayerMessages

> **TPlayerMessages** = `object`

Defined in: [embed/IVbrickEvents.ts:36](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L36)

Video Player events

## Properties

### currentTime

> **currentTime**: `object`

Defined in: [embed/IVbrickEvents.ts:50](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L50)

#### currentTime

> **currentTime**: `number`

Current time in seconds into the video

#### duration

> **duration**: `number`

Total duration of video

***

### playbackSpeedChanged

> **playbackSpeedChanged**: `number`

Defined in: [embed/IVbrickEvents.ts:40](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L40)

Fired when the playback rate has been updated

***

### seeked

> **seeked**: `object`

Defined in: [embed/IVbrickEvents.ts:44](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L44)

Playback position has been changed

#### endTime

> **endTime**: `number`

Playback position when seek ended

#### startTime

> **startTime**: `number`

Playback position before seek started
