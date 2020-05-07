import calculateTodaysRecords from './helper/calculateTodaysRecords'

export default (articleList, visitorList, commentList) => {
  if (!articleList || !visitorList || !commentList) {
    return []
  }

  return articleList.reduce((result, value) => {
    const articleId = value.articleId

    const filteredVisitorList = visitorList
      .filter(element => element.articleId === articleId)
      .reduce((result, value) => {
        const foundVisitor = result.find(
          element => element.ipAddress === value.ipAddress
        )

        return !foundVisitor ? [...result, value] : result
      }, [])

    const filteredCommentList = commentList.filter(
      element => element.articleId === articleId
    )

    const totalVisitors = filteredVisitorList.length
    const totalComments = filteredCommentList.length
    const todayVisitors = calculateTodaysRecords(filteredVisitorList)
    const todayComments = calculateTodaysRecords(filteredCommentList)

    return result.concat({
      ...value,
      totalVisitors,
      todayVisitors,
      totalComments,
      todayComments
    })
  }, [])
}
