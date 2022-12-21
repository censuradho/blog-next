import { theme } from 'stitches.config';
import * as Styles from './styles'

import type { TypographyProps } from './types'

export function Typography (props: TypographyProps) {
  const { children, color, ...otherProps } = props;

  
  return (
    <Styles.Typography
      style={{ 
        color: theme.colors[color || 'text'].value 
      }}
    >
      {children}
    </Styles.Typography>
  )
}