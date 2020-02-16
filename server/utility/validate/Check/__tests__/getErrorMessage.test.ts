import getErrorMessage from '../getErrorMessage'

describe('getErrorMessage Function', () => {
  it('should return a default error message', () => {
    expect(getErrorMessage('isArray')).toEqual(
      'Provided value is not an array.'
    )
    expect(getErrorMessage('isBigLetter')).toEqual(
      'Provided value does not contain any big letter.'
    )
    expect(getErrorMessage('isDigit')).toEqual(
      'Provided value does not contain any digit.'
    )
    expect(getErrorMessage('isExist')).toEqual('Provided value does not exist.')
    expect(getErrorMessage('isLetter')).toEqual(
      'Provided value does not contain any letter.'
    )
    expect(getErrorMessage('isMaxLength')).toEqual(
      `Provided value's length is longer than undefined.`
    )
    expect(getErrorMessage('isMinLength')).toEqual(
      `Provided value's length is shorter than undefined.`
    )
    expect(getErrorMessage('isString')).toEqual(
      'Provided value is not a string.'
    )
    expect(getErrorMessage('isSpecialCharacter')).toEqual(
      'Provided value does not contain any special character.'
    )
    expect(getErrorMessage('isEqual')).toEqual('Provided values are not same.')
    expect(getErrorMessage('isNumber')).toEqual(
      'Provided value is not a number.'
    )
  })

  it('should return passed message from parameter', () => {
    expect(getErrorMessage('isString', 'Test message')).toEqual('Test message')
  })

  it('should pass function parameters to the message', () => {
    expect(getErrorMessage('isMaxLength', undefined, { length: 3 })).toEqual(
      `Provided value's length is longer than 3.`
    )

    expect(getErrorMessage('isMinLength', undefined, { length: 4 })).toEqual(
      `Provided value's length is shorter than 4.`
    )
  })
})
