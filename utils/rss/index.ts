import fs from 'fs'

import { Tag } from '@tryghost/content-api';
import { 
  siteDescriptionMeta, 
  siteIcon, 
  siteTitleMeta,

} from 'config/app';

import RSS from 'rss';
import { resolve } from 'url';

import type { FeedParams, FeedItem } from './types';

const generateItem = ({ post, settings }: FeedItem) => {
  const { siteUrl } = settings.processEnv
  const {
    url = '',
    canonical_url = '',
    title = '',
    excerpt: description = '',
    id: guid,
    published_at: date = '',
    tags,
    primary_author: author,
  } = post

  const cmsUrl = settings.url || ''
  const postUrl = canonical_url || url
  const itemUrl = postUrl?.replace(cmsUrl, siteUrl)

  const tagsFilter = (tags: Tag[]) => tags
  .filter(({ name }) => !!name && name.substr(0, 5) !== 'hash-')
  .map(({ name }) => name || '')

  return {
    title,
    description,
    url: itemUrl,
    guid,
    date: date || '',
    ...(tags && { categories: tagsFilter(tags) }),
    ...(author && { author: author.name }),
  }
}


export async function generateRssFeed(params: FeedParams) {
  const { settings, posts } = params
  const { siteUrl } = settings.processEnv
  
  const feedOptions = {
    title: siteTitleMeta,
    description: siteDescriptionMeta,
    feed_url: resolve(siteUrl, 'rss/'),
    site_url: resolve(siteUrl, ''),
    image_url: resolve(siteUrl, siteIcon),
    ttl: 60,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
  };

  const feed = new RSS(feedOptions);

  const feedItems = posts.map(post => generateItem({ post, settings }))

  feedItems.forEach(item => feed.item(item))  

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
 }