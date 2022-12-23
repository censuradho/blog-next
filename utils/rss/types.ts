import { PostOrPage } from "@tryghost/content-api";
import { GhostSettings } from "lib/ghost/types";

export interface FeedParams {
  settings: GhostSettings
  posts: PostOrPage[]
}

export interface FeedItem {
  settings: GhostSettings
  post: PostOrPage
}