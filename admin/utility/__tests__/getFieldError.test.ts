import getFieldError from '../getFieldError'

import TResponseError from '@type/common/TResponseError'

describe('getFieldError Function', () => {
  it('import getFieldError', () => {
    expect(typeof getFieldError).toEqual('function')
  })

  it('should return empty string', () => {
    expect(getFieldError<IObject>(ERROR_DATA_MOCK, 'test1')).toEqual('')
    expect(getFieldError<IObject>(ERROR_DATA_MOCK, 'test4')).toEqual('')
  })

  it('should return value', () => {
    expect(getFieldError<IObject>(ERROR_DATA_MOCK, 'test2')).toEqual('Test2')
  })

  it('should return first value from array', () => {
    expect(getFieldError<IObject>(ERROR_DATA_MOCK, 'test3')).toEqual('Test1')
  })
})

interface IObject {
  test1: string
  test2: string
  test3: string
  test4: string
}

const ERROR_DATA_MOCK: TResponseError<IObject> = {
  test1: [],
  test4: 1 as any,
  test2: ['Test2'],
  test3: ['Test1', 'Test2']
}
