export interface Tag {
  slug: string;
  label: string
}

export interface ArticleProps {
  title?: string
  createdAt?: string
  readTime?: number
  slug: string;
  author?: {
    avatarUrl?: string;
    name?: string;
    slug: string
  };
  tags?: Tag[]
}
