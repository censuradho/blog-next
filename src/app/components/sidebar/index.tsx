import { SideBarProps } from "./types";

import styles from './styles.module.css'
import { Box } from "@/components";
import { resolvePath } from "utils/helpers";
import { paths } from "constants/routes";
import Link from "next/link";

export function Sidebar (props: SideBarProps) {
  const { tags } = props

  const renderTags = tags?.map(value => {
    const href = resolvePath(paths.tags, {
      slug: value.slug
    })

    return (
      <li key={value.slug} className={styles.section__tag__item}>
        <Link href={href}>{`#${value?.name}`}</Link>
      </li>
    )
  })
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__card}>
        <strong className={styles.sidebar__section__title}>Tags</strong>
        <nav>
          <ul className={styles.section__tag__list}>{renderTags}</ul>
        </nav>
      </div>
    </div>
  )
}