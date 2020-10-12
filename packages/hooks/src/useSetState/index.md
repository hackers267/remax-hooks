---
title: useSetState
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 4
---

# useSetState

SetState的Hook

## 示例

<code src="./demos/demo1.tsx"/>

## 使用

```typescript
import { useSetState } from 'remax-hook';
const [state, setState] = useSetState<T extends object>(
  initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void]
```



