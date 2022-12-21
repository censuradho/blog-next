import { Libre_Bodoni, Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['500', '600'],
  variable: '--title',
})
const libreBodoni = Libre_Bodoni({
  variable: '--text'
})

export const fonts = {
  title: `var(${poppins.variable})`,
  text: `var(${libreBodoni.variable})`
}