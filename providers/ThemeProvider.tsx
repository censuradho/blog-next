import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { light } from 'theme/'
import { DARK_THEME, LIGHT_THEME  } from 'constants/theme'
import { globalStyle } from 'stitches.config'
import { useLocalStorage } from 'hooks';
import { isBrowser } from 'utils';

interface ThemeContextData {
  toggleTheme: () => void;
  theme: Pick<(typeof light), 'colors'>;
  currentTheme: string
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

interface ThemeProviderProps {
  children: ReactNode
}

const LOCAL_STORAGE_KEY = '@censuradho'
export const THEME_KEY = LOCAL_STORAGE_KEY ? `${LOCAL_STORAGE_KEY}:theme` : '@planningPoker:theme'

export function ThemeProvider ({ children }: ThemeProviderProps) {

  const [themeStorage, setThemeStorage] = useLocalStorage(THEME_KEY, LIGHT_THEME)
  
	const mapTheme = useMemo(() => ({
		[DARK_THEME]: light,
		[LIGHT_THEME]: light
	}), [])

  const _isBrowser = isBrowser()

	const isDarkThemePreferences = () => {
    
    return _isBrowser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

	const savedTheme = 
    themeStorage
    || (isDarkThemePreferences() ? DARK_THEME : LIGHT_THEME)

	const [currentTheme, setCurrentTheme] = useState(savedTheme)
	const [theme, setTheme] = useState(mapTheme[currentTheme as keyof typeof mapTheme])

	useEffect(() => {
		_isBrowser && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const newColorScheme = event.matches ? DARK_THEME : LIGHT_THEME
			setCurrentTheme(newColorScheme)
		})
	}, [_isBrowser])



	const toggleTheme = useCallback(() => {    
		setCurrentTheme(prevState => prevState === DARK_THEME ? LIGHT_THEME : DARK_THEME)
	}, [])

	const handleSavePreference = useCallback(() => {
		setThemeStorage(currentTheme)
	}, [])

	useEffect(() => {
		document.body.classList.remove('theme-default', light)
		document.body.classList.add(mapTheme[currentTheme as keyof typeof mapTheme])

		setTheme(mapTheme[currentTheme as keyof typeof mapTheme])
		handleSavePreference()
	}, [currentTheme, handleSavePreference, mapTheme])

	useEffect(() => {
		globalStyle()
	}, [])


	return (
		<ThemeContext.Provider value={{ 
			toggleTheme, 
			theme, 
			currentTheme 
		}}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)