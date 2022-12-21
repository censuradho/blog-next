import { IconNames } from 'components/icon'

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
  },
}