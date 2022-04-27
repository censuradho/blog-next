import { Icon } from 'components'
import { ButtonIcon } from 'components/ButtonIcon'
import { routePaths } from 'constants/routes'
import Link from 'next/link'
import { memo, useMemo, useState } from 'react'
import { Flex } from 'style/Flex'

import * as Styles from './styles'

interface HeaderProps {}

function BaseHeader (props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const renderLinks = useMemo(() => Object
    .keys(routePaths)
    .map((key, index) => {
      const options = routePaths[key as keyof typeof routePaths]

      return (
        <Styles.Li key={index}>
          <Link href={options.path}>
            <a>{options.label}</a>
          </Link>
        </Styles.Li>
    )
  }),[])

  return (
    <Styles.Header>
      <Styles.Navigation isOpen={isOpen}>
        <Flex fullWidth justifyContent="flex-end">
          <ButtonIcon icon={{ name: 'close'}} onClick={() => setIsOpen(false)} />
        </Flex>
        <Styles.Ul>{renderLinks}</Styles.Ul>
      </Styles.Navigation>
      <Styles.LogoContainer></Styles.LogoContainer>
      <ButtonIcon icon={{ name: 'verticalRounded' }} onClick={() => setIsOpen(true)} />
    </Styles.Header>
  )
}

export const Header = memo(BaseHeader)