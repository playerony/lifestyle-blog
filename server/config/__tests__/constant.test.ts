import * as constant from '../constant'

describe('constant Configuration', () => {
  it('should contain two values', () => {
    expect(Object.keys(constant)).toHaveLength(2)
  })

  it('should have defined FORBIDDEN_ERROR_MESSAGE property', () => {
    expect(constant.FORBIDDEN_ERROR_MESSAGE).toEqual('Forbidden Error.')
  })

  it('should have defined VALIDATION_ERROR property', () => {
    expect(constant.VALIDATION_ERROR).toEqual('VALIDATION_ERROR')
  })
})
