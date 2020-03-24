import visitorMapping from '../visitorMapping'

import { VisitorType, VisitorModel } from '@type/Visitor'

describe('visitorMapping Mapping', () => {
  it('import visitorMapping', () => {
    expect(typeof visitorMapping).toEqual('function')
  })

  it('should return proper object', () => {
    expect(visitorMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: Partial<VisitorModel> = {
  visitorId: 1,
  articleId: 1,
  ipAddress: '192'
}

const OUTPUT_MOCK: VisitorType = {
  visitorId: 1,
  articleId: 1,
  ipAddress: '192',
  userAgent: undefined,
  updatedAt: undefined,
  createdAt: undefined
}
