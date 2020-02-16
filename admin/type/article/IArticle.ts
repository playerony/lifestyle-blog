import IImage from './IImage'
import ICategory from '../category/ICategory'

export default interface IArticle {
  title?: string
  image?: IImage
  userId?: number
  imageId?: number
  content?: string
  articleId?: number
  description?: string
  categoryList?: ICategory[]
}
