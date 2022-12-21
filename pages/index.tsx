import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostsOrPages, Pagination as PaginationMeta } from '@tryghost/content-api'


import { getPosts } from 'lib/ghost'

import { HomeLayout, MainLayout } from 'layout'

export const getStaticProps: GetStaticProps<{ post: PostsOrPages, meta: PaginationMeta }> = async(context) => {

  const post = await getPosts({
    include: ['authors', 'tags'],
  })
  
  if (!post) {
  return {
      notFound: true,
      revalidate: 10
    }   
  }

  return {
    props: { 
      post,
      meta: post.meta.pagination
    },
    revalidate: 10
  }
}


function Page (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <HomeLayout {...props} />
    </MainLayout>
  )
}



export default Page