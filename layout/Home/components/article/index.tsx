import Link from 'next/link'
import Image from 'next/image'

import { formatPostDate } from 'lib/dateFns'

import { Flex } from 'style/Flex'

import { Tag } from 'components/Tag'

import * as Styles from './styles'
import type { ArticleProps } from './types'

export function Article (props: ArticleProps) {
  const { 
    title, 
    createdAt, 
    readTime, 
    slug, 
    author, 
    tags = [] 
  } = props

  const formateDate = createdAt && formatPostDate(createdAt)

  
  const renderTags = tags?.map((value, index) => (
    <Tag key={index} href={`/tag/${value?.slug}`}>{value.label}</Tag>
  ))

  return (
    <Styles.Container>
      <Flex column>
        {renderTags?.length > 0 && <Flex gap="sm">{renderTags}</Flex>}
        <Styles.Title>
          <Link href={`/${slug}`}>
            <Styles.Link>
              {title}
            </Styles.Link>
          </Link>
        </Styles.Title>
      </Flex>
      <Flex gap="sm" alignItems="center">
        {author?.avatarUrl && (
          <Styles.AvatarContainer>
            <Image src={author?.avatarUrl} alt={author?.name || ''} layout="fill" />
          </Styles.AvatarContainer>
        )}
        <Flex column gap="xs" alignItems="flex-start">
          <Styles.Username>
            <Link  href={`/author/${author?.slug}`}>
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