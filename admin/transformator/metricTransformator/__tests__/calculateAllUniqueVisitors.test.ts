import IVisitor from '@type/visitor/IVisitor'

import calculateAllUniqueVisitors from '../calculateAllUniqueVisitors'

describe('calculateAllUniqueVisitors Function', () => {
  it('import calculateAllUniqueVisitors', () => {
    expect(typeof calculateAllUniqueVisitors).toEqual('function')
  })

  it('should return zero for empty array', () => {
    const result = calculateAllUniqueVisitors([])

    expect(result).toEqual(0)
  })

  it('should return number of unqiue visitors', () => {
    const result = calculateAllUniqueVisitors(VISITOR_LIST_MOCK)

    expect(result).toEqual(2)
  })
})

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    ipAddress: 'ipAddress1'
  },
  {
    ipAddress: 'ipAddress2'
  },
  {
    ipAddress: 'ipAddress1'
  }
]
