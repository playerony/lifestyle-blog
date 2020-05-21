import routeList from '../routeList'

describe('routeList Configuration', () => {
  it('should import', () => {
    expect(typeof routeList).toEqual('object')
  })

  it('should return proper object', () => {
    expect(routeList).toEqual(ROUTE_LIST)
  })
})

const ROUTE_LIST = {
  base: '/',
  error: {
    base: '/error',
    path: '/error/:code'
  },
  article: {
    base: '/article',
    path: '/article/:articleId'
  },
  articles: {
    base: '/articles',
    path: '/articles/:categoryId'
  }
}
