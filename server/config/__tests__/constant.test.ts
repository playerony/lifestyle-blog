import * as constant from '../constant'

describe('constant Configuration', () => {
  it('should contain three values', () => {
    expect(Object.keys(constant)).toHaveLength(3)
  })

  it('should have defined FORBIDDEN_ERROR_MESSAGE property', () => {
    expect(constant.FORBIDDEN_ERROR_MESSAGE).toEqual('Forbidden Error.')
  })

  it('should have defined VALIDATION_ERROR property', () => {
    expect(constant.VALIDATION_ERROR).toEqual('VALIDATION_ERROR')
  })

  it('should have defined WORDS_PER_MINUTE property', () => {
    expect(constant.WORDS_PER_MINUTE).toEqual(300)
  })
})
