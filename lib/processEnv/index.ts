import * as appConfig from 'config/app'
import { ProcessEnvProps } from './types'

export const ghostAPIUrl = process.env.GHOST_URL || 'http://localhost:3000'
export const ghostAPIKey = process.env.GHOST_KEY || '387f956eaa95345f7bb484d0b8'

const siteUrl = process.env.SITE_URL || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) || process.env.URL || 'http://localhost:3000'

const platform = (process.env.NETLIFY === 'true' && 'netlify') || 'vercel'

/** Environment variables that can be used to override the defaults in config/app.ts */
const resolveBool = (value: string | undefined, defaultValue: boolean) => {
  if (!value) return defaultValue
  if (value === 'true') return true
  return false
}

const resolveNumber = (value: string | undefined, defaultValue: number) => {
  if (!value) return defaultValue
  return parseInt(value, 10)
}


export const processEnv: ProcessEnvProps = {
  siteUrl,
  rssFeed: resolveBool(process.env.RSS_FEED, appConfig.rssFeed),
  isr: {
    enable: resolveBool(process.env.NEXT_ISR, appConfig.isr),
    revalidate: resolveNumber(process.env.NEXT_ISR_REVALIDATE, appConfig.revalidate),
    maxNumberOfPosts: resolveNumber(process.env.NEXT_ISR_MAX_NUMBER_POSTS, appConfig.maxNumberOfPosts),
    maxNumberOfPages: resolveNumber(process.env.NEXT_ISR_MAX_NUMBER_PAGES, appConfig.maxNumberOfPages),
  },
}