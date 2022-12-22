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

    </NextHead>
  )
}