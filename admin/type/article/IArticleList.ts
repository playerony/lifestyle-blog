import IArticle from './IArticle'

export default interface IArticleList extends IArticle {
  totalVisitor?: number
  todayVisitor?: number
}
