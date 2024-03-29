
import { memo, ComponentProps } from 'react'
import { Image } from 'components/common';

import * as Styles from './styles'


type ImageProps = Pick<ComponentProps<typeof Image>, 'priority' | 'alt'>
interface AvatarProps extends ImageProps{
  src: string;
  size?: number
}

function BaseAvatar (props: AvatarProps) {
  const { 
    src, 
    alt = '',
    size = 48,
    ...otherProps
  } = props

  return (
      <Image 
        src={src} 
        alt={alt} 
        width={size}
        height={size} 
        blurDataURL={src} 
        placeholder="blur"
        style={{
          borderRadius: '50%'
        }}
        {...otherProps}
      />
  )
}

export const Avatar = memo(BaseAvatar)