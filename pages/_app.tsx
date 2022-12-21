import type { AppProps } from 'next/app'
import reactGA from "react-ga4";

import { ThemeProvider } from 'providers'
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    reactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string);
  }, [])

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

