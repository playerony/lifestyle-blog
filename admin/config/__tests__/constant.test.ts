import * as constant from '../constant'

describe('constant defuned variable list', () => {
  it('should return one value', () => {
    expect(Object.keys(constant)).toHaveLength(1)
  })

  it('should have defined AUTH_TOKEN property', () => {
    expect(constant.AUTH_TOKEN).toEqual('auth_token')
  })
})
