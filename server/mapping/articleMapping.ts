import { ArticleType, ArticleModel } from '@type/Article'

import imageMapping from './imageMapping'
import categoryMapping from './categoryMapping'

export default (record: ArticleModel): ArticleType => {
  const image = record.image ? imageMapping(record.image) : null
  const categoryList = record.categoryList
    ? record.categoryList.map(categoryMapping)
    : null

  return {
    image,
    categoryList,
    title: record.title,
    userId: record.userId,
    content: record.content,
    imageId: record.imageId,
    createdAt: record.createdAt,
    articleId: record.articleId,
    updatedAt: record.updatedAt,
    description: record.description
  }
}
