const { dataTypes: DataTypes } = require('sequelize-test-helpers')

import VisitorService from '../VisitorService'

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
      public static findAll = jest.fn().mockImplementation(() => [VISITOR_MOCK])
    }

    return {
      Model,
      DataTypes,
      Sequelize
    }
  })

const setUp = (): VisitorService => {
  const VisitorService = require('../VisitorService').default

  return new VisitorService()
}

describe('Visitor Service', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('create Method', () => {
    it('should return null value', async () => {
      setupSequelizeMock()

      const visitorService = setUp()

      const result = await visitorService.create(
        VISITOR_MOCK.articleId,
        VISITOR_MOCK
      )

      expect(result).toEqual(null)
    })

    it('should return created visitor value', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const visitorService = setUp()

      const result = await visitorService.create(
        VISITOR_MOCK.articleId,
        VISITOR_MOCK
      )

      expect(result).toEqual(VISITOR_MOCK)
    })
  })

  describe('findAll Method', () => {
    it('should return found visitor list', async () => {
      const articleService = setUp()

      const result = await articleService.findAll()

      expect(result).toEqual([VISITOR_MOCK])
    })
  })
})

const VISITOR_MOCK: Required<VisitorType> = {
  visitorId: 1,
  articleId: 1,
  userAgent: 'Mobile',
  ipAddress: '192.192.192.192',
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
}
