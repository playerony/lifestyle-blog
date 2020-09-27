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

    _CommentService.findAll().mimicks(async () => [COMMENT_RECORD_MOCK])

    _CommentService
      .incrementCommentLikes(Arg.any())
      .mimicks(async () => COMMENT_RECORD_MOCK.likes + 1)

    _CommentService
      .decrementCommentLikes(Arg.any())
      .mimicks(async () => COMMENT_RECORD_MOCK.likes - 1)

    _CommentService
      .findAllByArticleId(Arg.any())
      .mimicks(async articleId =>
        [COMMENT_RECORD_MOCK].filter(element => element.articleId === articleId)
      )
  })

  describe('createComment Mutation', () => {
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
              articleId: [],
              content: [
                'Podana wartość nie istnieje.',
                'Podany ciąg znaków jest mniejszy od 3.'
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

  describe('updateComment Mutation', () => {
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
              articleId: [],
              content: [
                'Podana wartość nie istnieje.',
                'Podany ciąg znaków jest mniejszy od 3.'
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

  describe('commentList Query', () => {
    it('should return all comments', async () => {
      const result = await resolver.commentList()

      expect(result).toEqual([COMMENT_RECORD_MOCK])
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
              'Podana wartość nie istnieje.',
              'Podana wartość nie jest liczbą.'
            ]
          })
        )
      }
    })
  })

  describe('incrementCommentLikes Query', () => {
    it('should return proper data', async () => {
      const result = await resolver.incrementCommentLikes(1)

      expect(result).toEqual(2)
    })

    it('should throw an error if articleId is wrong', async () => {
      try {
        await resolver.incrementCommentLikes(null as any)
      } catch (e) {
        expect(e.message).toEqual(
          JSON.stringify({
            commentId: [
              'Podana wartość nie istnieje.',
              'Podana wartość nie jest liczbą.'
            ]
          })
        )
      }
    })
  })

  describe('decrementCommentLikes Query', () => {
    it('should return proper data', async () => {
      const result = await resolver.decrementCommentLikes(1)

      expect(result).toEqual(0)
    })

    it('should throw an error if articleId is wrong', async () => {
      try {
        await resolver.decrementCommentLikes(null as any)
      } catch (e) {
        expect(e.message).toEqual(
          JSON.stringify({
            commentId: [
              'Podana wartość nie istnieje.',
              'Podana wartość nie jest liczbą.'
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
  likes: 1,
  commentId: 1,
  articleId: 1,
  content: 'content',
  creator: 'creator',
  parentCommentId: 1,
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
}
