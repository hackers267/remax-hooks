---
title: ossImageCrop
nav:
  title: Utils
  path: /utils
group:
  title: Oss
  path: /oss
  order: 1
---

# ossImageCrop

对阿里的OSS（对象存储）的图片进行裁剪处理

## 示例

<code src="./demos/demo.tsx"/>

## 使用

```
import { ossImageCrop } from 'remax-utils';
const image = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg';
const size={w:100,h:100};
const point={x:0,y:0}
const curImage = ossImageCrop({image,size,point});

```

返回可用于裁剪的图片路径

### 参数

| 参数   | 说明       | 类型    |
|:------|:-----------|:-------|
| image | 原图片地址   | string |
| size  | 目标图片宽高 | Size   |
| point | 裁剪原点    | Point  |

**Size**

| 参数 | 说明 | 类型    |
|:----|:-----|:-------|
| w   | 宽   | number |
| h   | 高   | number |

**Point**

| 参数 | 说明 | 类型    |
|:----|:-----|:-------|
| x   | 横向 | number |
| y   | 纵向 | number |
