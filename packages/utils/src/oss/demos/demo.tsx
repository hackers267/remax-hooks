import React from 'react';
import { ossImageCrop } from 'remax-utils';

function Demo() {
  const image = `https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg`;
  const size = { w: 200, h: 300 };
  const point = { x: 100, y: 0 };
  const cropImage = ossImageCrop({ image, size, point });
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', columnGap: '16px' }}>
      <div>
        <div>原图：</div>
        <img src={image} alt="image" />
      </div>

      <div>
        <div>裁剪图：</div>
        <img src={cropImage} alt="cropImage" />
      </div>
    </div>
  );
}
export default Demo;
