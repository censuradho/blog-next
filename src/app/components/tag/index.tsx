import Link from "next/link";
import { TagProps } from "./types";
import { PropsWithChildren } from "react";

export function Tag (props: PropsWithChildren<TagProps>) {
  const {
    children,
    ...otherProps
  } = props

  return (
    <Link {...otherProps}>
      {children}
    </Link>
  )
}