import doWatchMediaMock from '../doWatchMediaMock'

describe('doWatchMediaMock Function', () => {
  it('should import', () => {
    expect(typeof doWatchMediaMock).toEqual('function')
  })

  it('should now modify existed window.matchMedia object if its exist', () => {
    window.matchMedia = { test: 'test' }

    doWatchMediaMock()

    expect(window.matchMedia).toEqual({ test: 'test' })
  })

  it('should mock window.matchMedia object if it does not exist', () => {
    window.matchMedia = undefined

    doWatchMediaMock()

    expect(window.matchMedia).toBeDefined()
  })
})
