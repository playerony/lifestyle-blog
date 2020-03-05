import { Article } from '@model/Article'
import { ArticleCategory } from '@model/ArticleCategory'

import { ArticleType, ArticleModel, ArticleSaveRequest } from '@type/Article'

import articleMapping from '@mapping/articleMapping'

export default class ArticleService {
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

  async findAll(): Promise<ArticleType[]> {
    const result = await Article.scope([
      'withImage',
      'withCategoryList'
    ]).findAll<ArticleModel>()

    return result.map(articleMapping) as ArticleType[]
  }
}
