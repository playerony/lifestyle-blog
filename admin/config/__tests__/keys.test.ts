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
    process.env.JWT_PREFIX = 'JWT_PREFIX'
    process.env.CRYPTO_KEY = 'CRYPTO_KEY'
    process.env.SERVER_URL = 'SERVER_URL'
    process.env.CAPTCHA_PUBLIC_KEY = 'CAPTCHA_PUBLIC_KEY'
    process.env.CAPTCHA_PRIVATE_KEY = 'CAPTCHA_PRIVATE_KEY'

    const keys = require('../keys').default

    expect(Object.keys(keys)).toHaveLength(6)
  })
})
