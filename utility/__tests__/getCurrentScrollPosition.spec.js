import getCurrentScrollPosition from '../getCurrentScrollPosition'

describe('getCurrentScrollPosition Function', () => {
  it('should import', () => {
    expect(typeof getCurrentScrollPosition).toEqual('function')
  })

  it('should return current scroll position', () => {
    expect(getCurrentScrollPosition()).toEqual(0)

    window.pageYOffset = 50
    expect(getCurrentScrollPosition()).toEqual(50)
  })
})
