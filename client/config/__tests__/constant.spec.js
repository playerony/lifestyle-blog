import * as constant from '../constant'

describe('constant Configuration', () => {
  it('should contain four values', () => {
    expect(Object.keys(constant)).toHaveLength(4)
  })

  it('should have defined THEME_MODE property', () => {
    expect(constant.THEME_MODE).toEqual('active-theme-mode')
  })

  it('should have defined SEARCH_PAGE_VISIBILITY property', () => {
    expect(constant.SEARCH_PAGE_VISIBILITY).toEqual('search-page-visibility')
  })

  it('should have defined SEARCH_PAGE_RESULTS property', () => {
    expect(constant.SEARCH_PAGE_RESULTS).toEqual(6)
  })

  it('should have defined PINNED_CATEGORY_ID property', () => {
    expect(constant.PINNED_CATEGORY_ID).toEqual(3)
  })
})
