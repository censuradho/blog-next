import * as appConfig from 'config/app'

export interface ProcessEnvProps {
  siteUrl: string
  rssFeed: boolean
  isr: {
    enable: boolean
    revalidate: number
    maxNumberOfPosts: number
    maxNumberOfPages: number
  }
}
