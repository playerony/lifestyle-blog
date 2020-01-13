import { validate, check } from '../index'

describe('validate Functions', () => {
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
