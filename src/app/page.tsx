import { getPosts } from "lib/ghost"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog: Template using Next.js and Ghost CMS',
  description: 'Exemple of blog using Next.js and Ghost CMS'
}

export const revalidate = 60

export default async function HomePage () {
  const posts = await getPosts({
    include: ['authors', 'tags']
  })

  
  return (
    <main>
      
    </main>
  )
}