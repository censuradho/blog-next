import { memo } from 'react'

import * as Styles from './styles'

interface FooterProps {}

function BaseFooter (props: FooterProps) {
  return (
    <Styles.Footer>
      <span>Censuradho © 2022   •   Publicado com <a href="https://ghost.org/" target="_blank" rel="noreferrer">Ghost</a></span>
    </Styles.Footer>
  )
}

export const Footer = memo(BaseFooter)