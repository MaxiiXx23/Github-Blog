export function formatterSearch(search: string): string {
  const searchFormatted = search.replace(' ', '%20')

  return searchFormatted
}
