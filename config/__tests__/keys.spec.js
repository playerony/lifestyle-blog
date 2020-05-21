describe('keys Object', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('will receive all process.env variables', () => {
    process.env.NODE_ENV = 'development'
    process.env.VUE_APP_SERVER_URL = 'VUE_APP_SERVER_URL'
    process.env.VUE_APP_CLAIM_IMAGE = 'VUE_APP_CLAIM_IMAGE'

    const keys = require('../keys').default

    expect(Object.keys(keys)).toHaveLength(3)
  })
})
