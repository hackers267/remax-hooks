---
title: useToggle - Remax Hooks
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 2
---

# useToggle

使用 hook 在两个给定的值之间切换

## 示例

<code src="./demos/demo1.tsx"/>

<code src="./demos/demo2.tsx"/>
在两个值之间切换

## 使用

```typescript
import { useToggle } from 'remax-hook';
const defaultValue = 'foo';
const reverseValue = 'bar';
const [state,{setDefault,setReverse,toggle}] = useToggle(defaultValue,reverseValue);
```

### 参数

`useToggle` 接收两个可选参数：

| 参数          | 说明       | 类型   | 默认值                |
|:-------------|:-----------|:------|:---------------------|
| defaultValue | 默认状态值   | State | false                |
| reverseValue | 取反的状态值 | State | defaultValue取反后的值 |

> type State= `string`\|`number`\|`boolean`\|`undefined`

说明：

1. 当`useToggle` 调用的时候没有接收参数，两个默认值会分别为`false`和`true`；
2. 当`useToggle` 调用的时候接收到一个参数，分两种情况：
   - 参数为`false`,`undefined`,0,空字符串时，另一个值默认为`true`;
   - 其他情况，另一个值默认为`false`;

### 返回值

| 参数     | 说明      | 类型    |
|:--------|:---------|:--------|
| state   | 当前状态值 | State   |
| actions | 操作对象   | Actions |

#### Actions

| 参数        | 说明                    | 类型                 |
|:-----------|:-----------------------|:---------------------|
| setDefault | 设置状态为`defaultValue` | `()=>void`           |
| setReverse | 设置状态为`reverseValue` | `()=>void`           |
| toggle     | 将状态设置为 `value`     | (value:State)=>void` |
