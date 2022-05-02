import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'providers'
import { ReactElement, ReactNode } from 'react'
import { Header as TopHeader } from 'components'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ThemeProvider>
      <TopHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
