const configMock = jest.fn()

jest.doMock('cloudinary', () => {
  const originalModule = jest.requireActual('cloudinary')

  return {
    ...originalModule,
    v2: {
      ...originalModule.v2,
      config: configMock
    }
  }
})

describe('cloudinary Configuration', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()

    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV

    process.env.CLOUDINARY_NAME = 'CLOUDINARY_NAME'
    process.env.CLOUDINARY_PUBLIC_KEY = 'CLOUDINARY_PUBLIC_KEY'
    process.env.CLOUDINARY_SECRET_KEY = 'CLOUDINARY_SECRET_KEY'
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should call a config function without parameters', () => {
    require('../cloudinary')

    expect(configMock).toHaveBeenCalledWith({
      'api_key': 'CLOUDINARY_PUBLIC_KEY',
      'api_secret': 'CLOUDINARY_SECRET_KEY',
      'cloud_name': 'CLOUDINARY_NAME'
    })
  })
})
