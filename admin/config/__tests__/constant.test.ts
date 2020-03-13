import * as constant from '../constant'

describe('constant defuned variable list', () => {
  it('should contain four values', () => {
    expect(Object.keys(constant)).toHaveLength(10)
  })

  it('should have defined AUTH_TOKEN property', () => {
    expect(constant.AUTH_TOKEN).toEqual('auth_token')
  })

  it('should have defined IMAGE_ACCEPT_TYPE property', () => {
    expect(constant.IMAGE_ACCEPT_TYPE).toEqual('image/jpeg')
  })

  it('should have defined IMAGE_UPLOAD_START_MESSAGE property', () => {
    expect(constant.IMAGE_UPLOAD_START_MESSAGE).toEqual(
      'The image starts generating...'
    )
  })

  it('should have defined IMAGE_UPLOAD_ERROR_MESSAGE property', () => {
    expect(constant.IMAGE_UPLOAD_ERROR_MESSAGE).toEqual('Something went wrong.')
  })

  it('should have defined IMAGE_UPLOAD_SUCCESS_MESSAGE property', () => {
    expect(constant.IMAGE_UPLOAD_SUCCESS_MESSAGE).toEqual(
      'Image was uploaded successfully.'
    )
  })

  it('should have defined ARTICLE_TOGGLE_ERROR_MESSAGE property', () => {
    expect(constant.ARTICLE_TOGGLE_ERROR_MESSAGE).toEqual(
      'Something went wrong.'
    )
  })

  it('should have defined ARTICLE_EDIT_MESSAGE property', () => {
    expect(constant.ARTICLE_EDIT_MESSAGE).toEqual(
      'Successfully edited an article.'
    )
  })

  it('should have defined ARTICLE_CREATE_MESSAGE property', () => {
    expect(constant.ARTICLE_CREATE_MESSAGE).toEqual(
      'Successfully created a new article.'
    )
  })

  it('should have defined VALIDATION_ERROR property', () => {
    expect(constant.VALIDATION_ERROR).toEqual('VALIDATION_ERROR')
  })

  it('should have defined UNAUTHENTICATED property', () => {
    expect(constant.UNAUTHENTICATED).toEqual('UNAUTHENTICATED')
  })
})
