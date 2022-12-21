import { useState } from "react";

import { Article } from "layout/Home/components";

import { TagProps } from "./types";

import * as DefaultStyles from 'layout/default-styles'
import { Flex } from "style/Flex";

export function TagLayout (props: TagProps) {
  const { posts, tag } = props
  
  const [_posts, setPosts] = useState(posts)

  const renderArticles = _posts?.map((value, index) => (
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