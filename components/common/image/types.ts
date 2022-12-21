import { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = Omit<NextImageProps, 'placeholder' | 'blurUrl'>;