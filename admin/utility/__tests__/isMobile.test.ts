describe('isMobile Function', () => {
  beforeAll(() => {
    jest.mock('../../style/theme', () => ({
      mobileScreen: 500
    }))
  })

  it('should detect mobile screen', () => {
    jest
      .spyOn(document.body, 'clientWidth', 'get')
      .mockImplementation(() => 100)

    expect(require('../isMobile').default()).toBeTruthy()
  })

  it('should detect desktop screen', () => {
    jest
      .spyOn(document.body, 'clientWidth', 'get')
      .mockImplementation(() => 1000)

    expect(require('../isMobile').default()).toBeFalsy()
  })
})
