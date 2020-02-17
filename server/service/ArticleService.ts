import { Article } from '@model/Article'
import { ArticleCategory } from '@model/ArticleCategory'

import { ArticleType, ArticleModel, ArticleCreateRequest } from '@type/Article'

import articleMapping from '@mapping/articleMapping'

export default class ArticleService {
  async create(
    { categoryIdList, ...articleData }: ArticleCreateRequest,
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
