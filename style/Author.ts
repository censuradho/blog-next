import { styled } from "stitches.config";

export const Main = styled('main', {
  width: '100%',
})

export const Container = styled('div', {
  width: '100%',
  margin: '0 auto',
  maxWidth: '50rem'
})

export const Section = styled('section', {
  width: '100%',
  padding: '3rem 1rem',
})

export const Hero = styled(Section, {
  padding: '7rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$lightGray',
  flexDirection: 'column',
  gap: '$sm'
})

export const Username = styled('h1', {
  fontSize: '$lg',
  color: '$body',
  fontFamily: '$text'
})

export const Description = styled('p', {
  color: '$body',
  fontSize: '$sm',
  fontWeight: 'medium',
})

export const PostAmount = styled('span', {
  fontSize: '$sm',
  fontWeight: 'medium',
  color: '$body'
})