import { getPosts } from "lib/ghost"
import { Metadata } from "next"
import { Article } from "./components"
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

  const renderPosts = posts.map((value => (
    <Article
      key={value.slug}
      data={value}
    />
  )))

  return (
    <main className={styles.main}>
      <div>
        <Box gap={1} flexDirection="column">
          {renderPosts}
        </Box>
      </div>
    </main>
  )
}