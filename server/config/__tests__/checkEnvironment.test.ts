describe('checkEnvironment Function', () => {
  const OLD_ENV = process.env

  beforeAll(() => {
    console.info = jest.fn()
  })

  beforeEach(() => {
    jest.resetModules()

    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV

    process.env.NODE_ENV = 'development'

    process.env.DATABASE_PORT = '1000'
    process.env.DATABASE_NAME = 'DATABASE_NAME'
    process.env.DATABASE_USER = 'DATABASE_USER'
    process.env.DATABASE_SERVER = 'DATABASE_SERVER'
    process.env.DATABASE_PASSWORD = 'DATABASE_PASSWORD'

    process.env.HASH_SALT = '123'
    process.env.JWT_EXPIRES_IN = '1000'
    process.env.JWT_PREFIX = 'JWT_PREFIX'
    process.env.APP_SECRET = 'APP_SECRET'
    process.env.SERVER_PORT = 'SERVER_PORT'

    process.env.ADMIN_URL = 'ADMIN_URL'

    process.env.CLOUDINARY_NAME = 'CLOUDINARY_NAME'
    process.env.CLOUDINARY_PUBLIC_KEY = 'CLOUDINARY_PUBLIC_KEY'
    process.env.CLOUDINARY_SECRET_KEY = 'CLOUDINARY_SECRET_KEY'
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
    require('../checkEnvironment').default()

    expect(console.info).toHaveBeenCalledWith(
      'Environment variables have been defined successfully.'
    )
  })
})
