import differenceBetweenDates from '../differenceBetweenDates'

describe('differenceBetweenDates Function', () => {
  it('should import', () => {
    expect(typeof differenceBetweenDates).toEqual('function')
  })

  it('should set the source data to current when provided value is falsy', () => {
    expect(differenceBetweenDates(null)).toEqual('Chwilę temu')
  })

  it('should return difference between two dates', () => {
    expect(differenceBetweenDates(new Date('2020'), new Date('2019'))).toEqual(
      '12 miesięcy temu'
    )
  })
})
