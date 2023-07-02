import { IconProps } from "@/components/icon/types"
import { InputHTMLAttributes } from "react"

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  'placeholder'
  | 'id'
  | 'onChange'
  | 'onBlur'
  | 'onFocus'
  | 'value'
  | 'defaultValue'
>

export interface TextInputProps extends RootInputProps {
  variant?: 'default'
  label?: string
  errorMessage?: string
  leftIcon?: IconProps
  rightIcon?: IconProps
}