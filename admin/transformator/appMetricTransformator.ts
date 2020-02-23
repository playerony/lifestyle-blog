import IVisitor from '@type/visitor/IVisitor'

import variable from '@style/variable'

const unqiueArrayLength = (array: string[]): number =>
  [...new Set(array)].length

const calculateAllUniqueVisitors = (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList
    .map(({ ipAddress }) => ipAddress)
    .filter(Boolean)

  return unqiueArrayLength(ipAddressList as string[])
}

const calculateArticleListVisitors = (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList
    .map(({ ipAddress, articleId }) => ipAddress && !articleId)
    .filter(Boolean)

  return unqiueArrayLength(ipAddressList as string[])
}

const calculateArticleVisitors = (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList
    .map(({ ipAddress, articleId }) => ipAddress && Boolean(articleId))
    .filter(Boolean)

  return unqiueArrayLength(ipAddressList as string[])
}

export default (visitorList: IVisitor[]) => {
  const articlePageVisitors = calculateArticleVisitors(visitorList)
  const allWebsiteVisitors = calculateAllUniqueVisitors(visitorList)
  const articleListVisitors = calculateArticleListVisitors(visitorList)

  const visitorChartData = {
    labels: [
      'Total blog visitors',
      'Article list page visitors',
      'Article page visitors'
    ],
    datasets: [
      {
        data: [allWebsiteVisitors, articleListVisitors, articlePageVisitors],
        backgroundColor: [
          variable.color.purple500,
          variable.color.green500,
          variable.color.blue500
        ]
      }
    ]
  }

  return {
    visitorChartData
  }
}
