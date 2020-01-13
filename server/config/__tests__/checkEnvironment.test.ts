describe('checkEnvironment Function', () => {
  const OLD_ENV = process.env

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
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should throw an error when environment variables are changed', () => {
    process.env.APP_SECRET = undefined

    try {
      require('../checkEnvironment').default()
    } catch (error) {
      expect(error.message).toEqual(
        'Not all environment variables have been defined.'
      )
    }
  })

  it('should show a message when environment variables are defined', () => {
    console.info = jest.fn()
    require('../checkEnvironment').default()

    expect(console.info).toHaveBeenCalledWith(
      'Environment variables have been defined successfully.'
    )
  })
})
