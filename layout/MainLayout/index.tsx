import { memo, ReactNode } from 'react'
import { Header } from './components'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

function BaseMainLayout ({ children }: MainLayoutProps) {
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}

export const MainLayout = memo(BaseMainLayout)