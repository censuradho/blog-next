import { getPosts } from "lib/ghost";
import { Params } from "../types";

export async function generateStaticParams () {
  const posts = await getPosts()

  return posts.map(value => ({
    slug: value.slug
  }))
}

export const revalidate = 60

export async function PostPage ({ params }: Params<{ slug: string }>) {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  )
}