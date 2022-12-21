import { fontSizes, colors } from "constants/theme";

import { styled } from "stitches.config";

import { parseToVariant } from "utils/theme";

import type { 
  VariantColors, 
  VariantFontSize 
} from "./types";

const fontSizesVariants = parseToVariant<VariantFontSize>(fontSizes, 'fontSize') 
const colorsVariants = parseToVariant<VariantColors>(colors, 'color') 


export const Typography = styled("span", {
  alignContent: 'baseline',
  variants: {
   size: fontSizesVariants,
   color: colorsVariants,
  },
})
