import { ossImageCrop } from '../index';

describe('oss', () => {
  it('should crop', function () {
    const image = `https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg`;
    const size = { w: 100, h: 100 };
    const actual = `${image}?x-oss-process=image/crop,w_100,h_100`;
    const result = ossImageCrop({ image, size });
    expect(result).toEqual(actual);
  });
});
