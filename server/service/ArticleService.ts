import { Article } from '@model/Article'
import { ArticleCategory } from '@model/ArticleCategory'

import {
  ArticleModel,
  ArticleType,
  ArticleCreateResult,
  ArticleCreateRequest
} from '@type/Article'

import articleMapping from '@mapping/articleMapping'

export default class ArticleService {
  async create(
    { categoryIdList, ...articleData }: ArticleCreateRequest,
    userId: number
  ): Promise<ArticleCreateResult> {
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

    return {
      articleId: createdArticle.articleId!
    }
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

    return articleMapping(foundArticle)
  }

  async findAll(): Promise<ArticleType[]> {
    const result = await Article.scope([
      'withImage',
      'withCategoryList'
    ]).findAll<ArticleModel>()

    return result.map(articleMapping) as ArticleType[]
  }
}
