import type { AppProps } from 'next/app'

import { ThemeProvider } from 'providers'
import { Header as TopHeader } from 'components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TopHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

