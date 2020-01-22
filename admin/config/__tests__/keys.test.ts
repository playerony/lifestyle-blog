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
    process.env.JWT_PREFIX = 'secret_prefix'
    process.env.CRYPTO_KEY = 'crypto_key'
    process.env.SERVER_URL = 'server_url'

    const keys = require('../keys').default

    expect(Object.keys(keys)).toHaveLength(4)
  })
})
