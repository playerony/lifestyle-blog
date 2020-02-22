import formatDate from '../formatDate'

describe('formatDate Function', () => {
  it('should return default date if parameter is not provided', () => {
    expect(formatDate()).toBeDefined()
  })

  it('should return formatted date', () => {
    expect(formatDate(new Date('2020'))).toEqual('2020.1.1')
    expect(formatDate(new Date('2019'))).toEqual('2019.1.1')
  })
})
