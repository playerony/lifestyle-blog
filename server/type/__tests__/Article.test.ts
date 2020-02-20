import * as articleTypeList from '../Article'
import { ArticleType, ArticleModel, ArticleCreateRequest } from '../Article'

describe('Article Types', () => {
  it('should contain three objects', () => {
    expect(Object.keys(articleTypeList)).toHaveLength(3)
  })

  describe('ArticleType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<ArticleType> = {
        userId: 1,
        imageId: 1,
        image: null,
        articleId: 1,
        title: 'title',
        content: 'content',
        categoryList: null,
        description: 'description',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'userId',
        'imageId',
        'image',
        'articleId',
        'title',
        'content',
        'categoryList',
        'description',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('ArticleCreateRequest Type', () => {
    it('should contain proper fields', () => {
      const data: Required<ArticleCreateRequest> = {
        imageId: 1,
        title: 'title',
        content: 'content',
        categoryIdList: [],
        description: 'description'
      }

      expect(Object.keys(data)).toEqual([
        'imageId',
        'title',
        'content',
        'categoryIdList',
        'description'
      ])
    })
  })

  describe('ArticleModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<ArticleModel> = {
        userId: 1,
        imageId: 1,
        articleId: 1,
        title: 'title',
        content: 'content',
        categoryList: null,
        description: 'description',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'userId',
        'imageId',
        'articleId',
        'title',
        'content',
        'categoryList',
        'description',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})