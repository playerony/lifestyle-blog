import getFieldError from '../getFieldError'

describe('getFieldError Function', () => {
  it('import getFieldError', () => {
    expect(typeof getFieldError).toEqual('function')
  })

  it('should return empty string when passed error data object is not defined', () => {
    expect(getFieldError(undefined, 'test1')).toEqual('')
  })

  it('should return empty string when passed object key is not defined', () => {
    expect(getFieldError(ERROR_DATA_MOCK, 'test1')).toEqual('')
    expect(getFieldError(ERROR_DATA_MOCK, 'test4')).toEqual('')
  })

  it('should return value when passed object key exists', () => {
    expect(getFieldError(ERROR_DATA_MOCK, 'test2')).toEqual('Test2')
  })

  it('should return first value from array', () => {
    expect(getFieldError(ERROR_DATA_MOCK, 'test3')).toEqual('Test1')
  })
})

const ERROR_DATA_MOCK = {
  test4: 1,
  test1: [],
  test2: ['Test2'],
  test3: ['Test1', 'Test2']
}
