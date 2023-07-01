export const appSettings = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || '@procergs-concurso-2023',
  siteUrl: process.env.NEXT_PUBLIC_API_URL || (process.env.VERCEL_URL && process.env.VERCEL_URL) || process.env.URL || 'http://localhost:3000',
  analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  ghost: {
    url: process.env.GHOST_URL || '',
    key: process.env.GHOST_KEY || '',
  }
}