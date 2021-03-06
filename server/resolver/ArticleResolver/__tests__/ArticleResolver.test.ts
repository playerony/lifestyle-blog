import jwt from 'jsonwebtoken'
import Substitute, { Arg } from '@fluffy-spoon/substitute'

import ArticleResolver from '../index'

import ArticleService from '@service/ArticleService'
import VisitorService from '@service/VisitorService'

import Context from '@type/Context'
import { VisitorType } from '@type/Visitor'
import { ArticleType, ArticleSaveRequest } from '@type/Article'

import generateString from '@utility/generateString'

jest.mock('../../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

import keys from '@config/keys'

const _ArticleService = Substitute.for<ArticleService>()
const _VisitorService = Substitute.for<VisitorService>()

let resolver: ArticleResolver

describe('Article Resolver', () => {
  beforeEach(() => {
    resolver = new ArticleResolver(_ArticleService, _VisitorService)
  })

  beforeAll(() => {
    _ArticleService
      .update(Arg.any(), Arg.any(), Arg.any())
      .mimicks(async () => ARTICLE_SAVE_RESULT_MOCK)

    _ArticleService
      .togglePublicFlag(Arg.any(), Arg.any())
      .mimicks(async () => ARTICLE_SAVE_RESULT_MOCK)

    _ArticleService.incrementArticleLikes(Arg.any()).mimicks(async () => 2)

    _ArticleService
      .create(Arg.any(), Arg.any())
      .mimicks(async () => ARTICLE_SAVE_RESULT_MOCK)

    _ArticleService
      .findAll(Arg.any())
      .mimicks(async onlyPublic =>
        onlyPublic !== undefined
          ? [ARTICLE_RECORD_MOCK].filter(
              ({ isPublic }) => isPublic === onlyPublic
            )
          : [ARTICLE_RECORD_MOCK]
      )

    _ArticleService
      .findById(Arg.any(), Arg.any())
      .mimicks(async () => ARTICLE_RECORD_MOCK)

    _VisitorService
      .create(Arg.any(), Arg.any())
      .mimicks(async () => VISITOR_MOCK)
  })

  describe('createArticle Mutation', () => {
    describe('should throw an error', () => {
      it('if token is wrong', async () => {
        const context: Context = {
          token: '',
          userAgent: '',
          ipAddress: ''
        }

        try {
          await resolver.createArticle(context, ARTICLE_MOCK)
        } catch (e) {
          expect(e.message).toEqual('Brak dostępu.')
        }
      })

      it('if passed content data is wrong', async () => {
        const token = jwt.sign({ userId: 1 }, keys.appSecret!)
        const context: Context = {
          userAgent: '',
          ipAddress: '',
          token: `${keys.jwtPrefix} ${token}`
        }

        try {
          await resolver.createArticle(context, {
            ...ARTICLE_MOCK,
            content: 'wrong value'
          })
        } catch (e) {
          expect(e.message).toEqual(
            JSON.stringify({
              imageId: [],
              title: [],
              description: [],
              content: [
                'Podana wartość nie istnieje.',
                `Podany ciąg znaków jest mniejszy od 20.`
              ],
              categoryIdList: []
            })
          )
        }
      })
    })

    it('should return proper data', async () => {
      const token = jwt.sign({ userId: 1 }, keys.appSecret!)
      const context: Context = {
        userAgent: '',
        ipAddress: '',
        token: `${keys.jwtPrefix} ${token}`
      }

      const result = await resolver.createArticle(context, ARTICLE_MOCK)

      expect(result).toEqual(ARTICLE_SAVE_RESULT_MOCK)
    })
  })

  describe('updateArticle Mutation', () => {
    describe('should throw an error', () => {
      it('if token is wrong', async () => {
        const context: Context = {
          token: '',
          userAgent: '',
          ipAddress: ''
        }

        try {
          await resolver.updateArticle(context, 1, ARTICLE_MOCK)
        } catch (e) {
          expect(e.message).toEqual('Brak dostępu.')
        }
      })

      it('if passed content data is wrong', async () => {
        const token = jwt.sign({ userId: 1 }, keys.appSecret!)
        const context: Context = {
          userAgent: '',
          ipAddress: '',
          token: `${keys.jwtPrefix} ${token}`
        }

        try {
          await resolver.updateArticle(context, 1, {
            ...ARTICLE_MOCK,
            content: 'wrong value'
          })
        } catch (e) {
          expect(e.message).toEqual(
            JSON.stringify({
              articleId: [],
              imageId: [],
              title: [],
              description: [],
              content: [
                'Podana wartość nie istnieje.',
                `Podany ciąg znaków jest mniejszy od 20.`
              ],
              categoryIdList: []
            })
          )
        }
      })
    })

    it('should return proper data', async () => {
      const token = jwt.sign({ userId: 1 }, keys.appSecret!)
      const context: Context = {
        userAgent: '',
        ipAddress: '',
        token: `${keys.jwtPrefix} ${token}`
      }

      const result = await resolver.updateArticle(context, 1, ARTICLE_MOCK)

      expect(result).toEqual(ARTICLE_SAVE_RESULT_MOCK)
    })
  })

  describe('toggleArticlePublicFlag Mutation', () => {
    describe('should throw an error', () => {
      it('if token is wrong', async () => {
        const context: Context = {
          token: '',
          userAgent: '',
          ipAddress: ''
        }

        try {
          await resolver.toggleArticlePublicFlag(context, 1, true)
        } catch (e) {
          expect(e.message).toEqual('Brak dostępu.')
        }
      })

      it('if passed content data is wrong', async () => {
        const token = jwt.sign({ userId: 1 }, keys.appSecret!)
        const context: Context = {
          userAgent: '',
          ipAddress: '',
          token: `${keys.jwtPrefix} ${token}`
        }

        try {
          await resolver.toggleArticlePublicFlag(context, 1, null as any)
        } catch (e) {
          expect(e.message).toEqual(
            JSON.stringify({
              articleId: [],
              isPublic: ['Provided value does not exist.']
            })
          )
        }
      })
    })

    it('should return proper data', async () => {
      const token = jwt.sign({ userId: 1 }, keys.appSecret!)
      const context: Context = {
        userAgent: '',
        ipAddress: '',
        token: `${keys.jwtPrefix} ${token}`
      }

      const result = await resolver.toggleArticlePublicFlag(context, 1, true)

      expect(result).toEqual(ARTICLE_SAVE_RESULT_MOCK)
    })
  })

  describe('articleList Query', () => {
    it('should return all articles', async () => {
      const context: Context = {
        token: '',
        userAgent: '',
        ipAddress: ''
      }

      const result = await resolver.articleList(context)

      expect(result).toEqual([ARTICLE_RECORD_MOCK])
    })

    it('should return only public articles', async () => {
      const context: Context = {
        token: '',
        userAgent: '',
        ipAddress: ''
      }

      const result = await resolver.articleList(context, true)

      expect(result).toEqual([])
    })
  })

  describe('articleById Query', () => {
    it('should return proper data', async () => {
      const context: Context = {
        token: '',
        userAgent: '',
        ipAddress: ''
      }

      const result = await resolver.articleById(context, 1)

      expect(result).toEqual(ARTICLE_RECORD_MOCK)
    })

    it('should throw an error if articleId is wrong', async () => {
      const context: Context = {
        token: '',
        userAgent: '',
        ipAddress: ''
      }

      try {
        await resolver.articleById(context, '1' as any)
      } catch (e) {
        expect(e.message).toEqual(
          JSON.stringify({
            articleId: ['Podana wartość nie jest liczbą.']
          })
        )
      }
    })
  })

  describe('incrementArticleLikes Mutation', () => {
    it('should return proper data', async () => {
      const result = await resolver.incrementArticleLikes(1)

      expect(result).toEqual(2)
    })

    it('should throw an error if articleId is wrong', async () => {
      try {
        await resolver.incrementArticleLikes(null as any)
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
})

const ARTICLE_MOCK: ArticleSaveRequest = {
  imageId: 1,
  title: 'title',
  categoryIdList: [1, 2],
  description: 'description',
  content: JSON.stringify({
    blocks: [{ text: generateString(160) }]
  })
}

const ARTICLE_SAVE_RESULT_MOCK: ArticleType = {
  articleId: 1
}

const VISITOR_MOCK: VisitorType = {
  visitorId: 1,
  articleId: 1,
  userAgent: 'Mobile',
  ipAddress: '192.192.192.192'
}

const ARTICLE_RECORD_MOCK: any = {
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: 'title',
  content: 'content',
  description: 'description'
}
