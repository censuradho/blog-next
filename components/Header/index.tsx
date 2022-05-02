import { ButtonIcon } from 'components/ButtonIcon'
import { IconNames } from 'components/Icon'
import { DARK_THEME, LIGHT_THEME } from 'constants/theme'
import { useTheme } from 'providers'
import { memo } from 'react'

import * as Styles from './styles'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
  const theme = useTheme()

  console.log(theme)
  const themeIcon: Record<string, IconNames> = {
    [DARK_THEME]: 'moon',
    [LIGHT_THEME]: 'daySunny'
  }

  return (
    <Styles.Header>
      <ButtonIcon 
        icon={{ name: themeIcon[theme?.currentTheme] || 'moon' }}
        onClick={theme?.toggleTheme}
      />
    </Styles.Header>
  )
}

export const Header = memo(BaseHeader)