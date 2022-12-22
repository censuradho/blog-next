import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostsOrPages, Pagination as PaginationMeta } from '@tryghost/content-api'

import Logo from 'public/logo.webp'

import { getPosts } from 'lib/ghost'

import { HomeLayout, MainLayout } from 'layout'
import { Head } from 'components'

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
      <Head 
          title="Blog: Template using Next.js and Ghost CMS" 
          description="Exemple of blog using Next.js and Ghost CMS"
          image={Logo.src as any as string}
        />
      <HomeLayout {...props} />
    </MainLayout>
  )
}



export default Page