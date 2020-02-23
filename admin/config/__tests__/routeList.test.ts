import routeList from '../routeList'

describe('routeList Configuration', () => {
  it('should return proper object', () => {
    expect(routeList).toEqual(ROUTE_LIST)
  })
})

const ROUTE_LIST = {
  base: '/admin',
  loginPageUrl: '/admin/login',
  appMetric: '/admin/metric',
  article: {
    base: '/admin/article',
    list: '/admin/article/list',
    create: '/admin/article/create'
  }
}
