import GhostContentAPI, { Params } from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '7478379a8daa1c8b90fd4aa8fa',
  version: "v3"
});

export async function getPosts(options?: Params) {
  return await api.posts
    .browse({
      limit: 10,
      order: 'created_at DESC',
      ...(options && options)
    })
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}

export async function getSinglePost(slug: string) {
  return await api.posts
    .read({
      slug
    })
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}

export async function getAuthor(slug: string) {
  return await api.authors
    .read({
      slug
    })
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}