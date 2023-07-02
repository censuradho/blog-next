import { Article } from "@/app/components"
import { Box } from "@/components"
import { getPosts } from "lib/ghost"

import defaultStyles from '../styles.module.css'
import styles from './styles.module.css'

export default async function SearchPage ({ searchParams }: any) {
  const { q: query } = searchParams

  const posts = await getPosts({
    filter: `title:~'${query}'`,
    include: ['authors', 'tags']
  })
 
  const renderPosts = posts.map((value => (
    <Article
      key={value.slug}
      data={value}
    />
  )))

  
  return (
    <main className="container">
      <div className={defaultStyles.main__articles}>
        <h1 className={styles.search__title}>{`Resultados pela busca ${query}`}</h1>
        <Box gap={1} flexDirection="column">
          {renderPosts}
        </Box>
      </div>
    </main>
  )
}