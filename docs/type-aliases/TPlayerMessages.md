[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / TPlayerMessages

# Type Alias: TPlayerMessages

> **TPlayerMessages**: `object`

Video Player events

## Type declaration

### currentTime

> **currentTime**: `object`

### currentTime.currentTime

> **currentTime**: `number`

Current time in seconds into the video

### currentTime.duration

> **duration**: `number`

Total duration of video

### playbackSpeedChanged

> **playbackSpeedChanged**: `number`

Fired when the playback rate has been updated

### seeked

> **seeked**: `object`

Playback position has been changed

### seeked.endTime

> **endTime**: `number`

Playback position when seek ended

### seeked.startTime

> **startTime**: `number`

Playback position before seek started

## Defined in

[embed/IVbrickEvents.ts:32](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L32)
