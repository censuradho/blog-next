import { getPost, getPosts } from "lib/ghost";
import { Params } from "../types";
import { appSettings } from "@/config/app";
import { Metadata } from "next";
import { resolvePath } from "utils/helpers";
import { paths } from "@/constants/paths";

import styles from './styles.module.css'
import { Highligh } from "./components";

import { format } from "@/lib/date-fns";
import Image from "next/image";
import { Box, Icon } from "@/components";
import Link from "next/link";

export async function generateStaticParams () {
  const posts = await getPosts()

  return posts.map(value => ({
    slug: value.slug
  }))
}

export async function generateMetadata ({ params }: Params<{ slug: string }>): Promise<Metadata> {
  const { slug } = params

 
  const data = await getPost(slug, {
    include: [
      'authors',
      "tags"
    ]
  })

  const title =  data.meta_title || data.title
  const description = data.meta_description || data.excerpt
  const authors = data?.authors?.map(value => ({
    name: value.name,
  }))

  const url = `${appSettings.siteUrl}/${resolvePath(paths.post, { slug })}`

  return {
    title,
    description,
    authors,
    openGraph: {
      title,
      description,
      authors: authors?.[0].name,
      releaseDate: data.created_at,
      modifiedTime: data.updated_at as string,
      tags:  data.tags?.map(value => value.name as string),
      url,
    },
    twitter: {
      card: 'summary',
      site: url,
      title,
      description
    }
  }
}

export const revalidate = 60

export default async function PostPage ({ params }: Params<{ slug: string }>) {
  const { slug } = params

  const data = await getPost(slug, {
    include: ['tags', 'authors']
  })

  const createdAt = format(new Date(data.created_at as string), 'MMM, yyy')

  const renderAuthors = data.authors?.map(value => (
    <div key={value.slug} className={styles.blog__author}>
      <Image 
        src={value.profile_image || ''}
        alt={value.name || ''}
        width={40}
        height={40}
        className={styles.blog__author__avatar}
      />
      <strong className={styles.blog__author__title}>{value.name}</strong>
    </div>
  ))

  return (
    <main className="container">
      <header className={styles.blog__header}>
        <Link href={paths.home}>
          <Box gap={0.5} alignItems="center">
            <Icon name="arrowLeft" />
            <span>Voltar ao Blog</span>
          </Box>
        </Link>
      </header>
      <figure className={styles.blog_banner}>
        <Image 
          priority
          src={data.feature_image || ''}
          alt={data.feature_image_alt || data.title || ''}
          fill
          sizes="400px, (min-width: 762px) 600px"
        />
      </figure>
      <div className={styles.blog_post}>
        <Box gap={0.5} alignItems="center">
          {renderAuthors}
        </Box>
        <h1 className={styles.blog_post__title}>{data.title}</h1>
        <div className={styles.blog_post__meta}>
          <div>
            <span className={styles.blog__post__created_at}>{`${createdAt} `}</span>
          •
            <span className={styles.blog__post__created_at}>{` Leitura de ${data.reading_time} min`}</span>
          </div>
        </div>
        <Highligh 
          className={styles.blog_post__article}
          innerHTML={data?.html as string}
        />
      </div>
    </main>
  )
}