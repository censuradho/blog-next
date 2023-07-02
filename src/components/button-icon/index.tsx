import { PropsWithChildren } from "react";
import { Icon } from "../icon";
import { ButtonIconProps } from "./types";

import styles from './styles.module.css'

export function ButtonIcon (props: ButtonIconProps) {
  const { 
    icon, 
    children, 
    ...otherProps 
  } = props
  
  return (
    <button className={styles.button_icon} {...otherProps}>
      <Icon size={25} {...icon} />
    </button>
  )
}