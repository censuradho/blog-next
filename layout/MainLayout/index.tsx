import { memo, ReactNode } from 'react'
import { Footer, Header } from './components'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

function BaseMainLayout ({ children }: MainLayoutProps) {
  return (
    <>
      <Styles.Container>
        <Header />
        <Styles.Content>
          {children}
          <hr />
          <Footer />
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

export const MainLayout = memo(BaseMainLayout)