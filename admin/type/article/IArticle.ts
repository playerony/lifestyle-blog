import IImage from '../image/IImage'
import ICategory from '../category/ICategory'

export default interface IArticle {
  likes?: number
  title?: string
  image?: IImage
  userId?: number
  createdAt?: Date
  imageId?: number
  content?: string
  articleId?: number
  isPublic?: boolean
  description?: string
  categoryList?: ICategory[]
}
