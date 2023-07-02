import { ButtonHTMLAttributes } from "react";
import { IconProps } from "../icon/types";

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconProps
}