import GhostContentAPI, { GhostContentAPIOptions, Params } from "@tryghost/content-api";
// 7478379a8daa1c8b90fd4aa8fa
// http://localhost:2368
const api = new GhostContentAPI({
  url: process.env.GHOST_URL as string,
  key: process.env.GHOST_KEY as string,
  version: 'v3'
});

export async function getPosts(options?: Params) {
  return await api.posts
    .browse({
      limit: 'all',
      ...(options && options)
    })
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}


export async function getPost(slug: string, options?: Params) {
  return await api.posts
    .read({
      slug,
    }, options)
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}

export async function getAuthors(options?: Params) {
  return await api.authors
    .browse({
      limit: 'all',
      ...(options && options)
    })
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}


export async function getAuthor(slug: string, options?: Params) {
  return await api.authors
    .read({
      slug,
    }, options)
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}

export async function getTags (options?: Params) {
  return await api.tags
  .browse({
    limit: 'all',
    ...(options && options)
  })
  .catch(err => {
    console.error(err);
    throw new Error(err)
  });
}

export async function getTag(slug: string, options?: Params) {
  return await api.tags
    .read({
      slug,
    }, options)
    .catch(err => {
      console.error(err);
      throw new Error(err)
    });
}