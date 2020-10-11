---
title: useStep
nav:
    title: Hooks
    path: /hooks
group:
    title: State
    path: /state
    order: 4
---

# useStep

管理步进状态的 Hook

## 示例

<code src="./demo1.tsx"/>

<code src="./demo2.tsx"/>

## 使用

```typescript
import {useStep} from 'remax-hook';
const initValue = [1,2,3];
const [state,actions] = useStep(initValue);
````


### 参数

| 参数       | 说明    | 类型       | 默认值   |
|:----------|:--------|:----------|:--------|
| initValue | 初始值   | `T[]`     | 无      |
| loop      | 是否循环 | `boolean` | `false` |

### 返回值

| 参数     | 说明    | 类型     |
|:--------|:--------|:--------|
| state   | 当前状态 | State   |
| actions | 操作对象 | Actions |

#### State

| 参数      | 说明         | 类型       |
|:---------|:------------|:----------|
| value    | 当前值        | `any`     |
| position | 当前位置      | `number`  |
| isStart  | 是否在开始位置 | `boolean` |
| isEnd    | 是否有结束位置 | `boolean` |

#### Actions

| 参数  | 说明    | 类型        |
|:-----|:--------|:-----------|
| next | 向下一步 | `()=>void` |
| prev | 向上一步 | `()=>void` |
