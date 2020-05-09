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
            'Provided value does not exist.',
            'Provided value is not a number.'
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
            'Provided value does not exist.',
            `Provided value's length is longer than 30.`
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
            'Provided value does not exist.',
            `Provided value's length is longer than 100.`
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
            'Provided value does not exist.',
            `Provided value's length is shorter than 160.`
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
            'Provided value does not exist.',
            'Provided value is not an array.',
            `Provided value's length is shorter than 1.`
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
            'Provided value does not exist.',
            'Provided value is not a number.'
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
            'Provided value does not exist.',
            'Provided value is not a number.'
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
            'Provided value does not exist.',
            `Provided value's length is longer than 30.`
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
            'Provided value does not exist.',
            `Provided value's length is longer than 100.`
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
            'Provided value does not exist.',
            `Provided value's length is shorter than 160.`
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
            'Provided value does not exist.',
            'Provided value is not an array.',
            `Provided value's length is shorter than 1.`
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

          expect(articleId).toEqual(['Provided value is not a number.'])
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
            'Provided value does not exist.',
            'Provided value is not a number.'
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
            'Provided value does not exist.',
            'Provided value is not a number.'
          ])
        }
      })
    })
  })
})
