import jwt from 'jsonwebtoken'
import Substitute, { Arg } from '@fluffy-spoon/substitute'

import ArticleResolver from '../index'

import ArticleService from '@service/ArticleService'

import Context from '@type/Context'
import { ArticleCreateResult, ArticleCreateRequest } from '@type/Article'

import generateString from '@utility/generateString'

jest.mock('../../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

import keys from '@config/keys'

const _ArticleService = Substitute.for<ArticleService>()

let resolver: ArticleResolver

describe('ArticleResolver Resolver', () => {
  beforeEach(() => {
    resolver = new ArticleResolver(_ArticleService)
  })

  beforeAll(() => {
    _ArticleService
      .create(Arg.any(), Arg.any())
      .mimicks(async () => ARTICLE_CREATE_RESULT_MOCK)
  })

  describe('createArticle mutation', () => {
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
          expect(e.message).toEqual('Authentication Error.')
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
              content: [`Provided value's length is shorter than 160.`],
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

      expect(result).toEqual(ARTICLE_CREATE_RESULT_MOCK)
    })
  })
})

const ARTICLE_MOCK: ArticleCreateRequest = {
  imageId: 1,
  title: '123',
  description: '123',
  categoryIdList: [1, 2],
  content: generateString(160)
}

const ARTICLE_CREATE_RESULT_MOCK: ArticleCreateResult = {
  articleId: 1
}
