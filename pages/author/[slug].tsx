import { Author, PostOrPage } from "@tryghost/content-api"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPageWithLayout } from "next"

import { getAuthor, getAuthors, getPosts } from "lib/ghost"

import * as Styles from 'style/Author'
import * as DefaultStyles from 'style/DefaultStyles'

import { Avatar } from "components"
import { SubArticle } from "components/pages/Home"
import { Flex } from "style/Flex"
import { ReactElement, useState } from "react"
import { MainLayout } from "layout"

const Author: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ author, posts }) =>  {
  const [_posts, setPosts] = useState(posts)

  const renderArticles = _posts?.map((value, index) => (
    <SubArticle 
      key={index}
      title={value?.title}
      createdAt={value?.created_at}
      readTime={value?.reading_time}
      slug={value.slug}
      author={{
        avatarUrl: value?.authors?.[0]?.profile_image || '',
        name: value?.authors?.[0]?.name,
        slug: value?.authors?.[0]?.slug || ''
      }}
      tags={value?.tags?.map(value => ({
        label: value?.name || '',
        slug: value?.slug
      })) || []}
    />
  ))

  return (
    <Styles.Main>
      <DefaultStyles.Hero>
        <Avatar size="lg" src={author?.profile_image as string} alt={author?.name} />
        <DefaultStyles.Title>{author?.name}</DefaultStyles.Title>
        <DefaultStyles.Description>{author?.bio}</DefaultStyles.Description>
        <DefaultStyles.Amount>{`${author?.count?.posts} Posts`}</DefaultStyles.Amount>
      </DefaultStyles.Hero>
      <Styles.Container>
        <Styles.Section>
          <Flex column gap="sm">{renderArticles}</Flex>
        </Styles.Section>
      </Styles.Container>
    </Styles.Main>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAuthors()

  const paths = authors?.map(value => ({ params: { slug: value.slug }}))
  
  return {
    paths,
    fallback: true // false or 'blocking'
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
    }
  }
}

Author.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default Author