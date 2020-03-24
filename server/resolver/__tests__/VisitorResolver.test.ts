import Substitute from '@fluffy-spoon/substitute'

import VisitorResolver from '../VisitorResolver'

import VisitorService from '@service/VisitorService'

import { VisitorType } from '@type/Visitor'

const _VisitorService = Substitute.for<VisitorService>()

let resolver: VisitorResolver

describe('VisitorResolver Resolver', () => {
  beforeEach(() => {
    resolver = new VisitorResolver(_VisitorService)
  })

  beforeAll(() => {
    _VisitorService.findAll().mimicks(async () => VISITOR_LIST_MOCK)
  })

  describe('visitorList Method', () => {
    it('should return proper data', async () => {
      const result = await resolver.visitorList()

      expect(result).toEqual(VISITOR_LIST_MOCK)
    })
  })
})

const VISITOR_LIST_MOCK: VisitorType[] = [
  {
    visitorId: 1,
    articleId: 1,
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  },
  {
    visitorId: 2,
    articleId: 1,
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  }
]
