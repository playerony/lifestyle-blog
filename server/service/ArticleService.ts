import { Article } from '@model/Article'
import { ArticleCategory } from '@model/ArticleCategory'

import {
  ArticleModel,
  ArticleCreateResult,
  ArticleCreateRequest
} from '@type/Article'

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

  async findAll(): Promise<ArticleModel[]> {
    return Article.scope(['withImage', 'withCategoryList']).findAll<ArticleModel>()
  }
}
