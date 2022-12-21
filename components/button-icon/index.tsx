import { memo, ComponentProps, ButtonHTMLAttributes } from 'react'

import { Icon } from 'components/icon'

import * as Styles from './styles'

type IconProps = ComponentProps<typeof Icon>
type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>


interface ButtonIconProps extends RootButtonProps  {
  icon: IconProps
}

function BaseButtonIcon ({ icon, ...props }: ButtonIconProps) {
  return (
    <Styles.Button {...props}>
      <Icon {...icon} />
    </Styles.Button>
  )
}

export const ButtonIcon = memo(BaseButtonIcon)