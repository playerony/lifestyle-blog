import IImage from '../image/IImage'
import ICategory from '../category/ICategory'

export default interface IArticle {
  title?: string
  image?: IImage
  userId?: number
  createdAt?: Date
  imageId?: number
  content?: string
  articleId?: number
  description?: string
  categoryList?: ICategory[]
}
