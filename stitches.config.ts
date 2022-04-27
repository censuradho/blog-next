import { createStitches } from '@stitches/react'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      background: '##f1f2f5',
			foreground: '#EFE9E2',
      text: '#1D1B1A',
			body: '#757575',
			lightGray: '#c5d2d9',
      alert: '#F8E176',
      primary: 'rgba(0,118,255,.9)',
			green: '#45c32e',
			red: '#ef1818',
			
    },
    space: {
      xs: '0.85rem',
			sm: '1.5rem',
			md: '3rem',
			lg: '4.3rem',
			xlg: '5rem',
    },
		fonts: {
			title: 'Libre Bodoni, serif',
			text: 'Poppins, sans-serif'
		},
    fontSizes: {
			xs: '0.85rem',
			sm: '1rem',
			md: '1.8rem',
			lg: '2rem',
			xlg: '2.5rem',
		},
  },
	media: {
		xs: '(min-width: 28.125rem)',
		sm: '(min-width: 40rem)',
		md: '(min-width: 45.625rem)',
		lg: '(min-width: 64rem)',
		dark: '(prefers-color-scheme: dark)',
	},
})

const globalStyle =  GlobalCss({
	'*': {
		padding: '0',
		margin: '0',
		boxSizing: 'border-box',
		fontFamily: 'Poppins, sans-serif',
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
		fontFamily: '$title'
	},
	h2: {
		fontFamily: '$title',
		fontWeight: '500',
		lineHeight: '4.3rem'
	},

	p: {
		fontFamily: '$text'
	},
	hr: {
		width: '100%',
		height: 1,
		background: '$lightGray',
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