[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / TWebcastMessages

# Type Alias: TWebcastMessages

> **TWebcastMessages** = `object`

Defined in: [embed/IVbrickEvents.ts:64](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L64)

Webcast events

## Properties

### broadcastStarted

> **broadcastStarted**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Defined in: [embed/IVbrickEvents.ts:72](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L72)

Webcast is active and video content displayed

***

### broadcastStopped

> **broadcastStopped**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Defined in: [embed/IVbrickEvents.ts:74](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L74)

Webcast is active but video stopped

***

### commentAdded

> **commentAdded**: [`IComment`](IComment.md)

Defined in: [embed/IVbrickEvents.ts:80](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L80)

New Chat comment added

***

### layoutChanged

> **layoutChanged**: [`IWebcastLayout`](IWebcastLayout.md)

Defined in: [embed/IVbrickEvents.ts:78](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L78)

video/slides display has been changed

***

### pollClosed

> **pollClosed**: [`TPollId`](TPollId.md)

Defined in: [embed/IVbrickEvents.ts:86](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L86)

Includes the ID of a poll that is now closed

***

### pollOpened

> **pollOpened**: [`IPoll`](IPoll.md)

Defined in: [embed/IVbrickEvents.ts:84](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L84)

Poll has been opened

***

### pollPublished

> **pollPublished**: [`IPoll`](IPoll.md)

Defined in: [embed/IVbrickEvents.ts:88](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L88)

Poll is published - includes voting details

***

### pollUnpublished

> **pollUnpublished**: [`TPollId`](TPollId.md)

Defined in: [embed/IVbrickEvents.ts:90](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L90)

Poll has been removed

***

### slideChanged

> **slideChanged**: [`ISlideEvent`](ISlideEvent.md)

Defined in: [embed/IVbrickEvents.ts:82](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L82)

Active slide has een updated

***

### webcastEnded

> **webcastEnded**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Defined in: [embed/IVbrickEvents.ts:76](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L76)

Webcast is complete

***

### webcastLoaded

> **webcastLoaded**: [`IWebcastInfo`](IWebcastInfo.md) & [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Defined in: [embed/IVbrickEvents.ts:68](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L68)

Passes metadata about the webcast

***

### webcastStarted

> **webcastStarted**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Defined in: [embed/IVbrickEvents.ts:70](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L70)

Webcast is active (video not yet visible / in lobby)
