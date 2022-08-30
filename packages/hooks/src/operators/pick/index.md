---
title: pick
nav:
  title: Operators
  path: /operators
group:
  title: RxJS
  path: /rxjs
  order: 1
---

# pick

这个操作符用于提取一个对象中的单个字段。

## 示例

如果对象`data`的值为`{hello:'world'}`。那就可以使用`pick`取出`hello`字段。

## 使用

```typescript
import { pick } from 'remax-hook';
import { of } from 'rxjs';

of({hello:'world'}).pipe(
  pick('hello')
).subscribe(x=>{
  console.log(x)
})
```
