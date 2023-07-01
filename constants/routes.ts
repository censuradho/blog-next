import { IconNames } from 'components/Icon'

interface RoutePaths {
  icon: IconNames,
  path: string,
  label: string
}

type Paths = 'home'

export const routePaths: Record<Paths, RoutePaths> = {
  home: {
    path: '/',
    label: 'Blog',
    icon: 'homeLine'
  }
}

export const paths = {
  post: '/post/:slug'
}