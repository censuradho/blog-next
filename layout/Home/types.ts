import { PostsOrPages, Pagination } from "@tryghost/content-api";

export interface HomeProps {
  post: PostsOrPages,
  meta: Pagination
}