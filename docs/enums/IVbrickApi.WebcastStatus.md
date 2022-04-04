[@vbrick/rev-sdk](../README.md) / [IVbrickApi](../modules/IVbrickApi.md) / WebcastStatus

# Enumeration: WebcastStatus

[IVbrickApi](../modules/IVbrickApi.md).WebcastStatus

## Table of contents

### Enumeration members

- [Broadcasting](IVbrickApi.WebcastStatus.md#broadcasting)
- [Completed](IVbrickApi.WebcastStatus.md#completed)
- [Error](IVbrickApi.WebcastStatus.md#error)
- [InProgress](IVbrickApi.WebcastStatus.md#inprogress)
- [Loading](IVbrickApi.WebcastStatus.md#loading)
- [Scheduled](IVbrickApi.WebcastStatus.md#scheduled)

## Enumeration members

### Broadcasting

• **Broadcasting** = `"Broadcasting"`

Webcast is active with video stream

#### Defined in

[WebcastStatus.ts:17](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/WebcastStatus.ts#L17)

___

### Completed

• **Completed** = `"Completed"`

Webcast has ended

#### Defined in

[WebcastStatus.ts:21](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/WebcastStatus.ts#L21)

___

### Error

• **Error** = `"Error"`

Fatal error embedding webcast

#### Defined in

[WebcastStatus.ts:25](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/WebcastStatus.ts#L25)

___

### InProgress

• **InProgress** = `"InProgress"`

Webcast is active (but not currently Broadcasting)

#### Defined in

[WebcastStatus.ts:13](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/WebcastStatus.ts#L13)

___

### Loading

• **Loading** = `"Loading"`

Embedded webcast is authenticating

#### Defined in

[WebcastStatus.ts:5](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/WebcastStatus.ts#L5)

___

### Scheduled

• **Scheduled** = `"Scheduled"`

Embedded webcast is authenticated and waiting for webcast to start

#### Defined in

[WebcastStatus.ts:9](https://github.com/vbrick/rev-sdk-js/blob/d1cd6e7/src/WebcastStatus.ts#L9)
