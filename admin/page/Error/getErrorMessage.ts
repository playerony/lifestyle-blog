const errorMessages: { [key: string]: string } = {
  '404': 'Nie znaleziono.',
  '500': 'Wewnętrzny błąd serwera.'
}

export default (code: string): string => errorMessages[code]
