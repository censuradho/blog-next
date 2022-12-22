import Link from 'next/link'

import { Image } from 'components/common'
import { ButtonIcon, IconNames } from 'components'

import { routePaths } from 'constants/routes'

import Logo from 'public/logo.webp'

import * as Styles from './styles'


import { useTheme } from 'providers'

import { DARK_THEME, LIGHT_THEME } from 'constants/theme'

export function Header () {
  const theme = useTheme()

  const themeIcon: Record<string, IconNames> = {
    [DARK_THEME]: 'moon',
    [LIGHT_THEME]: 'daySunny'
  }

  const name = themeIcon[theme?.currentTheme] || 'moon'


  return (
    <Styles.Header>
      <Link href={routePaths.home.path}>
        <Styles.LogoContainer>
          <Image 
            src={Logo} 
            width={48} 
            height={48} 
            alt="logo" 
          />
        </Styles.LogoContainer>
      </Link>
      <ButtonIcon
        label="theme toggle"
        icon={{ name }}
        onClick={theme?.toggleTheme}
      />
    </Styles.Header>
  )
}