---
title: useCodeParam - Remax Hooks
nav:
  title: Hooks
  path: /hooks
group:
  title: 微信
  path: /wx
  order: 1
---

# useCodeParam

这个 hook 用于用户在微信扫描二维码进入小程序时，获取参数

## 示例

假设二维码地址为"http://www.biying.com?a=b&c=d";那么这个hook的返回值为`{a:'b',c:'d'}`;

假设二维码地址为"http://www.biying.com?a=b&c=d&a=e";那么这个hook的返回值为`{a:['b','e'],c:'d'}`;

## 使用

```typescript
import {useCodeParam} from 'remax-hook';
const param = useCodeParam();
console.log(param);
```

### 参数

useCodeParam 是一个无参数的hooks;

### 返回值

返回值是一个 `object`，其格式为 { key:value };

| 参数   | 说明               | 类型              |
|:------|:------------------|:-----------------|
| key   | 返回object的key值   | string           |
| value | 返回object的value值 | string\|string[] |
