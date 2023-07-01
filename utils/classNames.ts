export function classNames (classes: Record<string, boolean>, defaultClasses?: string[]) {
  const parsed =  Object
    .entries(classes)
    .filter(([key, value]) => value)
    .map(([key]) => key)
    
  return [
    ...(defaultClasses || []),
    ...parsed
  ].join(' ')
}

/**
 * classGroupe('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]') // → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
*/
export function classGroupe (...args: any[]) {
  return args.join(' ')
}