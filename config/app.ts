export type DarkMode = 'dark' | 'light'
export const defaultMode: DarkMode = 'light'
export const lightMode: DarkMode = 'light'
export const darkMode: DarkMode = 'light'

/** RSS */
export const rssFeed: boolean = true

export const localStorageKey: string = '@censuradho'
export const themeStorageKey: string = `${localStorageKey}:theme`

/**
 * Incremental Static Regenerations (ISR)
 * Note: must be disbaled, when using `next export`
*/
export const isr: boolean = false
export const revalidate: number = 10
export const maxNumberOfPosts: number = 20
export const maxNumberOfPages: number = 20