import { styled } from "stitches.config";

export const Title = styled('h2', {
  fontSize: '$md',
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

export const CreatedAt = styled('span', {
  color: '$body',
  textTransform: 'uppercase',
  fontSize: '$sm',
  fontWeight: 'semi-bold'
})


export const Container = styled('article', {})