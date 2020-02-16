import { Article } from '@model/Article'
import { ArticleCategory } from '@model/ArticleCategory'

import {
  ArticleModel,
  ArticleType,
  ArticleCreateResult,
  ArticleCreateRequest
} from '@type/Article'

import { ImageType, ImageModel } from '@type/Image'

import { CategoryType, CategoryModel } from '@type/Category'

const imageMapping = (record?: ImageModel): ImageType | null => {
  if (!record) {
    return null
  }

  return {
    userId: record.userId,
    imageId: record.imageId,
    filename: record.filename,
    updatedAt: record.updatedAt,
    createdAt: record.createdAt
  }
}

const categoryMapping = (record: CategoryModel): CategoryType => {
  return {
    name: record.name,
    updatedAt: record.updatedAt,
    createdAt: record.createdAt,
    categoryId: record.categoryId,
    description: record.description
  }
}

const articleMapping = (record: ArticleModel): ArticleType => {
  let categoryList = record?.categoryList || []

  return {
    title: record.title,
    userId: record.userId,
    content: record.content,
    imageId: record.imageId,
    createdAt: record.createdAt,
    articleId: record.articleId,
    updatedAt: record.updatedAt,
    description: record.description,
    image: imageMapping(record.image),
    categoryList: categoryList.map(categoryMapping)
  }
}

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

    return !foundArticle ? null : articleMapping(foundArticle)
  }

  async findAll(): Promise<ArticleType[]> {
    const result = await Article.scope([
      'withImage',
      'withCategoryList'
    ]).findAll<ArticleModel>()

    return result.map(articleMapping)
  }
}
