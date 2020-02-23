import IVisitor from '@type/visitor/IVisitor'

import variable from '@style/variable'

import isMobileUserAgent from '@utility/isMobileUserAgent'
import isTabletUserAgent from '@utility/isTabletUserAgent'

const calculateAllUniqueVisitors = (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList.map(({ ipAddress }) => ipAddress)

  return [...new Set(ipAddressList)].length
}

const calculateArticleListVisitors = (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList
    .filter(({ articleId }) => !articleId)
    .map(({ ipAddress }) => ipAddress)

  return [...new Set(ipAddressList)].length
}

const calculateArticleVisitors = (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList
    .filter(({ articleId }) => Boolean(articleId))
    .map(({ ipAddress }) => ipAddress)

  return [...new Set(ipAddressList)].length
}

const calculateTabletVisitors = (visitorList: IVisitor[]): number =>
  visitorList.filter(({ userAgent }) => isTabletUserAgent(userAgent!)).length

const calculateMobileVisitors = (visitorList: IVisitor[]): number =>
  visitorList.filter(({ userAgent }) => isMobileUserAgent(userAgent!)).length

export default (visitorList: IVisitor[]) => {
  const articlePageVisitors = calculateArticleVisitors(visitorList)
  const allWebsiteVisitors = calculateAllUniqueVisitors(visitorList)
  const articleListVisitors = calculateArticleListVisitors(visitorList)

  const tabletVisitors = calculateTabletVisitors(visitorList)
  const mobileVisitors = calculateMobileVisitors(visitorList) - tabletVisitors
  const desktopVisitors = visitorList.length - mobileVisitors - tabletVisitors

  const blogVisitorChartData = {
    labels: [
      'Total blog visitors',
      'Article page visitors',
      'Article list page visitors'
    ],
    datasets: [
      {
        data: [allWebsiteVisitors, articlePageVisitors, articleListVisitors],
        backgroundColor: [
          variable.color.blue500,
          variable.color.green500,
          variable.color.purple500
        ]
      }
    ]
  }

  const visitorDeviceChartData = {
    labels: ['Tablet', 'Mobile', 'Desktop'],
    datasets: [
      {
        data: [tabletVisitors, mobileVisitors, desktopVisitors],
        backgroundColor: [
          variable.color.blue500,
          variable.color.green500,
          variable.color.purple500
        ]
      }
    ]
  }

  return {
    blogVisitorChartData,
    visitorDeviceChartData
  }
}
