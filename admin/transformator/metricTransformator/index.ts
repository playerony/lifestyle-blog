import { sortBy, groupBy } from 'lodash'

import IVisitor from '@type/visitor/IVisitor'

import formatDate from '@utility/formatDate'
import calculateTabletVisitors from './calculateTabletVisitors'
import calculateMobileVisitors from './calculateMobileVisitors'
import calculateArticleVisitors from './calculateArticleVisitors'
import calculateAllUniqueVisitors from './calculateAllUniqueVisitors'
import calculateArticleListVisitors from './calculateArticleListVisitors'

import { METRIC_CHART_RECORDS_LIMIT } from '@config/constant'

import variable from '@style/variable'

const getVisitorsChartData = (visitorList: IVisitor[]) => {
  const uniqueVisitorListElements = visitorList.reduce<IVisitor[]>(
    (result, value) => {
      if (
        !result.find(
          element =>
            element.ipAddress === value.ipAddress &&
            element.createdAt !== value.createdAt
        )
      ) {
        return [...result, value]
      }

      return result
    },
    []
  )

  const visitorListGroupedByMonth = groupBy(
    sortBy(uniqueVisitorListElements, 'createdAt:'),
    visitor => {
      const date = new Date(visitor.createdAt!)

      return date.getFullYear() + date.getMonth()
    }
  )

  const labels = Object.keys(visitorListGroupedByMonth)
    .map(element => visitorListGroupedByMonth[element][0])
    .map(visitor => formatDate(visitor.createdAt).slice(3))
    .slice(METRIC_CHART_RECORDS_LIMIT)

  const data = Object.keys(visitorListGroupedByMonth)
    .map(element => visitorListGroupedByMonth[element].length)
    .slice(METRIC_CHART_RECORDS_LIMIT)

  return {
    labels,
    datasets: [
      {
        label: 'Visitors per month',
        borderColor: variable.color.blue500,
        backgroundColor: variable.color.blue500,
        data
      }
    ]
  }
}

const getPageVisitorsChartData = (visitorList: IVisitor[]) => {
  const articlePageVisitors = calculateArticleVisitors(visitorList)
  const allWebsiteVisitors = calculateAllUniqueVisitors(visitorList)
  const articleListVisitors = calculateArticleListVisitors(visitorList)

  return {
    labels: ['Total', 'Article page', 'Article list page'],
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
}

const getDevicesChartData = (visitorList: IVisitor[]) => {
  const tabletVisitors = calculateTabletVisitors(visitorList)
  const mobileVisitors = calculateMobileVisitors(visitorList) - tabletVisitors
  const desktopVisitors = visitorList.length - mobileVisitors - tabletVisitors

  return {
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
}

export default (visitorList: IVisitor[]) => {
  const devicesChartData = getDevicesChartData(visitorList)
  const visitorsChartData = getVisitorsChartData(visitorList)
  const pageVisitorsChartData = getPageVisitorsChartData(visitorList)

  return {
    devicesChartData,
    visitorsChartData,
    pageVisitorsChartData
  }
}
