interface OssImageCropParams {
  image: string;
  size: { w: number; h: number };
  point?: { x: number; y: number };
}

export function ossImageCrop({ image, point, size }: OssImageCropParams) {
  const curPoint = point ? `x_${point.x},y_${point.y},` : '';
  return `${image}?x-oss-process=image/crop,${curPoint}w_${size.w},h_${size.h}`;
}
