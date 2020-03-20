import routeList from '../routeList'

describe('routeList Configuration', () => {
  it('should return proper object', () => {
    expect(routeList).toEqual(ROUTE_LIST)
  })
})

const ROUTE_LIST = {
  base: '/admin',
  log: '/admin/log',
  error: '/admin/error/:code',
  login: '/admin/login',
  metric: '/admin/metric',
  article: {
    base: '/admin/article',
    list: '/admin/article/list',
    create: '/admin/article/create',
    edit: '/admin/article/:articleId/edit'
  }
}
