import * as constant from '../constant'

describe('constant defuned variable list', () => {
  it('should return one value', () => {
    expect(Object.keys(constant)).toHaveLength(3)
  })

  it('should have defined AUTH_TOKEN property', () => {
    expect(constant.AUTH_TOKEN).toEqual('auth_token')
  })

  it('should have defined IMAGE_ACCEPT_TYPE property', () => {
    expect(constant.IMAGE_ACCEPT_TYPE).toEqual('image/jpeg')
  })

  it('should have defined IMAGE_UPLOAD_ERROR_MESSAGE property', () => {
    expect(constant.IMAGE_UPLOAD_ERROR_MESSAGE).toEqual('Something went wrong.')
  })
})
