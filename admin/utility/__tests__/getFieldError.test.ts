import getFieldError from '../getFieldError'

import TResponseError from '@type/common/TResponseError'

describe('getFieldError Function', () => {
  it('should return empty string', () => {
    expect(getFieldError<IObject>(errorData, 'test1')).toEqual('')
    expect(getFieldError<IObject>(errorData, 'test4')).toEqual('')
  })

  it('should return value', () => {
    expect(getFieldError<IObject>(errorData, 'test2')).toEqual('Test2')
  })

  it('should return first value from array', () => {
    expect(getFieldError<IObject>(errorData, 'test3')).toEqual('Test1')
  })
})

interface IObject {
  test1: string
  test2: string
  test3: string
  test4: string
}

const errorData: TResponseError<IObject> = {
  test1: [],
  test2: ['Test2'],
  test3: ['Test1', 'Test2'],
  test4: 1 as any
}
