import tryParseJSON from '../tryParseJSON'

describe('tryParseJSON Function', () => {
  it('should import', () => {
    expect(typeof tryParseJSON).toEqual('function')
  })

  it('should return null when passed object is invalid', () => {
    expect(tryParseJSON('123')).toBeNull()
  })

  it('should return object when passed string is valid', () => {
    const data = { test: 'test' }

    expect(tryParseJSON(JSON.stringify(data))).toEqual(data)
  })
})
