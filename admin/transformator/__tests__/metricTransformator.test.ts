import IVisitor from '@type/visitor/IVisitor'

import metricTransformator from '../metricTransformator'

describe('metricTransformator Transformator', () => {
  it('import metricTransformator', () => {
    expect(typeof metricTransformator).toEqual('function')
  })

  it('should return proper data for empty parameter', () => {
    const result = metricTransformator([])

    expect(result).toEqual({
      devicesChartData: {
        datasets: [
          {
            backgroundColor: ['#debae2', '#ccccff', '#6084fa'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Tablet', 'Telefon', 'Komputer']
      },
      pageVisitorsChartData: {
        datasets: [
          {
            backgroundColor: ['#debae2', '#ccccff', '#6084fa'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Całkowita', 'Strona artykułu', 'Lista artykułów']
      },
      visitorsChartData: {
        datasets: [
          {
            backgroundColor: '#6084fa',
            borderColor: '#6084fa',
            data: [],
            label: 'Miesięczna liczba wejść'
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
            backgroundColor: ['#debae2', '#ccccff', '#6084fa'],
            data: [2, 8, 0]
          }
        ],
        labels: ['Tablet', 'Telefon', 'Komputer']
      },
      pageVisitorsChartData: {
        datasets: [
          {
            backgroundColor: ['#debae2', '#ccccff', '#6084fa'],
            data: [3, 2, 1]
          }
        ],
        labels: ['Całkowita', 'Strona artykułu', 'Lista artykułów']
      },
      visitorsChartData: {
        datasets: [
          {
            backgroundColor: '#6084fa',
            borderColor: '#6084fa',
            data: [1, 1, 1],
            label: 'Miesięczna liczba wejść'
          }
        ],
        labels: ['03.2020', '04.2020', '05.2020']
      }
    })
  })
})

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    visitorId: 1,
    articleId: null,
    ipAddress: 'ipAddress1',
    createdAt: new Date('04-04-2020'),
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    visitorId: 2,
    articleId: 1,
    ipAddress: 'ipAddress2',
    createdAt: new Date('05-05-2020'),
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('03-03-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('05-05-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('02-02-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('01-01-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('06-06-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('07-07-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('08-08-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('05-05-2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  }
]
