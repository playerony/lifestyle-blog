import Substitute, { Arg } from '@fluffy-spoon/substitute'

import VisitorResolver from '..'

import VisitorService from '@service/VisitorService'

import { VisitorType } from '@type/Visitor'

const _VisitorService = Substitute.for<VisitorService>()

let resolver: VisitorResolver

describe('Visitor Resolver', () => {
  beforeEach(() => {
    resolver = new VisitorResolver(_VisitorService)
  })

  beforeAll(() => {
    _VisitorService
      .findAll(Arg.any())
      .mimicks(async onlyArticles =>
        onlyArticles
          ? VISITOR_LIST_MOCK.filter(element => element.articleId)
          : VISITOR_LIST_MOCK
      )
  })

  describe('visitorList Query', () => {
    it('should return all visitors', async () => {
      const result = await resolver.visitorList()

      expect(result).toEqual(VISITOR_LIST_MOCK)
    })

    it('should return only article page visitors', async () => {
      const result = await resolver.visitorList(true)

      expect(result).toEqual([VISITOR_LIST_MOCK[0]])
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
    articleId: null,
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  }
]
