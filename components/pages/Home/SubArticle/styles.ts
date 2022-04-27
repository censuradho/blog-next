import { styled } from "stitches.config";

export const Title = styled('h2', {
  fontSize: '$md',
  fontWeight: 'bold',
  fontFamily: '$title',
  lineHeight: '2.9rem'
})

export const Link = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: 'inherit',
  cursor: 'pointer',
  
  '&:hover': {
    opacity: 0.8
  }
})

export const CreatedAt = styled('span', {
  color: '$body',
  textTransform: 'uppercase',
  fontSize: '$xs',
  fontWeight: 'semi-bold'
})


export const Container = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$sm'
})

export const Tag = styled('a', {
  color: 'white',
  background: '$primary',
  fontWeight: 'medium',
  fontSize: '$sm',
  textDecoration: 'none',
})

export const AvatarContainer = styled('div', {
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative'
})

export const Username = styled('strong', {
  fontSize: '$sm'
})