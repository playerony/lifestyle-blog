import calculateTodaysRecords from './helper/calculateTodaysRecords'

export default (articleId, visitorList, commentList) => {
  if (!articleId || !visitorList || !commentList) {
    return {}
  }

  const filteredVisitorList = visitorList
    .filter(element => element.articleId === articleId)
    .reduce((result, value) => {
      const foundVisitor = result.find(
        element => element.ipAddress === value.ipAddress
      )

      return !foundVisitor ? [...result, value] : result
    }, [])

  const totalComments = commentList.length
  const totalVisitors = filteredVisitorList.length
  const todayComments = calculateTodaysRecords(commentList)
  const todayVisitors = calculateTodaysRecords(filteredVisitorList)

  return {
    totalVisitors,
    todayVisitors,
    totalComments,
    todayComments
  }
}
