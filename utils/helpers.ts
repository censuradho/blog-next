export function toLocaleString (value: number) {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  })
} 

export const isBrowser = () => typeof window !== 'undefined'

export const resolvePath = (path: string, obj: Record<string, any>) => {
  let tempPath = path

  Object.keys(obj).map(key => (tempPath = tempPath.replace(`:${key}`, obj[key])))

  return tempPath
}
