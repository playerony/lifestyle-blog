import { ArticleType, ArticleModel } from '@type/Article'

import imageMapping from './imageMapping'
import categoryMapping from './categoryMapping'

export default (record?: ArticleModel | null): ArticleType | null => {
  if (!record) {
    return null
  }

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
