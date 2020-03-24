import { check, isValid, validate } from '../index'

describe('validate Functions', () => {
  it('import check', () => {
    expect(typeof check).toEqual('function')
  })

  it('import isValid', () => {
    expect(typeof isValid).toEqual('function')
  })

  it('import validate', () => {
    expect(typeof validate).toEqual('function')
  })

  it('should throw an error', () => {
    try {
      validate({}).check()
    } catch (e) {
      expect(e.message).toEqual('Check list was not provided.')
    }
  })

  it('should return an empty object', () => {
    const result = validate({})
      .setCheckList([check('name')])
      .check()

    expect(result).toEqual({})
  })

  describe('isValid Function', () => {
    it('should return false when object is not valid', () => {
      const result = validate({ value: '1@' })
        .setCheckList([check('value').isLetter()])
        .check()

      expect(isValid(result)).toBeFalsy()
    })

    it('should return true when object is valid', () => {
      const result = validate({ value: '1a' })
        .setCheckList([check('value').isLetter()])
        .check()

      expect(isValid(result)).toBeTruthy()
    })
  })

  it('should return errors for each field', () => {
    const result = validate({ login: 'testLogin', password: 'Maselko123' })
      .setCheckList([
        check('login')
          .isExist()
          .isString()
          .isMinLength(6),
        check('password')
          .isExist()
          .isString()
          .isMinLength(6)
          .isMaxLength(12)
          .isLetter()
          .isBigLetter()
          .isDigit()
          .isSpecialCharacter()
      ])
      .check()

    expect(result).toEqual({
      login: [],
      password: ['Provided value does not contain any special character.']
    })
  })
})
