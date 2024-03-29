import { PostOrPage, Tag } from '@tryghost/content-api'
import Logo from 'public/logo.webp'

import { getPosts, getTag, getTags } from 'lib/ghost'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { TagLayout } from 'layout/tag';
import { MainLayout } from 'layout';
import { Head } from 'components';

export const getStaticPaths: GetStaticPaths = async () => {
  const tag = await getTags()

  const paths = tag?.map(value => ({ params: { slug: value.slug }}))

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ posts: PostOrPage[], tag: Tag }> = async (context) => {
  const slug = context?.params?.slug as string

  const tag = await getTag(slug, {
    include: ['count.posts']
  })

  const posts = await getPosts({
    filter: `tags.slug:[${tag.slug}]`,
    include: ['authors']
  })

  return {
    props: {
      tag,
      posts
    },
    revalidate: 10
  }
}



export default function TagPage (props: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <MainLayout>
      <Head 
          title={props.tag.meta_title || ''}
          description={props.tag.meta_description || ''}
          image={Logo.src as any as string}
        />
      <TagLayout {...props}/>
    </MainLayout>
  )
}