import { DefaultThemeMap } from '@stitches/react';
import { useTheme } from 'providers';
import { memo } from 'react';
import { icons } from './icons'

export type IconNames = keyof typeof icons

type Colors  = ReturnType<typeof useTheme>['theme']['colors']

interface IconProps {
  name: IconNames;
  size?: number;
  color?: keyof Colors;
  customColor?: string
}


function BaseIcon ({ name, color, customColor, ...props }: IconProps) {
  const Component = icons[name]
  const { theme } = useTheme()
  
  return (
    <Component 
      size={20} 
      {...props} 
      style={{ fill: customColor || theme?.colors[color || 'text'].value }} 
    />
  )
}

export const Icon = memo(BaseIcon)
