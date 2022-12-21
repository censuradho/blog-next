import { Author, PostOrPage } from "@tryghost/content-api";

export interface AuthorProps {
  author: Author
  posts: PostOrPage[]
}