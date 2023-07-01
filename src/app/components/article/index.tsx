import { paths } from 'constants/routes'
import { resolvePath } from 'utils/helpers'

import { Tag } from '@/app/components'

import styles from './styles.module.css'
import { ArticleProps } from './types'

export function Article ({ data }: ArticleProps) {

  const renderTags = data.tags?.map(value => (
    <Tag
      key={value.slug}
      href={resolvePath(paths.post, { slug: value.slug })}
    >
      {`#${value.name}`}
    </Tag>
  ))

  return (
    <article className={styles.article}>
      <span className={styles.article__created_at}>Jun 29 (2 days ago)</span>
      <h2 className={styles.article__title}>{data.title}</h2>
      {renderTags}
    </article>
  )
}