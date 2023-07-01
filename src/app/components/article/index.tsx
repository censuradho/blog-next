import { paths } from 'constants/routes'
import { resolvePath } from 'utils/helpers'

import { Tag } from '@/app/components'

import { format, formatDistance } from '@/lib/date-fns'
import Image from 'next/image'
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

  const [author] =  data?.authors || []



  const createdAt = format(new Date(data.created_at as string), 'MMM, yyy')
  const dateDistance = formatDistance(new Date(data.created_at as string), new Date())

  return (
    <article className={styles.article}>
      <div className={styles.article__author}>
        <Image 
          className={styles.article__author__avatar}
          src={author?.profile_image || ''}
          alt={author?.name || ''}
          width={25}
          height={25}
        />
        <strong className={styles.article__author__title}>{author?.name}</strong>
      </div>
      <div>
        <span className={styles.article__created_at}>{`${createdAt}`}</span>
        <span className={styles['article__created_at--distance']}>{` (${dateDistance})`}</span>
      </div>
      <h2 className={styles.article__title}>{data.title}</h2>
      {renderTags}
    </article>
  )
}