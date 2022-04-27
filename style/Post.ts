import { styled } from "stitches.config";

export const Main = styled('main', {
  width: '100%',
})

export const Container = styled('div', {
  width: '100%',
  margin: '0 auto',
  maxWidth: '50rem'
})

export const ImageHeroContainer = styled('div', {
  width: '100%',
  height: '30rem',
  position: 'relative'
})

export const Figure = styled('figure', {
  width: '100%',
  height: '30rem',
  position: 'relative'
})

export const Article = styled('article', {

  a: {
   color: '$primary' 
  },
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
export const Section = styled('section', {})

export const Footer = styled('footer', {})
