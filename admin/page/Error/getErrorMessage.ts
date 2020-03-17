const errorMessages: { [key: string]: string } = {
  '404': 'Not found.',
  '500': 'Internal Server Error.'
}

export default (code: string): string => errorMessages[code]
