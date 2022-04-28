import { PostOrPage, Tag } from '@tryghost/content-api'
import type { NextPageWithLayout } from 'next';

import { Header } from 'components'
import { SubArticle } from 'components/pages/Home'
import { MainLayout } from 'layout'
import { getPost, getPosts, getTag, getTags } from 'lib/ghost'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { memo, ReactElement, useState } from 'react'

import * as DefaultStyles from 'style/DefaultStyles'
import { Flex } from 'style/Flex'


const Tag: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ tag, posts }) => {

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
    <DefaultStyles.Main>
      <DefaultStyles.Hero>
        <DefaultStyles.Title>{tag?.name}</DefaultStyles.Title>
        <DefaultStyles.Amount>{`${tag?.count?.posts || 0} posts`}</DefaultStyles.Amount>
      </DefaultStyles.Hero>
      <hr />
      <DefaultStyles.Container>
      <DefaultStyles.Section>
        <Flex column gap="sm">{renderArticles}</Flex>
      </DefaultStyles.Section>
    </DefaultStyles.Container>
    </DefaultStyles.Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tag = await getTags()

  const paths = tag?.map(value => ({ params: { slug: value.slug }}))

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ posts: PostOrPage[], tag: Tag }> = async (context) => {
  const slug = context?.params?.slug as string

  const tag = await getTag(slug, {
    include: ['count.posts']
  })

  const posts = await getPosts({
    filter: `tags.slug:[${tag.slug}]`,
    include: ['authors']
  })

  return {
    props: {
      tag,
      posts
    },
    revalidate: 10
  }
}

Tag.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Tag