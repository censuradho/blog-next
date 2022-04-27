import { styled } from "stitches.config";

export const Main = styled('main', {
  width: '100%',
  height: '100%'
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',
  padding: '1rem',
})


export const Articles = styled('div', {
  width: '100%',
  maxWidth: '45rem',
  margin: '0 auto',
})


export const SectionTitle = styled('h2', {
  fontFamily: '$text',
  fontSize: '$sm',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap'
})

export const Section = styled('section', {})