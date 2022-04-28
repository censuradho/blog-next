import { styled } from "stitches.config";

export const Header = styled('header', {
  height: '100%',
  borderRight: '1px solid $lightGray',
  width: '4.37rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.2rem 0'
})

export const LogoContainer = styled('div', {
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative'
})

export const Li = styled('li', {

  'svg > *': {
    fill: '$body',
  },

  '&:hover': {
    'svg > *': {
      fill: '$text',
    },
  },

  variants: {
    isActive: {
      true: {
        'svg > *': {
          fill: '$text',
        },
      }
    }
  }
})

export const Ul = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const Navigation = styled('nav', {
  margin: 'auto 0',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})