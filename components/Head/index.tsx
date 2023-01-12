import NextHead from 'next/head'
import { HeadProps } from './types'

export function Head (props: HeadProps) {
  const {
    description,
    title,
    image,
    og,
    twitter
  } = props

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="language-lp" content="pt-BR" />
      <meta property="og:locale" content="pt-BR" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={og?.title || title} />
      <meta property="og:description" content={og?.description || description} />
      {image && <meta property="og:image" content={og?.image || image} />}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content={twitter?.title || title} />
      <meta property="twitter:image" content={twitter?.image || image} />
      <meta property="twitter:description" content={twitter?.description || description} />

      <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
      <link rel="shortcut icon" href="/public/favicon-32x32.png" type="image/png" />
    </NextHead>
  )
}