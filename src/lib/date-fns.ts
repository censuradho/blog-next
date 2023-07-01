import { format as dateFormat } from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function format (date: number | Date, format: string) {
  return dateFormat(date, format, {
    locale: ptBR
  })
}