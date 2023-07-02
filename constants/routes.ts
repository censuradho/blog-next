
interface RoutePaths {
  path: string,
  label: string
}

type Paths = 'home'

export const routePaths: Record<Paths, RoutePaths> = {
  home: {
    path: '/',
    label: 'Blog',
  }
}

export const paths = {
  post: '/post/:slug',
  tags: '/tags/:slug',
  home: '/'
}