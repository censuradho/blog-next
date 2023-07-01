import Image from "next/image";
import Link from "next/link";

import { resolvePath } from "utils/helpers";
import { Tag } from "@/app/components";

import { paths } from "constants/routes";
import { format, formatDistance } from "@/lib/date-fns";

import { FeaturedPost } from "./types";
import styles from './styles.module.css'

export function FeaturedArticle ({ data }: FeaturedPost) {
  
  const renderTags = data.tags?.map(value => (
    <Tag
      key={value.slug}
      href={resolvePath(paths.post, { slug: value.slug })}
    >
      {`#${value.name}`}
    </Tag>
  ))

  const [author] =  data?.authors || []


  const href = resolvePath(paths.post, { slug: data.slug })

  const createdAt = format(new Date(data.created_at as string), 'MMM, yyy')
  const dateDistance = formatDistance(new Date(data.created_at as string), new Date())

  return (
    <article className={styles.article}>
      <Link href={href}>
        <figure className={styles.article__image}>
          <Image 
            src={data.feature_image || ''}
            alt={data?.feature_image_alt || data.title || ''}
            fill
          />
        </figure>
      </Link>
      <div className={styles.article__content}>
        <div className={styles.article__author}>
          <Link href={href}>
            <Image 
              className={styles.article__author__avatar}
              src={author?.profile_image || ''}
              alt={author?.name || ''}
              width={25}
              height={25}
            />
          </Link>
          <strong className={styles.article__author__title}>{author?.name}</strong>
        </div>
        <div>
          <span className={styles.article__created_at}>{`${createdAt}`}</span>
          <span className={styles['article__created_at--distance']}>{` (${dateDistance})`}</span>
        </div>
        <Link href={href}>
          <h2 className={styles.article__title}>{data.title}</h2>
        </Link>
        {renderTags}
      </div>
    </article>
  )
}