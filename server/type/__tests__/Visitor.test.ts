import * as visitorTypeList from '../Visitor'
import { VisitorType, VisitorModel } from '../Visitor'

describe('Visitor Types', () => {
  it('should contain two objects', () => {
    expect(Object.keys(visitorTypeList)).toHaveLength(2)
  })

  describe('VisitorType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<VisitorType> = {
        visitorId: 1,
        articleId: 1,
        ipAddress: '192',
        userAgent: 'Mobile',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'visitorId',
        'articleId',
        'ipAddress',
        'userAgent',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('VisitorModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<VisitorModel> = {
        visitorId: 1,
        articleId: 1,
        ipAddress: '192',
        userAgent: 'Mobile',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'visitorId',
        'articleId',
        'ipAddress',
        'userAgent',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})
