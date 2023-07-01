import { theme } from "@/config/theme";
import { icons } from "./icons";
import { IconProps } from "./types";

export function Icon(props: IconProps) {
  const {
    name, 
    color, 
    customColor, 
    size = 20,
  } = props;

  const Svg = icons[name];

  const fill = ((customColor || theme.colors[color as keyof typeof theme.colors])) as string;

  if (!Svg) return null
  
  return (
    <Svg
      size={size} 
      color={fill}
    />
  );
}