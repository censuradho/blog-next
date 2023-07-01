import Link from "next/link";
import { TagProps } from "./types";
import { PropsWithChildren } from "react";

import styles from './styles.module.css'

export function Tag (props: PropsWithChildren<TagProps>) {
  const {
    children,
    ...otherProps
  } = props

  return (
    <Link
      className={styles.tag} 
      {...otherProps}
    >
      {children}
    </Link>
  )
}