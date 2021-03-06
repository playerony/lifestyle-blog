import Check from '../Check'
import Validator from '../Validator'

describe('Validator class', () => {
  it('should throw an error', () => {
    try {
      new Validator({}).check()
    } catch (e) {
      expect(e.message).toEqual('Check list was not provided.')
    }
  })

  it('should return an empty object', () => {
    const result = new Validator({}).setCheckList([new Check('name')]).check()

    expect(result).toEqual({
      name: []
    })
  })

  it('should return errors for each field', () => {
    const result = new Validator({ login: 'testLogin', password: 'Maselko123' })
      .setCheckList([
        new Check('login')
          .isExist()
          .isString()
          .isMinLength(6),
        new Check('password')
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
      password: ['Podana wartość nie zawiera żadnych znaków specjalnych.']
    })
  })
})
