import { Icon } from 'components'
import { memo } from 'react'

import * as Styles from './styles'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
  return (
    <Styles.Header>
      <Styles.LogoContainer></Styles.LogoContainer>
      <Icon name="verticalRounded"  />
    </Styles.Header>
  )
}

export const Header = memo(BaseHeader)