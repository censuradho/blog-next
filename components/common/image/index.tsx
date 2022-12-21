import NextImage from 'next/image';
import { memo } from 'react';

import { ImageProps } from './types';

export const Image = memo((props: ImageProps) => {
  return (
    <NextImage
      {...props}
      placeholder="blur"
      blurDataURL={props?.src as string}
    />
  );
});