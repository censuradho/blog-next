import { formatPostDate } from 'lib/dateFns'
import { memo } from 'react'
import Link from 'next/link'

import * as Styles from './styles'

interface SubArticleProps {
  title?: string
  createdAt?: string
  readTime?: number
  slug: string
}

function BaseSubArticle ({ title, createdAt, readTime, slug }: SubArticleProps) {
  const formateDate = createdAt && formatPostDate(createdAt)

  return (
    <Styles.Container>
      <Styles.Title>
        <Link href={slug} passHref>
          <Styles.Link>
            {title}
          </Styles.Link>
        </Link>
      </Styles.Title>
      <Styles.CreatedAt>{formateDate} • {`  ${readTime} min read`}</Styles.CreatedAt>
    </Styles.Container>
  )
}

export const SubArticle = memo(BaseSubArticle)