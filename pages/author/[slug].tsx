import { Author, PostOrPage } from "@tryghost/content-api"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"

import { getAuthor, getAuthors, getPosts } from "lib/ghost"

import { MainLayout } from "layout"
import { AuthorLayout } from "layout/author"

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAuthors()

  const paths = authors?.map(value => ({ params: { slug: value.slug }}))
  
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ author: Author, posts: PostOrPage[] }> = async (context) => {
  const slug = context?.params?.slug as string

  const author = await getAuthor(slug, {
    include: ['count.posts'],
  })

  const posts = await getPosts({
    filter: `authors.slug:[${author.slug}]`,
    limit: 10
  })

  return {
    props: {
      author,
      posts
    },
    revalidate: 10
  }
}

export default function AuthorPage (props: InferGetStaticPropsType<typeof getStaticProps>)  {
  return (
    <MainLayout>
      <AuthorLayout {...props}/>
    </MainLayout>
  )
}
