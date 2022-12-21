import NextHead from 'next/head'
import { HeadProps } from './types'

export function Head (props: HeadProps) {
  const {
    description,
    title
  } = props

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="language-lp" content="pt-BR" />
    </NextHead>
  )
}