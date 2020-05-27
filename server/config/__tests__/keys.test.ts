import hasAllValuesDefined from '@utility/hasAllValuesDefined'

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

    process.env.DATABASE_PORT = '1000'
    process.env.DATABASE_NAME = 'DATABASE_NAME'
    process.env.DATABASE_USER = 'DATABASE_USER'
    process.env.DATABASE_SERVER = 'DATABASE_SERVER'
    process.env.DATABASE_PASSWORD = 'DATABASE_PASSWORD'

    process.env.PORT = 'PORT'
    process.env.HASH_SALT = '1000'
    process.env.JWT_EXPIRES_IN = '1000'
    process.env.JWT_PREFIX = 'JWT_PREFIX'
    process.env.APP_SECRET = 'APP_SECRET'

    process.env.ADMIN_URL = 'ADMIN_URL'
    process.env.CLIENT_URL = 'CLIENT_URL'

    process.env.CLOUDINARY_NAME = 'CLOUDINARY_NAME'
    process.env.CLOUDINARY_PUBLIC_KEY = 'CLOUDINARY_PUBLIC_KEY'
    process.env.CLOUDINARY_SECRET_KEY = 'CLOUDINARY_SECRET_KEY'

    const keys = require('../keys').default

    expect(hasAllValuesDefined(keys)).toBeTruthy()
  })
})
