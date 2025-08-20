[**@vbrick/rev-sdk**](../README.md)

***

[@vbrick/rev-sdk](../README.md) / IListener

# Type Alias: IListener\<TEvent\>

> **IListener**\<`TEvent`\> = [`TVbrickMessages`](TVbrickMessages.md)\[`TEvent`\] *extends* `void` ? () => `void` : (`data`) => `void`

Defined in: [embed/IVbrickEvents.ts:129](https://github.com/lukeselden/rev-sdk-js/blob/main/src/embed/IVbrickEvents.ts#L129)

Event callback parameters for the specified event

## Type Parameters

### TEvent

`TEvent` *extends* `string` & keyof [`TVbrickMessages`](TVbrickMessages.md)
