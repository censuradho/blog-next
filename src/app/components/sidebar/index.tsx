import Link from "next/link";


import { resolvePath } from "utils/helpers";
import { paths } from "constants/routes";

import { Box, Icon } from "@/components";

import styles from './styles.module.css'
import { SideBarProps } from "./types";


export function Sidebar (props: SideBarProps) {
  const { tags, social } = props

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

  const renderSocial = Object
    .entries(social)
    .map(([key, value]) => (
      <a
        key={key} 
        href={value}
        rel="noreferrer"
        target="_blank"
      >
        <Icon name={key as any} />
      </a>
    ))
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__card}>
        <strong className={styles.sidebar__section__title}>Tags</strong>
        <nav>
          <ul className={styles.section__tag__list}>{renderTags}</ul>
        </nav>
      </div>
      <Box gap={1} flexWrap="wrap">
        {renderSocial}
      </Box>
    </div>
  )
}