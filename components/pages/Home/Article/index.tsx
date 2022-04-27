import { formatPostDate } from 'lib/dateFns';
import { memo } from 'react'
import Link from 'next/link'

import { Flex } from 'style/Flex'

import * as Styles from './styles'
import { Tag } from 'components/Tag';

interface Tag {
  slug: string;
  label: string
}

interface ArticleProps {
  title?: string;
  description?: string
  createdAt?: string;
  readTime?: number;
  slug: string;
  tags: Tag[]
}

function BaseArticle ({ title, tags, createdAt, readTime, slug }: ArticleProps) {
  const formateDate = createdAt && formatPostDate(createdAt)

  const renderTags = tags?.map((value, index) => (
    <Tag key={index} href={`/tag/${value?.slug}`}>{value.label}</Tag>
  ))

  return (
    <Styles.Container>
      <Styles.CreatedAt>Latest — {formateDate} <Styles.ReadTime> • {`  ${readTime} min read`}</Styles.ReadTime></Styles.CreatedAt>
      <Styles.Title>
        <Link href={slug} passHref>
          <Styles.Link>
            {title}
          </Styles.Link>
        </Link>
      </Styles.Title>
      <Flex gap="sm">{renderTags}</Flex>
    </Styles.Container>
  )
}

export const Article = memo(BaseArticle)