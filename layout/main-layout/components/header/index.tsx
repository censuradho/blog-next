import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { routePaths } from 'constants/routes'

import Logo from 'assets/logo.webp'


import * as Styles from './styles'
import { ButtonIcon, IconNames } from 'components'
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
          <Image src={Logo} layout="fill" alt="logo" />
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