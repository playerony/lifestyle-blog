import IVisitor from '@type/visitor/IVisitor'

import metricTransformator from '../metricTransformator'

describe('metricTransformator Transformator', () => {
  it('should return proper data for empty parameter', () => {
    const result = metricTransformator([])

    expect(result).toEqual({
      devicesChartData: {
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Tablet', 'Mobile', 'Desktop']
      },
      pageVisitorsChartData: {
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Total', 'Article page', 'Article list page']
      },
      visitorsChartData: {
        datasets: [
          {
            backgroundColor: '#48adf1',
            borderColor: '#48adf1',
            data: [],
            label: 'Visitors per month'
          }
        ],
        labels: []
      }
    })
  })

  it('should return proper data', () => {
    const result = metricTransformator(VISITOR_LIST_MOCK)

    expect(result).toEqual({
      devicesChartData: {
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [2, 1, 0]
          }
        ],
        labels: ['Tablet', 'Mobile', 'Desktop']
      },
      pageVisitorsChartData: {
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [3, 2, 1]
          }
        ],
        labels: ['Total', 'Article page', 'Article list page']
      },
      visitorsChartData: {
        datasets: [
          {
            backgroundColor: '#48adf1',
            borderColor: '#48adf1',
            data: [3],
            label: 'Visitors per month'
          }
        ],
        labels: ['04.2020']
      }
    })
  })
})

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    visitorId: 1,
    articleId: null,
    ipAddress: 'ipAddress1',
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    visitorId: 2,
    articleId: 1,
    ipAddress: 'ipAddress2',
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  }
]
