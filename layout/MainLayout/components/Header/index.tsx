import { memo } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { Icon } from 'components'
import { routePaths } from 'constants/routes'

import Logo from 'assets/logo.webp'


import * as Styles from './styles'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
  const { pathname } = useRouter()

  const renderPaths = Object
    .keys(routePaths)
    .map((key, index) => {
      const option = routePaths[key as keyof typeof routePaths]

      return (
        <Styles.Li isActive={pathname === option.path} key={index}>
          <Link href={option.path}>
            <a>
              <Icon name={option.icon} size={30} />
            </a>
          </Link>
        </Styles.Li>
      )
    })
  return (
    <Styles.Header>
      <Link href={routePaths.home.path}>
        <a>
          <Styles.LogoContainer>
            <Image src={Logo} layout="fill" alt="logo" />
          </Styles.LogoContainer>
        </a>
      </Link>
      <Styles.Navigation>
        <Styles.Ul>{renderPaths}</Styles.Ul>
      </Styles.Navigation>
    </Styles.Header>
  )
}

export const Header = memo(BaseHeader)