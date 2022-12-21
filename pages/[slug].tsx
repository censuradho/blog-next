import {  PostOrPage } from "@tryghost/content-api";
import type { 
  GetStaticPaths, 
  GetStaticProps, 
  InferGetStaticPropsType
} from "next";

import { getPost, getPosts } from "lib/ghost";

import { MainLayout } from "layout";
import { PostLayout } from "layout/post";

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
      <PostLayout {...props} />
    </MainLayout>
  )
}
