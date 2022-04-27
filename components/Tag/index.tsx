import Link, { LinkProps } from 'next/link'
import { memo, ReactNode } from 'react'

import * as Styles from './styles'

interface TagProps extends LinkProps {
  children: ReactNode
}

function BaseTag ({ children, ...props }: TagProps) {
  return (
    <Link {...props}>
      <Styles.Tag>{children}</Styles.Tag>
    </Link>
  )
}

export const Tag = memo(BaseTag)