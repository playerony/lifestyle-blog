import Check from '../index'

describe('Check Class', () => {
  it('should create initial object', () => {
    const check = new Check('fieldName')

    expect(check.fieldName).toEqual('fieldName')
    expect(check.validatorList).toEqual([])
  })

  it('should add proper data to validatorList', () => {
    const check = new Check('fieldName')
      .isArray()
      .isBigLetter()
      .isDigit()
      .isExist()
      .isNumber()
      .isLetter()
      .isMaxLength(5)
      .isMinLength(1)
      .isSpecialCharacter()
      .isString()

    expect(check.validatorList.length).toEqual(10)
    expect(check.validatorList[2].function).toBeDefined()
    expect(check.validatorList[2].errorMessage).toBeDefined()
    expect(check.validatorList[2].argumentList).not.toBeDefined()

    expect(check.validatorList[7].argumentList).toEqual([1])
  })

  it('should attach passed error message', () => {
    const check = new Check('fieldName').isString('Test')

    expect(check.validatorList[0].errorMessage).toEqual('Test')
  })
})
