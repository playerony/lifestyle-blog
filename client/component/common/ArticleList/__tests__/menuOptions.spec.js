import menuOptions from '../menuOptions'

describe('menuOptions Configuration', () => {
  it('should import', () => {
    expect(typeof menuOptions).toEqual('object')
  })

  it('should contain proper menu options', () => {
    expect(menuOptions).toEqual(MENU_OPTIONS_MOCK)
  })
})

const MENU_OPTIONS_MOCK = [
  { label: 'Latest', sortingBy: 'latest' },
  { label: 'Top Rated', sortingBy: 'top-rated' },
  { label: 'Most Viewed', sortingBy: 'top-rated' },
  { label: 'Most Commented', sortingBy: 'most-commented' }
]
