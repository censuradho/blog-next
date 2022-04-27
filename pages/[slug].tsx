import { PostOrPage } from "@tryghost/content-api";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { getPost, getPosts } from "lib/ghost";

import * as Styles from 'style/Post'
import { lastDayOfYear } from "date-fns";
import Image from "next/image";
import { Flex } from "style/Flex";
import { Header } from "components";

function Post ({ post }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Styles.Main>
      <Header />
      <Styles.Container>
        <Flex column gap="md">
          <Styles.ImageHeroContainer>
            {post?.feature_image && (
              <Styles.Figure>
                <figcaption>{post?.feature_image_caption}</figcaption>
                <Image src={post?.feature_image} alt={post?.feature_image_alt || ''} layout="fill" />
              </Styles.Figure>
            )}
          </Styles.ImageHeroContainer>
          <h1>{post?.title}</h1>
          <Styles.Article dangerouslySetInnerHTML={{ __html: post?.html || '' }}></Styles.Article>
        </Flex>
      </Styles.Container>
    </Styles.Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts?.map(value => ({ params: { slug: value.slug }}))

  return {
    paths,
    fallback: true // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<{ post: PostOrPage}> = async (context) => {
  const slug = context?.params?.slug as string

  const post = await getPost(slug)

  return {
    props: {
      post
    }
  }
}

export default Post
