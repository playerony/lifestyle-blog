const { dataTypes: DataTypes } = require('sequelize-test-helpers')

import { VisitorType } from '@type/Visitor'

let foundVisitorMock = jest.fn().mockImplementation(() => VISITOR_MOCK)
let createVisitorMock = jest.fn().mockImplementation(() => VISITOR_MOCK)

const setupSequelizeMock = (
  foundVisitor: Function = foundVisitorMock,
  createVisitor: Function = createVisitorMock
): typeof jest =>
  jest.doMock('sequelize', () => {
    class Sequelize {}

    class Model {
      public static init = jest.fn()
      public static findOne = foundVisitor
      public static create = createVisitor
    }

    return {
      Model,
      DataTypes,
      Sequelize
    }
  })

describe('VisitorService Service', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('create Method', () => {
    it('should return null value', async () => {
      setupSequelizeMock()

      const VisitorService = require('../VisitorService').default
      const visitorService = new VisitorService()

      const result = await visitorService.create(
        VISITOR_MOCK.articleId,
        VISITOR_MOCK
      )

      expect(result).toEqual(null)
    })

    it('should return created visitor value', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const VisitorService = require('../VisitorService').default
      const visitorService = new VisitorService()

      const result = await visitorService.create(
        VISITOR_MOCK.articleId,
        VISITOR_MOCK
      )

      expect(result).toEqual(VISITOR_MOCK)
    })
  })
})

const VISITOR_MOCK: VisitorType = {
  visitorId: 1,
  articleId: 1,
  userAgent: 'Mobile',
  ipAddress: '192.192.192.192'
}
