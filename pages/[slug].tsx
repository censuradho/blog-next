import {  PostOrPage } from "@tryghost/content-api";
import type { 
  GetStaticPaths, 
  GetStaticProps, 
  InferGetStaticPropsType
} from "next";

import { getPost, getPosts } from "lib/ghost";

import { MainLayout } from "layout";
import { PostLayout } from "layout/post";
import { Head } from "components";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts?.map(value => ({ params: { slug: value.slug }}))

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ post: PostOrPage}> = async (context) => {
  const slug = context?.params?.slug as string

  const post = await getPost(slug, {
    include: ['tags', 'authors']
  })

  return {
    props: {
      post,
    },
    revalidate: 10
  }
}


export default function Post (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <Head 
        title={props.post.meta_title || ''}
        description={props.post.meta_description || ''}
        image={props.post?.feature_image as string}
        og={{
          description: props.post.og_description as string,
          title: props.post.og_title as string,
          image: props.post.og_image as string,
        }}
        twitter={{
          description: props.post.twitter_description as string,
          title: props.post.twitter_title as string,
          image: props.post.twitter_image as string,
        }}
      />
      <PostLayout {...props} />
    </MainLayout>
  )
}
