jest.mock('../../style/theme', () => ({
  mobileScreen: 500
}))

describe('isMobileResolution Function', () => {
  it('should detect mobile screen', () => {
    jest
      .spyOn(document.body, 'clientWidth', 'get')
      .mockImplementation(() => 100)

    expect(require('../isMobileResolution').default()).toBeTruthy()
  })

  it('should detect desktop screen', () => {
    jest
      .spyOn(document.body, 'clientWidth', 'get')
      .mockImplementation(() => 1000)

    expect(require('../isMobileResolution').default()).toBeFalsy()
  })
})
