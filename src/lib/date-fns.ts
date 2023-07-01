import { 
  format as dateFormat,
  formatDistance as dateFormatDistance 
} from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function format (date: number | Date, format: string) {
  return dateFormat(date, format, {
    locale: ptBR
  })
}

export function formatDistance (date: number | Date, baseDate: number | Date) {
  return dateFormatDistance(date, baseDate, {
    locale: ptBR
  })
}