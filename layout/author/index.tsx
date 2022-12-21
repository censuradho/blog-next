import { useState } from "react";

import { Article } from "layout/Home/components";
import { AuthorProps } from "./types";

import * as Styles from './styles'
import * as DefaultStyles from 'layout/default-styles'
import { Avatar } from "components";
import { Flex } from "style/Flex";

export function AuthorLayout (props: AuthorProps) {
  const { author, posts } = props

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