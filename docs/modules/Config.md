[@vbrick/rev-sdk](../README.md) / Config

# Module: Config

## Table of contents

### Functions

- [resolveConfig](Config.md#resolveconfig)
- [setDefaultConfig](Config.md#setdefaultconfig)

## Functions

### resolveConfig

▸ **resolveConfig**(`configuration`): [`VbrickSDKConfig`](../interfaces/VbrickSDK.VbrickSDKConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | `Partial`<[`VbrickSDKConfig`](../interfaces/VbrickSDK.VbrickSDKConfig.md)\> |

#### Returns

[`VbrickSDKConfig`](../interfaces/VbrickSDK.VbrickSDKConfig.md)

#### Defined in

[Config.ts:24](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/Config.ts#L24)

___

### setDefaultConfig

▸ **setDefaultConfig**(`configuration`): `void`

Assign default configuration values that will be applied to future api calls.

**`example`**
Presetting a rev URL:
```
revSdk.setDefaultConfig({ baseUrl: 'https://rev1.site.com' })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configuration` | `Partial`<[`VbrickSDKConfig`](../interfaces/VbrickSDK.VbrickSDKConfig.md)\> | A configuration object. |

#### Returns

`void`

#### Defined in

[Config.ts:17](https://github.com/vbrick/rev-sdk-js/blob/f31aed5/src/Config.ts#L17)
