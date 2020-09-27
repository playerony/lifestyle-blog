import {
  articleByIdValidation,
  createArticleValidation,
  updateArticleValidation,
  incrementArticleLikesValidation,
  toggleArticlePublicFlagValidation
} from '../ArticleResolver.validator'

describe('ArticleResolver.validator Functions', () => {
  describe('createArticleValidation Function', () => {
    it('import createArticleValidation', () => {
      expect(typeof createArticleValidation).toEqual('function')
    })

    describe('imageId Field', () => {
      it('should contain proper validators', () => {
        const data = {
          imageId: null
        }

        try {
          createArticleValidation(data as any)
        } catch (e) {
          const { imageId } = JSON.parse(e.message)

          expect(imageId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })

    describe('title Field', () => {
      it('should contain proper validators', () => {
        const data = {
          title: null
        }

        try {
          createArticleValidation(data as any)
        } catch (e) {
          const { title } = JSON.parse(e.message)

          expect(title).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest większy od 40.'
          ])
        }
      })
    })

    describe('description Field', () => {
      it('should contain proper validators', () => {
        const data = {
          description: null
        }

        try {
          createArticleValidation(data as any)
        } catch (e) {
          const { description } = JSON.parse(e.message)

          expect(description).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest większy od 100.'
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
          createArticleValidation(data as any)
        } catch (e) {
          const { content } = JSON.parse(e.message)

          expect(content).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest mniejszy od 20.'
          ])
        }
      })
    })

    describe('categoryIdList Field', () => {
      it('should contain proper validators', () => {
        const data = {
          categoryIdList: null
        }

        try {
          createArticleValidation(data as any)
        } catch (e) {
          const { categoryIdList } = JSON.parse(e.message)

          expect(categoryIdList).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest tablicą.',
            'Podany ciąg znaków jest mniejszy od 1.'
          ])
        }
      })
    })
  })

  describe('updateArticleValidation Function', () => {
    it('import updateArticleValidation', () => {
      expect(typeof updateArticleValidation).toEqual('function')
    })

    describe('articleId Field', () => {
      it('should contain proper validators', () => {
        const data = {
          imageId: null
        }

        try {
          updateArticleValidation(null as any, data as any)
        } catch (e) {
          const { articleId } = JSON.parse(e.message)

          expect(articleId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })

    describe('imageId Field', () => {
      it('should contain proper validators', () => {
        const data = {
          imageId: null
        }

        try {
          updateArticleValidation(1, data as any)
        } catch (e) {
          const { imageId } = JSON.parse(e.message)

          expect(imageId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })

    describe('title Field', () => {
      it('should contain proper validators', () => {
        const data = {
          title: null
        }

        try {
          updateArticleValidation(1, data as any)
        } catch (e) {
          const { title } = JSON.parse(e.message)

          expect(title).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest większy od 40.'
          ])
        }
      })
    })

    describe('description Field', () => {
      it('should contain proper validators', () => {
        const data = {
          description: null
        }

        try {
          updateArticleValidation(1, data as any)
        } catch (e) {
          const { description } = JSON.parse(e.message)

          expect(description).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest większy od 100.'
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
          updateArticleValidation(1, data as any)
        } catch (e) {
          const { content } = JSON.parse(e.message)

          expect(content).toEqual([
            'Podana wartość nie istnieje.',
            'Podany ciąg znaków jest mniejszy od 20.'
          ])
        }
      })
    })

    describe('categoryIdList Field', () => {
      it('should contain proper validators', () => {
        const data = {
          categoryIdList: null
        }

        try {
          updateArticleValidation(1, data as any)
        } catch (e) {
          const { categoryIdList } = JSON.parse(e.message)

          expect(categoryIdList).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest tablicą.',
            `Podany ciąg znaków jest mniejszy od 1.`
          ])
        }
      })
    })
  })

  describe('articleByIdValidation Function', () => {
    it('import articleByIdValidation', () => {
      expect(typeof articleByIdValidation).toEqual('function')
    })

    describe('articleId Field', () => {
      it('should contain proper validators', () => {
        const data = {
          articleId: null
        }

        try {
          articleByIdValidation(data as any)
        } catch (e) {
          const { articleId } = JSON.parse(e.message)

          expect(articleId).toEqual(['Podana wartość nie jest liczbą.'])
        }
      })
    })
  })

  describe('toggleArticlePublicFlagValidation Function', () => {
    it('import toggleArticlePublicFlagValidation', () => {
      expect(typeof toggleArticlePublicFlagValidation).toEqual('function')
    })

    describe('articleId Field', () => {
      it('should contain proper validators', () => {
        try {
          toggleArticlePublicFlagValidation(null as any, true)
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

  describe('incrementArticleLikesValidation Function', () => {
    it('import incrementArticleLikesValidation', () => {
      expect(typeof incrementArticleLikesValidation).toEqual('function')
    })

    describe('articleId Field', () => {
      it('should contain proper validators', () => {
        try {
          incrementArticleLikesValidation(null as any)
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
})
