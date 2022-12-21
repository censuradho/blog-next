import { StandardLonghandProperties } from '@stitches/react/types/css'

export function parseToVariant <T>(obj: Record<string, string>, property: keyof StandardLonghandProperties) {
  return Object
  .entries(obj)
  .map(([value]) => ({
    [value]: {
      [property]: `$${value}`
    }
  }))
  .reduce((prev, next) => ({
    ...prev,
    ...next
  }), {}) as unknown as T
}