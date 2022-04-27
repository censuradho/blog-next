import { styled } from "stitches.config";

export const Container = styled('figure', {
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  background: '$lightGray',
  
  img: {
    width: '100%',
    height: '100%'
  },
  variants: {
    size: {
      sm: {
        width: '3.3rem',
        height: '3.3rem',
      },
      md: {
        width: '5rem',
        height: '5rem',
      },
      lg: {
        width: '7rem',
        height: '7rem',
      },
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})