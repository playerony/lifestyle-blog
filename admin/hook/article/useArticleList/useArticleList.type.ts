import IArticle from '@type/article/IArticle'
import IVisitor from '@type/visitor/IVisitor'

export interface IResult {
  articleList: IArticle[]
  visitorList: IVisitor[]
}
