import getErrorMessage from '../getErrorMessage'

describe('getErrorMessage Function', () => {
  it('import getErrorMessage', () => {
    expect(typeof getErrorMessage).toEqual('function')
  })

  it('should return a default error message', () => {
    expect(getErrorMessage('isArray')).toEqual(
      'Podana wartość nie jest tablicą.'
    )

    expect(getErrorMessage('isBigLetter')).toEqual(
      'Podana wartość nie zawiera żadnej dużej litery.'
    )

    expect(getErrorMessage('isDigit')).toEqual(
      'Podana wartość nie zawiera żadnej cyfry.'
    )

    expect(getErrorMessage('isExist')).toEqual('Podana wartość nie istnieje.')

    expect(getErrorMessage('isLetter')).toEqual(
      'Podana wartość nie zawiera żadnej litery.'
    )

    expect(getErrorMessage('isMaxLength')).toEqual(
      `Podany ciąg znaków jest większy od undefined.`
    )

    expect(getErrorMessage('isMinLength')).toEqual(
      `Podany ciąg znaków jest mniejszy od undefined.`
    )

    expect(getErrorMessage('isString')).toEqual(
      'Podana wartość nie jest ciągiem znaków.'
    )

    expect(getErrorMessage('isSpecialCharacter')).toEqual(
      'Podana wartość nie zawiera żadnych znaków specjalnych.'
    )

    expect(getErrorMessage('isEqual')).toEqual(
      'Podane wartości nie są takie same.'
    )

    expect(getErrorMessage('isNumber')).toEqual(
      'Podana wartość nie jest liczbą.'
    )
  })

  it('should return passed message from parameter', () => {
    expect(getErrorMessage('isString', 'Test message')).toEqual('Test message')
  })

  it('should pass function parameters to the message', () => {
    expect(getErrorMessage('isMaxLength', undefined, { length: 3 })).toEqual(
      `Podany ciąg znaków jest większy od 3.`
    )

    expect(getErrorMessage('isMinLength', undefined, { length: 4 })).toEqual(
      `Podany ciąg znaków jest mniejszy od 4.`
    )
  })
})
