import calculateTodaysRecords from '../calculateTodaysRecords'

describe('calculateTodaysRecords Function', () => {
  it('should import', () => {
    expect(typeof calculateTodaysRecords).toEqual('function')
  })

  it('should return proper count of todays records', () => {
    expect(calculateTodaysRecords(LIST_MOCK)).toEqual(5)
  })

  it('should ignore records without createdAt property', () => {
    expect(calculateTodaysRecords([{}])).toEqual(0)
  })
})

const LIST_MOCK = [
  {
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    createdAt: new Date('2017')
  },
  {
    createdAt: new Date('2018')
  },
  {
    createdAt: new Date('2019')
  },
  {
    createdAt: new Date()
  }
]
