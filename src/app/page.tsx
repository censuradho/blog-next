import { getPosts, getTags } from "lib/ghost"
import { Metadata } from "next"
import { Article, FeaturedArticle, Sidebar } from "./components"
import { Box } from "@/components"

import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'Blog: Template using Next.js and Ghost CMS',
  description: 'Exemple of blog using Next.js and Ghost CMS'
}

export const revalidate = 60

export default async function HomePage () {
  const posts = await getPosts({
    include: ['authors', 'tags'],
    filter: ['featured:false']
  })

  const featuredPosts = await getPosts({
    include: ['authors', 'tags'],
    filter: ['featured:true']
  })

  const tags = await getTags()

  const renderPosts = posts.map((value => (
    <Article
      key={value.slug}
      data={value}
    />
  )))

  const renderFeaturedPosts = featuredPosts.map((value => (
    <FeaturedArticle
      key={value.slug}
      data={value}
    />
  )))

  return (
    <main className={styles.main}>
      <Sidebar 
        tags={tags}
      />
      <div className={styles.main__articles}>
        <Box gap={1} flexDirection="column">
          {renderFeaturedPosts}
        </Box>
        <Box gap={1} flexDirection="column">
          {renderPosts}
        </Box>
      </div>
    </main>
  )
}