---
displayed_sidebar: jsClientSidebar
---

# Class: AdminOrderEditsResource

## Hierarchy

- `default`

  ↳ **`AdminOrderEditsResource`**

## Methods

### addLineItem

▸ **addLineItem**(`id`, `payload`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `payload` | [`AdminPostOrderEditsEditLineItemsReq`](internal-8.internal.AdminPostOrderEditsEditLineItemsReq.md) |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:72](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L72)

___

### cancel

▸ **cancel**(`id`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:98](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L98)

___

### confirm

▸ **confirm**(`id`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:106](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L106)

___

### create

▸ **create**(`payload`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`AdminPostOrderEditsReq`](internal-8.internal.AdminPostOrderEditsReq.md) |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:47](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L47)

___

### delete

▸ **delete**(`id`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`DeleteResponse`](../modules/internal-8.internal.md#deleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`DeleteResponse`](../modules/internal-8.internal.md#deleteresponse)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:64](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L64)

___

### deleteItemChange

▸ **deleteItemChange**(`orderEditId`, `itemChangeId`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditItemChangeDeleteRes`](../modules/internal-8.internal.md#adminorderedititemchangedeleteres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderEditId` | `string` |
| `itemChangeId` | `string` |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditItemChangeDeleteRes`](../modules/internal-8.internal.md#adminorderedititemchangedeleteres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:81](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L81)

___

### list

▸ **list**(`query?`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsListRes`](../modules/internal-8.internal.md#adminordereditslistres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`GetOrderEditsParams`](internal-8.internal.GetOrderEditsParams.md) |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsListRes`](../modules/internal-8.internal.md#adminordereditslistres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:33](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L33)

___

### removeLineItem

▸ **removeLineItem**(`orderEditId`, `itemId`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderEditId` | `string` |
| `itemId` | `string` |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:124](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L124)

___

### requestConfirmation

▸ **requestConfirmation**(`id`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:90](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L90)

___

### retrieve

▸ **retrieve**(`id`, `query?`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `query?` | [`GetOrderEditsOrderEditParams`](internal-8.internal.GetOrderEditsOrderEditParams.md) |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:18](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L18)

___

### update

▸ **update**(`id`, `payload`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `payload` | [`AdminPostOrderEditsOrderEditReq`](internal-8.internal.AdminPostOrderEditsOrderEditReq.md) |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:55](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L55)

___

### updateLineItem

▸ **updateLineItem**(`orderEditId`, `itemId`, `payload`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderEditId` | `string` |
| `itemId` | `string` |
| `payload` | [`AdminPostOrderEditsEditLineItemsLineItemReq`](internal-8.internal.AdminPostOrderEditsEditLineItemsLineItemReq.md) |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`AdminOrderEditsRes`](../modules/internal-8.internal.md#adminordereditsres)\>

#### Defined in

[packages/medusa-js/src/resources/admin/order-edits.ts:114](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/admin/order-edits.ts#L114)
