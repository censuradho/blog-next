import { styled } from "stitches.config";


export const LogoContainer = styled('div', {
  background: '$lightGray',
  width: '3.4rem',
  height: '3.4rem',
  position: 'relative',
})

export const Header = styled('header', {
  padding: '0 1.2rem',
  height: '4.37rem',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'space-between'
})

export const Li = styled('li', {
  a: {
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '$md'
  }
})

export const Navigation = styled('nav', {
  position: 'fixed',
  top: 0,
  left: 0,
  background: '$background',
  padding: '1rem',
  zIndex: 100,
  width: '100%',
  height: '100vh',
  transform: 'scale(1.5)',
  opacity: 0,
  visibility: 'hidden',
  transition: '.2s',
  
  variants: {
    isOpen: {
      true: {
        transform: 'scale(1)',
        opacity: 1,
        visibility: 'visible'
      }
    }
  }
})

export const Ul = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$sm',
  margin: '2rem 0',

  'a:first-child': {
    color: '$primary'
  }
})