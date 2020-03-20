import * as constant from '../constant'

describe('constant Configuration', () => {
  it('should contain four values', () => {
    expect(Object.keys(constant)).toHaveLength(15)
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

  it('should have defined CAPTCHA_ERROR_MESSAGE property', () => {
    expect(constant.CAPTCHA_ERROR_MESSAGE).toEqual('Unexpected captcha error.')
  })

  it('should have defined CAPTCHA_EXIPRED_MESSAGE property', () => {
    expect(constant.CAPTCHA_EXIPRED_MESSAGE).toEqual(
      'Captcha challenge expired.'
    )
  })

  it('should have defined FORBIDDEN_ERROR_MESSAGE property', () => {
    expect(constant.FORBIDDEN_ERROR_MESSAGE).toEqual('Token expired.')
  })

  it('should have defined FORBIDDEN property', () => {
    expect(constant.FORBIDDEN).toEqual('FORBIDDEN')
  })

  it('should have defined VALIDATION_ERROR property', () => {
    expect(constant.VALIDATION_ERROR).toEqual('VALIDATION_ERROR')
  })

  it('should have defined UNAUTHENTICATED property', () => {
    expect(constant.UNAUTHENTICATED).toEqual('UNAUTHENTICATED')
  })

  it('should have defined INTERNAL_SERVER_ERROR property', () => {
    expect(constant.INTERNAL_SERVER_ERROR).toEqual('INTERNAL_SERVER_ERROR')
  })
})
