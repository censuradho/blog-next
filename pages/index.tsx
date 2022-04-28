import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Metadata, PostsOrPages } from '@tryghost/content-api'
import {  } from 'date-fns'

import * as Styles from 'style/Home'


import { getPosts } from 'lib/ghost'

import { Flex } from 'style/Flex'
import { Article, SubArticle } from 'components/pages/Home'
import { Pagination } from 'components'
import { useEffect, useState } from 'react'

function Home ({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [_post, setPost] = useState(post)

  
  const [featurePost, ...rest] = _post
  
  const renderPosts = rest?.map((value, index) => (
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
  <Styles.Container>
    <Flex column gap="lg">
      <Article 
        title={featurePost?.title} 
        description={featurePost?.custom_excerpt}
        createdAt={featurePost?.created_at}
        readTime={featurePost?.reading_time}
        slug={featurePost?.slug}
        tags={featurePost?.tags?.map(value => ({
          label: value?.name || '',
          slug: value?.slug
        })) || []}
      />
      <Styles.Section>
        <Flex column gap="lg">
          <Flex fullWidth alignItems="center" gap="sm">
            <Styles.SectionTitle>More issue</Styles.SectionTitle>
            <hr />
          </Flex>
          {renderPosts}
          <Flex fullWidth justifyContent="center">
            <Pagination 
              total={post?.meta?.pagination?.total}
              current={post?.meta?.pagination?.page}
              prev={post?.meta?.pagination?.prev}
              next={post?.meta?.pagination?.next}
            />
          </Flex>
        </Flex>
      </Styles.Section>
    </Flex>
  </Styles.Container>
  )
}

export const getStaticProps: GetStaticProps<{ post: PostsOrPages }> = async(context) => {
  const post = await getPosts({
    include: ['authors', 'tags']
  })


  if (!post) {
  return {
      notFound: true,
      revalidate: 10
    }   
  }

  return {
    props: { post },
    revalidate: 10
  }
}

export default Home