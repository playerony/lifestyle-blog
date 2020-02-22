import IVisitor from '@type/visitor/IVisitor'
import IArticle from '@type/article/IArticle'
import IArticleList from '@type/article/IArticleList'

export default (data?: {
  articleList: IArticle[]
  visitorList: IVisitor[]
}): IArticleList[] => {
  if (!data) {
    return []
  }

  const { articleList, visitorList } = data

  if (!articleList || !visitorList) {
    return []
  }

  return articleList.reduce<IArticleList[]>((result, value) => {
    const articleId = value.articleId

    const filteredVisitorList = visitorList.filter(
      element => element.articleId === articleId
    )

    if (!filteredVisitorList.length) {
      return result.concat(value)
    }

    const todayVisitor = filteredVisitorList.filter(
      element =>
        new Date().getDate() - new Date(element.createdAt!).getDate() <= 1
    ).length

    const totalVisitor = filteredVisitorList.length

    return result.concat({ ...value, totalVisitor, todayVisitor })
  }, [])
}
