[@vbrick/rev-sdk](../README.md) / [Modules](../modules.md) / [IVbrickApi](../modules/IVbrickApi.md) / WebcastStatus

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

WebcastStatus.ts:17

___

### Completed

• **Completed** = `"Completed"`

Webcast has ended

#### Defined in

WebcastStatus.ts:21

___

### Error

• **Error** = `"Error"`

Fatal error embedding webcast

#### Defined in

WebcastStatus.ts:25

___

### InProgress

• **InProgress** = `"InProgress"`

Webcast is active (but not currently Broadcasting)

#### Defined in

WebcastStatus.ts:13

___

### Loading

• **Loading** = `"Loading"`

Embedded webcast is authenticating

#### Defined in

WebcastStatus.ts:5

___

### Scheduled

• **Scheduled** = `"Scheduled"`

Embedded webcast is authenticated and waiting for webcast to start

#### Defined in

WebcastStatus.ts:9
