import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { light, dark } from 'theme/'
import { lightMode, darkMode, localStorageKey, themeStorageKey  } from 'config/app'

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

export function ThemeProvider ({ children }: ThemeProviderProps) {
  const _isBrowser = isBrowser()

	const getIsDarkThemePreferences = useCallback(() => {
    return _isBrowser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }, [_isBrowser])

  const [themeStorage, setThemeStorage] = useLocalStorage(themeStorageKey, '')
  const [_isDarkThemePreferences, setIsDarkThemePreferences] = useState(getIsDarkThemePreferences())

	const mapTheme = useMemo(() => ({
		[darkMode]: dark,
		[lightMode]: light
	}), [])

	const savedTheme = 
    themeStorage
    || (_isDarkThemePreferences ? darkMode : lightMode)

	const [currentTheme, setCurrentTheme] = useState(savedTheme)
	const [theme, setTheme] = useState(mapTheme[currentTheme as keyof typeof mapTheme])

	useEffect(() => {
		_isBrowser && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const newColorScheme = event.matches ? darkMode : lightMode
			setCurrentTheme(newColorScheme)
		})
	}, [_isBrowser])



	const toggleTheme = useCallback(() => {
		setCurrentTheme(prevState => prevState === lightMode ? darkMode : lightMode)
	}, [])

	const handleSavePreference = useCallback((currentTheme: string) => {
		setThemeStorage(currentTheme)
	}, [])

	useEffect(() => {
		document.body.classList.remove('theme-default', dark)
		document.body.classList.add(mapTheme[currentTheme as keyof typeof mapTheme])

		setTheme(mapTheme[currentTheme as keyof typeof mapTheme])
		handleSavePreference(currentTheme)
	}, [currentTheme, handleSavePreference, mapTheme])

	useEffect(() => {
		globalStyle()
		setIsDarkThemePreferences(getIsDarkThemePreferences())
	}, [_isBrowser, getIsDarkThemePreferences])

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
