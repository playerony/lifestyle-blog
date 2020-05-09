import { WhereOptions, literal } from 'sequelize'

import { Article } from '@model/Article'
import { ArticleCategory } from '@model/ArticleCategory'

import CategoryService from '@service/CategoryService'

import { ArticleType, ArticleModel, ArticleSaveRequest } from '@type/Article'

import articleMapping from '@mapping/articleMapping'

import ValidationError from '@utility/ValidationError'

export default class ArticleService {
  constructor(
    private categoryService: CategoryService = new CategoryService()
  ) {}

  async create(
    { categoryIdList, ...articleData }: ArticleSaveRequest,
    userId: number
  ): Promise<ArticleType> {
    Article.afterCreate<ArticleModel>(async article => {
      await ArticleCategory.bulkCreate(
        categoryIdList!.map(categoryId => ({
          articleId: article.articleId,
          categoryId
        }))
      )
    })

    const createdArticle = await Article.create<ArticleModel>({
      ...articleData,
      userId
    })

    return articleMapping(createdArticle)!
  }

  async update(
    articleId: number,
    { categoryIdList, ...articleData }: ArticleSaveRequest,
    userId: number
  ): Promise<ArticleType | null> {
    const foundArticle = await this.findById(articleId)
    if (!foundArticle) {
      throw new ValidationError({
        articleId: ['No such article found.']
      })
    }

    Article.afterUpdate<ArticleModel>(async () => {
      await ArticleCategory.destroy({
        where: { articleId }
      })

      await ArticleCategory.bulkCreate(
        categoryIdList!.map(categoryId => ({
          articleId,
          categoryId
        }))
      )
    })

    await Article.update<ArticleModel>(
      {
        ...articleData,
        userId
      },
      { where: { articleId }, individualHooks: true }
    )

    return this.findById(articleId)
  }

  async togglePublicFlag(
    articleId: number,
    isPublic: boolean
  ): Promise<ArticleType> {
    const foundArticle = await this.findById(articleId)
    if (!foundArticle) {
      throw new ValidationError({
        articleId: ['No such article found.']
      })
    }

    await Article.update<ArticleModel>({ isPublic }, { where: { articleId } })
    foundArticle.isPublic = isPublic

    return foundArticle
  }

  async findById(articleId: number): Promise<ArticleType | null> {
    const foundArticle = await Article.scope([
      'withImage',
      'withCategoryList'
    ]).findOne<ArticleModel>({
      where: {
        articleId
      }
    })

    return foundArticle ? articleMapping(foundArticle) : null
  }

  async findAll(onlyPublic?: boolean): Promise<ArticleType[]> {
    const whereOptions: WhereOptions = {}
    if (onlyPublic !== undefined) {
      whereOptions.isPublic = onlyPublic
    }

    const result = await Article.scope([
      'withImage',
      'withCategoryList'
    ]).findAll<ArticleModel>({ where: whereOptions })

    return result.map(articleMapping) as ArticleType[]
  }

  async findAllByCategoryId(categoryId: number): Promise<ArticleType[]> {
    const foundCategory = this.categoryService.findById(categoryId)
    if (!foundCategory) {
      throw new ValidationError({
        categoryId: ['No such article found.']
      })
    }

    const result = await Article.scope([
      'withImage',
      'withCategoryList'
    ]).findAll<ArticleModel>({
      include: [
        {
          association: 'categoryList',
          where: { categoryId }
        }
      ]
    })

    return result.map(articleMapping) as ArticleType[]
  }

  async incrementArticleLikes(articleId: number): Promise<number> {
    const foundArticle = await this.findById(articleId)
    if (!foundArticle) {
      throw new ValidationError({
        articleId: ['No such article found.']
      })
    }

    await Article.update<ArticleModel>(
      {
        likes: literal('likes +1')
      },
      { where: { articleId } }
    )

    return foundArticle.likes! + 1
  }
}
