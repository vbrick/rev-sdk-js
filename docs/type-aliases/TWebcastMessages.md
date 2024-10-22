[**@vbrick/rev-sdk**](../README.md) • **Docs**

***

[@vbrick/rev-sdk](../README.md) / TWebcastMessages

# Type Alias: TWebcastMessages

> **TWebcastMessages**: `object`

Webcast events

## Type declaration

### broadcastStarted

> **broadcastStarted**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Webcast is active and video content displayed

### broadcastStopped

> **broadcastStopped**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Webcast is active but video stopped

### commentAdded

> **commentAdded**: [`IComment`](../interfaces/IComment.md)

New Chat comment added

### layoutChanged

> **layoutChanged**: [`IWebcastLayout`](../interfaces/IWebcastLayout.md)

video/slides display has been changed

### pollClosed

> **pollClosed**: [`TPollId`](TPollId.md)

Includes the ID of a poll that is now closed

### pollOpened

> **pollOpened**: [`IPoll`](../interfaces/IPoll.md)

Poll has been opened

### pollPublished

> **pollPublished**: [`IPoll`](../interfaces/IPoll.md)

Poll is published - includes voting details

### pollUnpublished

> **pollUnpublished**: [`TPollId`](TPollId.md)

Poll has been removed

### slideChanged

> **slideChanged**: [`ISlideEvent`](../interfaces/ISlideEvent.md)

Active slide has een updated

### webcastEnded

> **webcastEnded**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Webcast is complete

### webcastLoaded

> **webcastLoaded**: [`IWebcastInfo`](../interfaces/IWebcastInfo.md) & [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Passes metadata about the webcast

### webcastStarted

> **webcastStarted**: [`IWebcastStatusMessage`](IWebcastStatusMessage.md)

Webcast is active (video not yet visible / in lobby)

## Defined in

[embed/IVbrickEvents.ts:58](https://github.com/vbrick/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L58)
