import routeList from '../routeList'

describe('routeList Configuration', () => {
  it('should return proper object', () => {
    expect(routeList).toEqual(ROUTE_LIST)
  })
})

const ROUTE_LIST = {
  baseUrl: '/admin',
  loginPageUrl: '/admin/login',
  dashboardPageUrl: '/admin/dashboard'
}