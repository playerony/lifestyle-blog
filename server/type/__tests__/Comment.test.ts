import * as commentTypeList from '../Comment'
import { CommentType, CommentModel, CommentSaveRequest } from '../Comment'

describe('Comment Types', () => {
  it('should contain two objects', () => {
    expect(Object.keys(commentTypeList)).toHaveLength(3)
  })

  describe('CommentType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<CommentType> = {
        commentId: 1,
        articleId: 1,
        content: 'content',
        creator: 'creator',
        parentCommentId: 1,
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'commentId',
        'articleId',
        'content',
        'creator',
        'parentCommentId',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('CommentModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<CommentModel> = {
        commentId: 1,
        articleId: 1,
        content: 'content',
        creator: 'creator',
        parentCommentId: 1,
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'commentId',
        'articleId',
        'content',
        'creator',
        'parentCommentId',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('CommentSaveRequest Type', () => {
    it('should contain proper fields', () => {
      const data: Required<CommentSaveRequest> = {
        articleId: 1,
        content: 'content',
        creator: 'creator',
        parentCommentId: 1
      }

      expect(Object.keys(data)).toEqual([
        'articleId',
        'content',
        'creator',
        'parentCommentId'
      ])
    })
  })
})
