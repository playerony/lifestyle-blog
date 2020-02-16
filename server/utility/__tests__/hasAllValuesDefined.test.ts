import hasAllValuesDefined, { IInputData } from '../hasAllValuesDefined'

describe('hasAllValuesDefined Function', () => {
  describe('should return false', () => {
    it('when passed value is null', () => {
      const result = hasAllValuesDefined(null)
      expect(result).toBeFalsy()
    })

    it('when passed value is not defined', () => {
      const result = hasAllValuesDefined(undefined)
      expect(result).toBeFalsy()
    })

    it('when object contains falsy values', () => {
      const data: IInputData = {
        stringValue: '',
        nullValue: null,
        undefinedValue: undefined,
        NaNValue: NaN
      }

      const result = hasAllValuesDefined(data)
      expect(result).toBeFalsy()
    })

    it('when at least one object value is truthy', () => {
      const data: IInputData = {
        stringValue: 'Test',
        nullValue: null,
        undefinedValue: undefined,
        NaNValue: NaN,
        objectValue: {
          test: null
        }
      }

      const result = hasAllValuesDefined(data)
      expect(result).toBeFalsy()
    })
  })

  it('should return a true value when all object values are defined', () => {
    const data: IInputData = {
      stringValue: 'Test',
      nullValue: 123,
      undefinedValue: 113,
      NaNValue: 123,
      objectValue: {
        test: {
          test: 'Test'
        }
      }
    }

    const result = hasAllValuesDefined(data)
    expect(result).toBeTruthy()
  })
})
