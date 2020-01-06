import { Express } from 'express'

describe('app Configuration', () => {
  const OLD_ENV = process.env
  let appConfig: () => Express

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV

    process.env.DATABASE_NAME = 'database_name'
    process.env.DATABASE_USER = 'database_user'
    process.env.DATABASE_PASSWORD = 'database_password'
    process.env.DATABASE_SERVER = 'database_server'
    process.env.DATABASE_PORT = '3100'
    process.env.HASH_SALT = '12'
    process.env.APP_SECRET = 'secret_key'
    process.env.APP_PORT = '3200'

    appConfig = require('../app').default
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should throw an error if enviroment variables are not defined', async () => {
    process.env.APP_SECRET = undefined

    appConfig = require('../app').default

    try {
      await appConfig()
    } catch (error) {
      expect(error.message).toEqual(
        'Not all environment variables have been defined.'
      )
    }
  })

  it('should set properly app port', async () => {
    const result = await appConfig()

    expect(result.locals.settings.port).toEqual('3200')
  })
})
