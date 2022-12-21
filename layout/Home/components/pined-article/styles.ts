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

export const LinkText = styled('span', {
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
  fontWeight: '600'
})

export const ReadTime = styled('span', {
  color: '$body',
  fontSize: '$sm',
  fontWeight: 500
})
