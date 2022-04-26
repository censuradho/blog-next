import { createStitches } from '@stitches/react'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      background: '#F8F2EB',
      text: '#1D1B1A',
      alert: '#F8E176',
      primary: 'rgba(0,118,255,.9)'
    },
    space: {
      xs: '0.85rem',
			sm: '1.5rem',
			md: '3rem',
			lg: '4.3rem',
			xlg: '5rem',
    },
    fontSizes: {
			xs: '0.85rem',
			sm: '1rem',
			md: '1.5rem',
			lg: '2rem',
			xlg: '2.5rem',
		},
  }
})

const globalStyle =  GlobalCss({
	'*': {
		padding: '0',
		margin: '0',
		boxSizing: 'border-box',
		fonFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
		color: '$text'
	},
	body: {
		backgroundColor: '$background',
		width: '100%',
		height: '100%'
	},
	button: {
		background: 'none',
		border: 'none',
		cursor: 'pointer'
	},
	h1: {
		fontWeight: '500',
	},

	hr: {
		width: '100%',
		height: 1,
		background: '$foreground',
		border: 'none'
	},
	li: {
		listStyle: 'none'
	}
})

export {
  styled, 
  getCssText, 
  theme, 
  css, 
  keyframes, 
  createTheme,
  globalStyle
}