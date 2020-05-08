import scrollToTop from '../scrollToTop'

describe('scrollToTop Function', () => {
  it('should import', () => {
    expect(typeof scrollToTop).toEqual('function')
  })

  it('should call scroll function', () => {
    const scrollFunctionMock = jest.fn()
    window.scroll = scrollFunctionMock

    scrollToTop()
    expect(scrollFunctionMock).toHaveBeenCalled()
  })

  it('should call scroll function with smooth scroll behavior as default', () => {
    const scrollFunctionMock = jest.fn()
    window.scroll = scrollFunctionMock

    scrollToTop()
    expect(scrollFunctionMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      left: 0,
      top: 0
    })
  })

  it('should call scroll function with custom scroll behavior', () => {
    const scrollFunctionMock = jest.fn()
    window.scroll = scrollFunctionMock

    scrollToTop('auto')
    expect(scrollFunctionMock).toHaveBeenCalledWith({
      behavior: 'auto',
      left: 0,
      top: 0
    })
  })
})
