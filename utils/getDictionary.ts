import 'server-only'

const dictionaries = {
  'pt-BR': () => import('@/dictionaries/pt-BR.json').then((module) => module.default),
}

export const getDictionary = async () => dictionaries['pt-BR']()