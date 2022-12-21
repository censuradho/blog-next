import { createStitches } from '@stitches/react'
import { colors } from 'constants/theme/colors'
import { fonts } from 'constants/theme/fonts'
import { fontSizes } from 'constants/theme/fontSizes'
import { media } from 'constants/theme/media'
import { space } from 'constants/theme/space'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors,
    space,
		fonts,
    fontSizes,
  },
	media,
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
		fontFamily: '$title',
		lineHeight: '3.5rem'
	},
	h2: {
		fontFamily: '$title',
		fontWeight: '500',
		lineHeight: '4.3rem'
	},

	p: {
		fontFamily: '$text',
		lineHeight: '2rem'
	},
	hr: {
		width: '100%',
		height: 1,
		background: '$lightGray',
		border: 'none'
	},
	li: {
		listStyle: 'none'
	},
	a: {
    fontWeight: 500,
		cursor: 'pointer'
   },
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