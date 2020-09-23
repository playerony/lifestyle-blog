import getErrorMessage from '../getErrorMessage'

describe('getErrorMessage Function', () => {
  it('should return proper message', () => {
    expect(getErrorMessage('404')).toEqual('Nie znaleziono.')
    expect(getErrorMessage('500')).toEqual('Wewnętrzny błąd serwera.')
  })

  it('should return undefined', () => {
    expect(getErrorMessage('405')).toBeUndefined()
  })
})
