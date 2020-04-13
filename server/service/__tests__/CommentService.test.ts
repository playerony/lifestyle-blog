import { CommentType } from '@type/Comment'

import CommentService from '../CommentService'

jest.doMock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static update = jest.fn()
    public static belongsTo = jest.fn()
    public static create = jest.fn().mockImplementation(() => COMMENT_MOCK)
    public static findOne = jest.fn().mockImplementation(() => COMMENT_MOCK)
    public static findAll = jest.fn().mockImplementation(() => [COMMENT_MOCK])
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

const setUp = (): CommentService => {
  const CommentService = require('../CommentService').default

  return new CommentService()
}

describe('Comment Service', () => {
  describe('create Method', () => {
    it('should return created comment', async () => {
      const commentService = setUp()

      const result = await commentService.create(COMMENT_MOCK)

      expect(result).toEqual(COMMENT_MOCK)
    })
  })

  describe('update Method', () => {
    it('should return updated comment', async () => {
      const commentService = setUp()

      const result = await commentService.update(1, COMMENT_MOCK)

      expect(result).toEqual(COMMENT_MOCK)
    })
  })

  describe('findById Method', () => {
    it('should return found comment', async () => {
      const commentService = setUp()

      const result = await commentService.findById(1)

      expect(result).toEqual(COMMENT_MOCK)
    })
  })

  describe('findAllByArticleId Method', () => {
    it('should return found comment list', async () => {
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
