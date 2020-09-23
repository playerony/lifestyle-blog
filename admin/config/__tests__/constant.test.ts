import * as constant from '../constant'

describe('constant Configuration', () => {
  it('should contain four values', () => {
    expect(Object.keys(constant)).toHaveLength(20)
  })

  describe('cookie values', () => {
    it('should have defined AUTH_TOKEN property', () => {
      expect(constant.AUTH_TOKEN).toEqual('auth_token')
    })
  })

  describe('image values', () => {
    it('should have defined IMAGE_ACCEPT_TYPE property', () => {
      expect(constant.IMAGE_ACCEPT_TYPE).toEqual('image/jpeg')
    })

    it('should have defined IMAGE_UPLOAD_START_MESSAGE property', () => {
      expect(constant.IMAGE_UPLOAD_START_MESSAGE).toEqual(
        'Obraz zaczyna się uploadować...'
      )
    })

    it('should have defined IMAGE_UPLOAD_ERROR_MESSAGE property', () => {
      expect(constant.IMAGE_UPLOAD_ERROR_MESSAGE).toEqual('Coś poszło nie tak.')
    })

    it('should have defined IMAGE_UPLOAD_SUCCESS_MESSAGE property', () => {
      expect(constant.IMAGE_UPLOAD_SUCCESS_MESSAGE).toEqual(
        'Obraz został pomyślnie przesłany.'
      )
    })
  })

  describe('article values', () => {
    it('should have defined ARTICLE_TOGGLE_ERROR property', () => {
      expect(constant.ARTICLE_TOGGLE_ERROR).toEqual('Coś poszło nie tak.')
    })

    it('should have defined ARTICLE_EDIT_SUCCESS property', () => {
      expect(constant.ARTICLE_EDIT_SUCCESS).toEqual(
        'Pomyślnie zredagowano artykuł.'
      )
    })

    it('should have defined ARTICLE_EDIT_ERROR property', () => {
      expect(constant.ARTICLE_EDIT_ERROR).toEqual('Coś poszło nie tak.')
    })

    it('should have defined ARTICLE_CREATE_SUCCESS property', () => {
      expect(constant.ARTICLE_CREATE_SUCCESS).toEqual('Utworzono nowy artykuł.')
    })

    it('should have defined ARTICLE_CREATE_ERROR property', () => {
      expect(constant.ARTICLE_CREATE_ERROR).toEqual('Coś poszło nie tak.')
    })
  })

  describe('captcha values', () => {
    it('should have defined CAPTCHA_ERROR_MESSAGE property', () => {
      expect(constant.CAPTCHA_ERROR_MESSAGE).toEqual(
        'Nieoczekiwany błąd Captcha.'
      )
    })

    it('should have defined CAPTCHA_EXIPRED_MESSAGE property', () => {
      expect(constant.CAPTCHA_EXIPRED_MESSAGE).toEqual(
        'Wyzwanie Captcha wygasło.'
      )
    })
  })

  describe('backend error messages', () => {
    it('should have defined FORBIDDEN_ERROR_MESSAGE property', () => {
      expect(constant.FORBIDDEN_ERROR_MESSAGE).toEqual('Token stracił ważność.')
    })
  })

  describe('error name values', () => {
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

  it('should have defined BASE_DOCUMENT_TITLE property', () => {
    expect(constant.BASE_DOCUMENT_TITLE).toEqual(
      'Paweł Wojtasiński Blog - Panel Administratora |'
    )
  })

  describe('chart configuration values', () => {
    it('should have defined LOG_CHART_RECORDS_LIMIT property', () => {
      expect(constant.LOG_CHART_RECORDS_LIMIT).toEqual(-5)
    })

    it('should have defined METRIC_CHART_RECORDS_LIMIT property', () => {
      expect(constant.METRIC_CHART_RECORDS_LIMIT).toEqual(-5)
    })
  })
})
