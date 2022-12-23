import GhostContentAPI, { Params } from "@tryghost/content-api";
import { GhostSettings } from "./types";

import { processEnv } from 'lib/processEnv'

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

export async function getAllSettings(): Promise<GhostSettings> {
  //const cached = getCache<SettingsResponse>('settings')
  //if (cached) return cached
  const settings = await api.settings.browse()
  settings.url = settings?.url?.replace(/\/$/, ``)

  const iconImage = settings.icon
  const logoImage = settings.logo
  const coverImage = settings.cover_image

  const result = {
    processEnv,
    ...settings,
    ...(iconImage && { iconImage }),
    ...(logoImage && { logoImage }),
    ...(coverImage && { coverImage }),
  }
  
  return result
}
