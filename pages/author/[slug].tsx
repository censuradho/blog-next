import { Author, PostOrPage } from "@tryghost/content-api"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"

import { getAuthor, getAuthors, getPosts } from "lib/ghost"

import { MainLayout } from "layout"
import { AuthorLayout } from "layout/author"
import { Head } from "components"

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

  const authorData = getAuthor(slug, {
    include: ['count.posts'],
  })

  const postsData = getPosts({
    filter: `authors.slug:[${slug}]`,
    limit: 10
  })

  const [author, posts] = await Promise.all([
    authorData,
    postsData
  ])

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
      <Head 
        title={props.author.name || ''}
        description={props?.author?.bio || ''}
        image={props.author?.profile_image as string}
      />
      <AuthorLayout {...props}/>
    </MainLayout>
  )
}
