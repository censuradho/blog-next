import { useRouter } from 'next/router'
import { useState } from 'react'

import { Flex } from 'style/Flex'

import { HomeProps } from './types'
import * as Styles from './styles'
import { Article, PinedArticle } from './components'
import { Pagination } from 'components'

export function HomeLayout (props: HomeProps) {
  const { meta, post } = props

  const [posts, setPosts] = useState(post)

  const router = useRouter()

  const [featurePost, ...rest] = posts || []

  const renderPosts = rest?.map((value, index) => (
    <Article 
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

  const renderPinedPost = () => {
    if (!featurePost) return null

    return (
      <PinedArticle 
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
    )
  }

  return (
    <>
      <Styles.Container>
        <Flex column gap="lg">
          {renderPinedPost()}
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
    </>
  )
}