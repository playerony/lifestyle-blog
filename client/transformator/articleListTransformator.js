export default (articleList, visitorList) => {
  if (!articleList || !visitorList) {
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

    const totalVisitor = filteredVisitorList.length

    return result.concat({ ...value, totalVisitor })
  }, [])
}
