[@vbrick/rev-sdk](../README.md) / [embed/WebcastStatus](../modules/embed_WebcastStatus.md) / WebcastStatus

# Enumeration: WebcastStatus

[embed/WebcastStatus](../modules/embed_WebcastStatus.md).WebcastStatus

## Table of contents

### Enumeration members

- [Broadcasting](embed_WebcastStatus.WebcastStatus.md#broadcasting)
- [Completed](embed_WebcastStatus.WebcastStatus.md#completed)
- [Error](embed_WebcastStatus.WebcastStatus.md#error)
- [InProgress](embed_WebcastStatus.WebcastStatus.md#inprogress)
- [Loading](embed_WebcastStatus.WebcastStatus.md#loading)
- [Scheduled](embed_WebcastStatus.WebcastStatus.md#scheduled)

## Enumeration members

### Broadcasting

• **Broadcasting** = `"Broadcasting"`

Webcast is active with video stream

#### Defined in

embed/WebcastStatus.ts:17

___

### Completed

• **Completed** = `"Completed"`

Webcast has ended

#### Defined in

embed/WebcastStatus.ts:21

___

### Error

• **Error** = `"Error"`

Fatal error embedding webcast

#### Defined in

embed/WebcastStatus.ts:25

___

### InProgress

• **InProgress** = `"InProgress"`

Webcast is active (but not currently Broadcasting)

#### Defined in

embed/WebcastStatus.ts:13

___

### Loading

• **Loading** = `"Loading"`

Embedded webcast is authenticating

#### Defined in

embed/WebcastStatus.ts:5

___

### Scheduled

• **Scheduled** = `"Scheduled"`

Embedded webcast is authenticated and waiting for webcast to start

#### Defined in

embed/WebcastStatus.ts:9
