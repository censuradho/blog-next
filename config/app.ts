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

// Defaults for meta, if not configured in CMS
export const siteTitleMeta = 'Next.js Headless Ghost'
export const siteDescriptionMeta = 'blog system powered by Next.js and headless Ghost.'

// Defaults, if not configured in CMS
// Images can be fund in the /public folder
export const siteIcon = 'favicon.png'
export const siteImage = 'site-meta.png'
