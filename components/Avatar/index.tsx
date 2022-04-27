import Image from 'next/image';
import { ComponentProps, memo } from 'react'

import * as Styles from './styles'

type AvatarStyleProps = Pick<ComponentProps<typeof Styles.Container>, 'size'>

interface AvatarProps extends AvatarStyleProps {
  src?: string;
  alt?: string
}

function BaseAvatar ({ src, alt = '', size }: AvatarProps) {
  return (
    <Styles.Container size={size}>
      {src && <Image src={src} alt={alt} layout="fill" />}
    </Styles.Container>
  )
}

export const Avatar = memo(BaseAvatar)