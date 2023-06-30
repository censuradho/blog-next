import { appSettings } from "@/config/app";
import GhostContentAPI, { Params } from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: appSettings.ghost.url,
  key: appSettings.ghost.key,
  version: 'v5.0'
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