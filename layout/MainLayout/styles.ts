import { styled } from "stitches.config";

export const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',

  '@rmd': {
    flexDirection: 'column-reverse'
  }
})

export const Content = styled('div', {
  flex: 1,
  overflowY: 'auto',
})