---
title: useBoolean - Remax Hooks
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 1
---

# useBoolean

管理 boolean 使用的 hook

## 示例

<code src="./demos/Demo.tsx"/>

## 使用

```typescript
import { useBoolean } from 'remax-hook';
const [state, { setTrue, setFalse }] = useBoolean();
```

### 参数

useBoolean 接收一个可选参数：

| 参数    | 说明                          | 类型    | 默认值 |
| :------ | :---------------------------- | :------ | :----- |
| default | 可选项，状态的默认值（false） | boolean | false  |

### 返回值

返回值是一个含有两个元素的数组，第一个元素为当前状态，第二个元素为对当前状态的操作集合（本身为一个对象）。

| 参数    | 说明     | 类型    |
| :------ | :------- | :------ |
| state   | 当前状态 | boolean |
| actions | 操作集合 | Actions |

#### Actions

| 参数     | 说明                     | 类型       |
| :------- | :----------------------- | :--------- |
| setTrue  | 将当前状态为设置 `true`  | `()=>void` |
| setFalse | 将当前状态设置为 `false` | `()=>void` |
