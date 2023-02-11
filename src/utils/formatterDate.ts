import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatterDate(date: string) {
  if (!date) {
    return ''
  }
  const dateFormatted = formatDistanceToNow(new Date(date), {
    locale: ptBR,
  })
  return dateFormatted
}
