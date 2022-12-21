import { PostOrPage, Tag } from "@tryghost/content-api";

export interface TagProps {
  tag: Tag,
  posts: PostOrPage[]
}