import { Icon } from 'components'
import { routePaths } from 'constants/routes'
import Link from 'next/link'
import { memo } from 'react'
import { Flex } from 'style/Flex'

import * as Styles from './styles'

interface FooterProps {}

function BaseFooter (props: FooterProps) {
  return (
    <Styles.Footer>
      <span>Censuradho © 2022  •  Publicado com <a href="https://ghost.org/" target="_blank" rel="noreferrer">Ghost</a></span>
      <Flex gap="xs">
        <a href="/rss.xml" target="_blank" rel="noreferrer">
          <Icon name="rss" />
        </a>
        <a href="https://www.linkedin.com/in/gustavo-dev-front/" target="_blank" rel="noreferrer">
          <Icon name="linkedin" />
        </a>
      </Flex>
    </Styles.Footer>
  )
}

export const Footer = memo(BaseFooter)