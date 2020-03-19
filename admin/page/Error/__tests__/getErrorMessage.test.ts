import getErrorMessage from '../getErrorMessage'

describe('getErrorMessage Function', () => {
  it('should return proper message', () => {
    expect(getErrorMessage('404')).toEqual('Not found.')
    expect(getErrorMessage('500')).toEqual('Internal Server Error.')
  })

  it('should return undefined', () => {
    expect(getErrorMessage('405')).toBeUndefined()
  })
})
