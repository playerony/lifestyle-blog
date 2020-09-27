import {
  createCommentValidation,
  updateCommentValidation,
  incrementCommentLikesValidation,
  decrementCommentLikesValidation,
  commentListByArticleIdValidation
} from '../CommentResolver.validator'

describe('CommentResolver.validator Functions', () => {
  describe('createCommentValidation Function', () => {
    it('import createCommentValidation', () => {
      expect(typeof createCommentValidation).toEqual('function')
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
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
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
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest mniejszy od 3.'
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
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest mniejszy od 2.',
            'Podany ciąg znaków jest większy od 20.'
          ])
        }
      })
    })
  })

  describe('updateCommentValidation Function', () => {
    it('import updateCommentValidation', () => {
      expect(typeof updateCommentValidation).toEqual('function')
    })

    describe('commentId Field', () => {
      it('should contain proper validators', () => {
        try {
          updateCommentValidation(null as any, {} as any)
        } catch (e) {
          const { commentId } = JSON.parse(e.message)

          expect(commentId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
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
          updateCommentValidation(1, data as any)
        } catch (e) {
          const { articleId } = JSON.parse(e.message)

          expect(articleId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
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
          updateCommentValidation(1, data as any)
        } catch (e) {
          const { content } = JSON.parse(e.message)

          expect(content).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest mniejszy od 3.'
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
          updateCommentValidation(1, data as any)
        } catch (e) {
          const { creator } = JSON.parse(e.message)

          expect(creator).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest mniejszy od 2.',
            'Podany ciąg znaków jest większy od 20.'
          ])
        }
      })
    })
  })

  describe('commentListByArticleIdValidation Function', () => {
    it('import commentListByArticleIdValidation', () => {
      expect(typeof commentListByArticleIdValidation).toEqual('function')
    })

    describe('articleId Field', () => {
      it('should contain proper validators', () => {
        try {
          commentListByArticleIdValidation(null as any)
        } catch (e) {
          const { articleId } = JSON.parse(e.message)

          expect(articleId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })
  })

  describe('incrementCommentLikesValidation Function', () => {
    it('import incrementCommentLikesValidation', () => {
      expect(typeof incrementCommentLikesValidation).toEqual('function')
    })

    describe('commentId Field', () => {
      it('should contain proper validators', () => {
        try {
          incrementCommentLikesValidation(null as any)
        } catch (e) {
          const { commentId } = JSON.parse(e.message)

          expect(commentId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })
  })

  describe('decrementCommentLikesValidation Function', () => {
    it('import decrementCommentLikesValidation', () => {
      expect(typeof decrementCommentLikesValidation).toEqual('function')
    })

    describe('commentId Field', () => {
      it('should contain proper validators', () => {
        try {
          decrementCommentLikesValidation(null as any)
        } catch (e) {
          const { commentId } = JSON.parse(e.message)

          expect(commentId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })
  })
})
