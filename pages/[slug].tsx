import { Author, PostOrPage } from "@tryghost/content-api";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import { getPost, getPosts } from "lib/ghost";

import * as Styles from 'style/Post'

import { Flex } from "style/Flex";
import { Avatar, Header } from "components";
import Link from "next/link";
import { formatPostDate } from "lib/dateFns";

function Post ({ post }: InferGetStaticPropsType<typeof getStaticProps>) {

  const author = post?.primary_author || {} as Partial<Author>

  const renderTags = post?.tags?.map((value, index) => (
    <Link key={index} href={`/tag/${value.slug}`}>
      <Styles.Tag>{value.name}</Styles.Tag>
    </Link>
  ))

  return (
    <>
      <Styles.Main>
        <Header />
        <Styles.Section>
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
                <Avatar size="md" src={author?.profile_image as string} alt={author?.name} />
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

    </>
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

  const post = await getPost(slug, {
    include: ['tags', 'authors']
  })

  return {
    props: {
      post
    }
  }
}

export default Post
