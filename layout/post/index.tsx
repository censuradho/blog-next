import { Author } from '@tryghost/content-api'
import { Avatar, Tag } from 'components'
import { Image } from 'components/common/image'
import { formatPostDate } from 'lib/dateFns'
import Link from 'next/link'
import { Flex } from 'style/Flex'
import * as Styles from './styles'
import { PostProps } from './types'

export function PostLayout (props: PostProps) {
  const { post } = props

  const author = post?.primary_author || {} as Partial<Author>

  const renderTags = post?.tags?.map((value, index) => (
    <Tag key={index} href={`/tag/${value.slug}`}>{value?.name || ''}</Tag>
  ))


  return (
    <Styles.Main>
      <Styles.Section>
        <Styles.Container>
          <Flex column gap="md">
            <Styles.ImageHeroContainer>
              {post?.feature_image && (
                <Styles.Figure>
                  <figcaption>{post?.feature_image_caption}</figcaption>
                  <Image 
                    src={post?.feature_image} 
                    alt={post?.feature_image_alt || ''} 
                    fill 
                    priority
                    placeholder="blur"
                    blurDataURL={post?.feature_image}
                  />
                </Styles.Figure>
              )}
            </Styles.ImageHeroContainer>
            <Styles.Meta>{renderTags} <span>•</span> {post?.published_at && formatPostDate(post?.published_at)}</Styles.Meta>
            <h1>{post?.title}</h1>
            <Styles.Article dangerouslySetInnerHTML={{ __html: post?.html || '' }}></Styles.Article>
          </Flex>
        </Styles.Container>
      </Styles.Section>
      <hr />
        <Styles.Section>
          <Styles.Container>
            <Flex gap="sm" alignItems="center" fullWidth justifyContent="center">
              <Avatar size={60} src={author?.profile_image as string} alt={author?.name as string} />
              <Link href={`/author/${author?.slug}`}>
                <Styles.Link>
                  <Styles.Username>{author?.name}</Styles.Username> 
                </Styles.Link>
              </Link>
            </Flex>
          </Styles.Container>
        </Styles.Section>
      <hr />
    </Styles.Main>
  )
}