import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatterDate(date: string) {
  const dateFormatted = formatDistanceToNow(new Date(date), {
    locale: ptBR,
  })
  return dateFormatted
}
