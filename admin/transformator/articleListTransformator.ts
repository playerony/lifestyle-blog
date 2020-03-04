import IVisitor from '@type/visitor/IVisitor'
import IArticle from '@type/article/IArticle'
import IArticleList from '@type/article/IArticleList'

export default (data?: {
  articleList?: IArticle[]
  visitorList?: IVisitor[]
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

    const filteredVisitorList = visitorList
      .filter(element => element.articleId === articleId)
      .reduce<IVisitor[]>((result, value) => {
        const foundVisitor = result.find(
          element => element.ipAddress === value.ipAddress
        )

        return !foundVisitor ? [...result, value] : result
      }, [])

    const todayVisitor = filteredVisitorList.filter(element => {
      const differenceInTime =
        new Date().getTime() - new Date(element.createdAt!).getTime()
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)

      return differenceInDays <= 1
    }).length

    const totalVisitor = filteredVisitorList.length

    return result.concat({ ...value, totalVisitor, todayVisitor })
  }, [])
}
