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
  error: '/error/:code',
  article: '/article/:articleId',
  articles: '/articles/:categoryId'
}
