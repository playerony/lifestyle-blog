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
    const createdArticle = await Article.create<ArticleModel>({
      ...articleData,
      userId
    })

    await categoryIdList!.map(async categoryId => {
      await ArticleCategory.create({
        articleId: createdArticle.articleId,
        categoryId
      })
    })

    return {
      articleId: createdArticle.articleId!
    }
  }
}