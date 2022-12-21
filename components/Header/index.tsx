import { ButtonIcon } from 'components/button-icon'

import { IconNames } from 'components/icon'

import { DARK_THEME, LIGHT_THEME } from 'constants/theme'

import { useTheme } from 'providers'

import * as Styles from './styles'

export function Header () {
  const theme = useTheme()

  const themeIcon: Record<string, IconNames> = {
    [DARK_THEME]: 'moon',
    [LIGHT_THEME]: 'daySunny'
  }

  const name = themeIcon[theme?.currentTheme] || 'moon'

  return (
    <Styles.Header>
      <ButtonIcon 
        icon={{ name }}
        onClick={theme?.toggleTheme}
      />
    </Styles.Header>
  )
}