import { theme } from "stitches.config";
import { VariantProps } from "@stitches/react";
import { ReactNode } from "react";

import { Typography } from "./styles";

export interface TypographyProps extends VariantProps<typeof Typography> {
  children: ReactNode
  color?: keyof typeof theme.colors
  as?: any
  className?: string
}