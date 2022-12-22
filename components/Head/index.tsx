import NextHead from 'next/head'
import { HeadProps } from './types'

export function Head (props: HeadProps) {
  const {
    description,
    title,
    image
  } = props

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="language-lp" content="pt-BR" />
      <meta property="og:locale" content="pt-BR" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={image} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
      <link rel="shortcut icon" href="/public/favicon-32x32.png" type="image/png" />
      <link rel="manifest" href="public/site.webmanifest" />
      <link rel="mask-icon" href="public/safari-pinned-tab.svg" color="#5bbad5" />


    </NextHead>
  )
}