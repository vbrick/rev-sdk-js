[@vbrick/rev-sdk](../README.md) / WebcastStatus

# Enumeration: WebcastStatus

## Table of contents

### Enumeration members

- [Broadcasting](WebcastStatus.md#broadcasting)
- [Completed](WebcastStatus.md#completed)
- [Error](WebcastStatus.md#error)
- [InProgress](WebcastStatus.md#inprogress)
- [Loading](WebcastStatus.md#loading)
- [Scheduled](WebcastStatus.md#scheduled)

## Enumeration members

### Broadcasting

• **Broadcasting** = `"Broadcasting"`

Webcast is active with video stream

#### Defined in

[embed/WebcastStatus.ts:20](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/WebcastStatus.ts#L20)

___

### Completed

• **Completed** = `"Completed"`

Webcast has ended

#### Defined in

[embed/WebcastStatus.ts:24](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/WebcastStatus.ts#L24)

___

### Error

• **Error** = `"Error"`

Fatal error embedding webcast

#### Defined in

[embed/WebcastStatus.ts:28](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/WebcastStatus.ts#L28)

___

### InProgress

• **InProgress** = `"InProgress"`

Webcast is active (but not currently Broadcasting)

#### Defined in

[embed/WebcastStatus.ts:16](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/WebcastStatus.ts#L16)

___

### Loading

• **Loading** = `"Loading"`

Embedded webcast is authenticating

#### Defined in

[embed/WebcastStatus.ts:8](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/WebcastStatus.ts#L8)

___

### Scheduled

• **Scheduled** = `"Scheduled"`

Embedded webcast is authenticated and waiting for webcast to start

#### Defined in

[embed/WebcastStatus.ts:12](https://github.com/vbrick/rev-sdk-js/blob/bdcf956/src/embed/WebcastStatus.ts#L12)
