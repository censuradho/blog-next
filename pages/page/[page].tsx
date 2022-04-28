import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Metadata, PostOrPage, PostsOrPages, Pagination as PaginationMeta } from '@tryghost/content-api'
import {  } from 'date-fns'

import * as Styles from 'style/Home'


import { getPosts } from 'lib/ghost'

import { Flex } from 'style/Flex'
import { Article, SubArticle } from 'components/pages/Home'
import { Pagination } from 'components'
import { useRouter } from 'next/router'

function Page ({ post, meta }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  const featurePost = post?.[0] || {}
  const rest = post?.filter((value, index) => index > 0) || []
  
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
              current={meta?.page || 0}
              next={meta?.next || 0}
              prev={meta?.prev || 0}
              onChange={value => router.push(`/pages/${value}`)}
            />
          </Flex>
        </Flex>
      </Styles.Section>
    </Flex>
  </Styles.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const post = await getPosts({ 
    limit: 'all'
  })

  const total = post?.meta.pagination.total

  const paths = Array
    .of(total)
    .fill(0)
    .map((_, index) => ({ params: { page: String(index + 1) }}))

    return {
      paths,
      fallback: true // false or 'blocking'
    };
}

export const getStaticProps: GetStaticProps<{ post: PostsOrPages, meta: PaginationMeta }> = async(context) => {
  const page = Number(context?.params?.page)

  const post = await getPosts({
    include: ['authors', 'tags'],
    page,
  })

  
  if (!post) {
  return {
      notFound: true,
      revalidate: 10
    }   
  }

  return {
    props: { 
      post,
      meta: post.meta.pagination
    },
    revalidate: 10
  }
}

export default Page