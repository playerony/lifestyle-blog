import { createCommentValidation } from '../CommentResolver.validator'

describe('CommentResolver.validator Functions', () => {
  describe('createCommentValidation Function', () => {
    it('import createCommentValidation', () => {
      expect(typeof createCommentValidation).toEqual('function')
    })

    describe('parentCommentId Field', () => {
      it('should contain proper validators', () => {
        const data = {
          parentCommentId: null
        }

        try {
          createCommentValidation(data as any)
        } catch (e) {
          const { parentCommentId } = JSON.parse(e.message)

          expect(parentCommentId).toEqual([
            'Provided value does not exist.',
            'Provided value is not a number.'
          ])
        }
      })
    })

    describe('articleId Field', () => {
      it('should contain proper validators', () => {
        const data = {
          articleId: null
        }

        try {
          createCommentValidation(data as any)
        } catch (e) {
          const { articleId } = JSON.parse(e.message)

          expect(articleId).toEqual([
            'Provided value does not exist.',
            'Provided value is not a number.'
          ])
        }
      })
    })

    describe('content Field', () => {
      it('should contain proper validators', () => {
        const data = {
          content: null
        }

        try {
          createCommentValidation(data as any)
        } catch (e) {
          const { content } = JSON.parse(e.message)

          expect(content).toEqual([
            'Provided value does not exist.',
            `Provided value's length is shorter than 3.`
          ])
        }
      })
    })

    describe('creator Field', () => {
      it('should contain proper validators', () => {
        const data = {
          creator: null
        }

        try {
          createCommentValidation(data as any)
        } catch (e) {
          const { creator } = JSON.parse(e.message)

          expect(creator).toEqual([
            'Provided value does not exist.',
            "Provided value's length is shorter than 2.",
            "Provided value's length is longer than 20."
          ])
        }
      })
    })
  })
})
