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

    process.env.DATABASE_NAME = 'database_name'
    process.env.DATABASE_USER = 'database_user'
    process.env.DATABASE_PASSWORD = 'database_password'
    process.env.DATABASE_SERVER = 'database_server'
    process.env.DATABASE_PORT = '3100'

    process.env.HASH_SALT = '12'
    process.env.JWT_PREFIX = 'Example prefix'
    process.env.APP_SECRET = 'secret_key'
    process.env.SERVER_PORT = '3000'

    process.env.ADMIN_URL = 'url'

    const keys = require('../keys').default

    expect(hasAllValuesDefined(keys)).toBeTruthy()
  })
})
