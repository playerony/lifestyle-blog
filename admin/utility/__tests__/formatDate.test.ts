import formatDate from '../formatDate'

describe('formatDate Function', () => {
  it('import formatDate', () => {
    expect(typeof formatDate).toEqual('function')
  })

  it('should return default date if parameter is not provided', () => {
    expect(formatDate()).toBeDefined()
  })

  it('should return formatted date', () => {
    expect(formatDate(new Date('2020'))).toEqual('01.01.2020')
    expect(formatDate(new Date('2019'))).toEqual('01.01.2019')
  })
})
