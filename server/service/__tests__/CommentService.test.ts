import { CommentType } from '@type/Comment'

const findCommentMock = jest.fn().mockImplementation(() => COMMENT_MOCK)

const setupSequelizeMock = (
  findComment: Function = findCommentMock
): typeof jest =>
  jest.doMock('sequelize', () => {
    const { dataTypes: DataTypes } = require('sequelize-test-helpers')

    class Sequelize {}

    class Model {
      public static init = jest.fn()
      public static update = jest.fn()
      public static belongsTo = jest.fn()
      public static findOne = findComment
      public static create = jest.fn().mockImplementation(() => COMMENT_MOCK)
      public static findAll = jest.fn().mockImplementation(() => [COMMENT_MOCK])
    }

    return {
      Model,
      DataTypes,
      Sequelize
    }
  })

const setUp = () => {
  const CommentService = require('../CommentService').default

  return new CommentService()
}

describe('Comment Service', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('create Method', () => {
    it('should return created comment', async () => {
      setupSequelizeMock()

      const commentService = setUp()
      const result = await commentService.create(COMMENT_MOCK)

      expect(result).toEqual(COMMENT_MOCK)
    })
  })

  describe('update Method', () => {
    it('should throw an error if comment does not exist', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const commentService = setUp()

      try {
        await commentService.update(1, COMMENT_MOCK)
      } catch (e) {
        expect(e.message).toEqual('{"commentId":["No such comment found."]}')
      }
    })

    it('should return updated comment', async () => {
      setupSequelizeMock()

      const commentService = setUp()
      const result = await commentService.update(1, COMMENT_MOCK)

      expect(result).toEqual(COMMENT_MOCK)
    })
  })

  describe('findById Method', () => {
    it('should return found comment', async () => {
      setupSequelizeMock()

      const commentService = setUp()
      const result = await commentService.findById(1)

      expect(result).toEqual(COMMENT_MOCK)
    })
  })

  describe('findAllByArticleId Method', () => {
    it('should return found comment list', async () => {
      setupSequelizeMock()

      const commentService = setUp()
      const result = await commentService.findAllByArticleId(1)

      expect(result).toEqual([COMMENT_MOCK])
    })
  })
})

const COMMENT_MOCK: CommentType = {
  commentId: 1,
  articleId: 1,
  content: 'content',
  creator: 'creator',
  parentCommentId: 1,
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
}
