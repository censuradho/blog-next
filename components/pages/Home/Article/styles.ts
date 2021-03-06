import { styled } from "stitches.config";


export const Container = styled('article', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1rem'
})

export const Title = styled('h2', {
  fontSize: '$xlg',
  fontWeight: 'bold',
  fontFamily: '$title',
})

export const Link = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: 'inherit',

  '&:hover': {
    opacity: 0.8
  }
})

export const Description = styled('p', {
  fontSize: '$md',
  fontWeight: 'normal',
  lineHeight: '3.2rem'
})

export const CreatedAt = styled('span', {
  color: '$primary',
  textTransform: 'uppercase',
  fontSize: '$sm',
  fontWeight: 'semi-bold'
})

export const ReadTime = styled('span', {
  color: '$body',
  fontSize: '$sm',
})

export const Tag = styled('a', {
  color: 'white',
  background: '$primary',
  fontWeight: 'medium',
  fontSize: '$sm',
  textDecoration: 'none',
})