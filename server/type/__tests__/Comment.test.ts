import * as commentTypeList from '../Comment'
import { CommentType, CommentModel } from '../Comment'

describe('Comment Types', () => {
  it('should contain two objects', () => {
    expect(Object.keys(commentTypeList)).toHaveLength(2)
  })

  describe('CommentType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<CommentType> = {
        commentId: 1,
        articleId: 1,
        article: null,
        content: 'content',
        creator: 'creator',
        parentCommentId: 1,
        parentComment: null,
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'commentId',
        'articleId',
        'article',
        'content',
        'creator',
        'parentCommentId',
        'parentComment',
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
        article: null,
        content: 'content',
        creator: 'creator',
        parentCommentId: 1,
        parentComment: null,
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'commentId',
        'articleId',
        'article',
        'content',
        'creator',
        'parentCommentId',
        'parentComment',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})
