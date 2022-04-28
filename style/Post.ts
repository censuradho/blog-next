import { styled } from "stitches.config";

export const Main = styled('main', {
  width: '100%',
})

export const Meta = styled('div', {
  color: '$text',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',
  gap: '$sm'
})

export const Container = styled('div', {
  width: '100%',
  margin: '0 auto',
  maxWidth: '50rem'
})

export const ImageHeroContainer = styled('div', {
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '30rem',
  position: 'relative',
  background: '$lightGray'
})

export const Figure = styled('figure', {
  width: '100%',
  height: '30rem',
  position: 'relative',

  img: {
    objectFit: 'cover'
  }
})

export const Username = styled('strong', {
  fontSize: '$sm',
  color: '$body',
  fontWeight: 'medium',
})

export const Article = styled('article', {
  p: {
    display: 'inline-block',
    marginBottom: '0.5rem'
  },
  strong: {
    display: 'inline-block',
    marginBottom: '0.8rem',
    lineHeight: '2.2rem'
  },
  figure: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
    position: 'relative',

    iframe: {
      objectFit: 'cover',
      width: '100%',
      height: '26rem'
    }
  }
})
export const Section = styled('section', {
  padding: '3rem 1rem'
})

export const Footer = styled('footer', {
  marginTop: '4rem'
})

export const Link = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer'
})