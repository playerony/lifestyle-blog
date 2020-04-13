import Substitute, { Arg } from '@fluffy-spoon/substitute'

import CommentResolver from '../index'

import CommentService from '@service/CommentService'

import { CommentType, CommentSaveRequest } from '@type/Comment'

const _CommentService = Substitute.for<CommentService>()

let resolver: CommentResolver

describe('Comment Resolver', () => {
  beforeEach(() => {
    resolver = new CommentResolver(_CommentService)
  })

  beforeAll(() => {
    _CommentService
      .update(Arg.any(), Arg.any())
      .mimicks(
        async (commentId: number) =>
          [COMMENT_RECORD_MOCK].find(
            element => element.commentId === commentId
          ) || null
      )

    _CommentService.create(Arg.any()).mimicks(async () => COMMENT_RECORD_MOCK)

    _CommentService
      .findAllByArticleId(Arg.any())
      .mimicks(async articleId =>
        [COMMENT_RECORD_MOCK].filter(element => element.articleId === articleId)
      )
  })

  describe('createComment mutation', () => {
    describe('should throw an error', () => {
      it('if passed content data is wrong', async () => {
        try {
          await resolver.createComment({
            ...COMMENT_SAVE_REQUEST_MOCK,
            content: ''
          })
        } catch (e) {
          expect(e.message).toEqual(
            JSON.stringify({
              parentCommentId: [],
              articleId: [],
              content: [
                'Provided value does not exist.',
                `Provided value's length is shorter than 3.`
              ],
              creator: []
            })
          )
        }
      })
    })

    it('should return proper data', async () => {
      const result = await resolver.createComment(COMMENT_SAVE_REQUEST_MOCK)

      expect(result).toEqual(COMMENT_RECORD_MOCK)
    })
  })

  describe('updateComment mutation', () => {
    describe('should throw an error', () => {
      it('if passed content data is wrong', async () => {
        try {
          await resolver.updateComment(1, {
            ...COMMENT_SAVE_REQUEST_MOCK,
            content: ''
          })
        } catch (e) {
          expect(e.message).toEqual(
            JSON.stringify({
              commentId: [],
              parentCommentId: [],
              articleId: [],
              content: [
                'Provided value does not exist.',
                `Provided value's length is shorter than 3.`
              ],
              creator: []
            })
          )
        }
      })
    })

    it('should return proper data', async () => {
      const result = await resolver.updateComment(1, COMMENT_SAVE_REQUEST_MOCK)

      expect(result).toEqual(COMMENT_RECORD_MOCK)
    })
  })

  describe('commentListByArticleId Query', () => {
    it('should return proper data', async () => {
      const result = await resolver.commentListByArticleId(1)

      expect(result).toEqual([COMMENT_RECORD_MOCK])
    })

    it('should throw an error if articleId is wrong', async () => {
      try {
        await resolver.commentListByArticleId(null as any)
      } catch (e) {
        expect(e.message).toEqual(
          JSON.stringify({
            articleId: [
              'Provided value does not exist.',
              'Provided value is not a number.'
            ]
          })
        )
      }
    })
  })
})

const COMMENT_SAVE_REQUEST_MOCK: Required<CommentSaveRequest> = {
  articleId: 1,
  content: 'content',
  creator: 'creator',
  parentCommentId: 1
}

const COMMENT_RECORD_MOCK: Required<CommentType> = {
  commentId: 1,
  articleId: 1,
  content: 'content',
  creator: 'creator',
  parentCommentId: 1,
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
}
