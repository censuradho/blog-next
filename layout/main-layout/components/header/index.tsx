import Link from 'next/link'

import { Container, Image } from 'components/common'
import { ButtonIcon, IconNames } from 'components'

import { darkMode, lightMode } from 'config/app'

import { routePaths } from 'constants/routes'

import Logo from 'public/logo.webp'

import * as Styles from './styles'


import { useTheme } from 'providers'

import { Flex } from 'style/Flex'

export function Header () {
  const theme = useTheme()

  const themeIcon: Record<string, IconNames> = {
    [darkMode]: 'moon',
    [lightMode]: 'daySunny'
  }

  const name = themeIcon[theme?.currentTheme] || 'moon'


  return (
    <Styles.Header>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
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
        </Flex>
      </Container>
    </Styles.Header>
  )
}