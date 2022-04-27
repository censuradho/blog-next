import { formatPostDate } from 'lib/dateFns'
import { memo } from 'react'
import Link from 'next/link'

import * as Styles from './styles'
import Image from 'next/image'
import { Flex } from 'style/Flex'


interface Tag {
  slug: string;
  label: string
}

interface SubArticleProps {
  title?: string
  createdAt?: string
  readTime?: number
  slug: string;
  author?: {
    avatarUrl?: string;
    name?: string;
    slug: string
  };
  tags?: Tag[]
}

function BaseSubArticle ({ title, createdAt, readTime, slug, author, tags = [] }: SubArticleProps) {
  const formateDate = createdAt && formatPostDate(createdAt)

  
  const renderTags = tags?.map((value, index) => (
    <Link key={index} href={`/tag/${value?.slug}`} passHref>
      <Styles.Tag>{value.label}</Styles.Tag>
    </Link>
  ))

  return (
    <Styles.Container>
      <Flex column>
        {renderTags?.length > 0 && <Flex gap="sm">{renderTags}</Flex>}
        <Styles.Title>
          <Link href={slug} passHref>
            <Styles.Link>
              {title}
            </Styles.Link>
          </Link>
        </Styles.Title>
      </Flex>
      <Flex gap="sm" alignItems="center">
        {author?.avatarUrl && (
          <Styles.AvatarContainer>
            <Image src={author?.avatarUrl} alt={author?.name} layout="fill" />
          </Styles.AvatarContainer>
        )}
        <Flex column gap="xs" alignItems="flex-start">
          <Styles.Username>
            <Link href={`/author/${author?.slug}`} passHref>
              <Styles.Link>{author?.name}</Styles.Link>
            </Link>
          </Styles.Username>
          <Styles.CreatedAt>{formateDate} • {`  ${readTime} min read`}</Styles.CreatedAt>
        </Flex>
      </Flex>
      <Flex gap="sm" alignItems="center" fullWidth justifyContent="center">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </Flex>
    </Styles.Container>
  )
}

export const SubArticle = memo(BaseSubArticle)