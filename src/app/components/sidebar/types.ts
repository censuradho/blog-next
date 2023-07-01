import { Dictionary } from "@/dictionaries/types";
import { Tag } from "@tryghost/content-api";

export interface SideBarProps {
  tags: Tag[]
  social: Dictionary['social']
}