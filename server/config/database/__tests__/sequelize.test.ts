describe('sequelize Configuration', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()

    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should set proper configuration', () => {
    process.env.DATABASE_PORT = '1000'
    process.env.DATABASE_NAME = 'DATABASE_NAME'
    process.env.DATABASE_USER = 'DATABASE_USER'
    process.env.DATABASE_SERVER = 'DATABASE_SERVER'
    process.env.DATABASE_PASSWORD = 'DATABASE_PASSWORD'

    const { sequelize } = require('../sequelize')

    expect(sequelize.options).toBeDefined()
    expect(sequelize.options.port).toEqual(1000)
    expect(sequelize.options.dialect).toEqual('postgres')
    expect(sequelize.options.storage).toEqual(':memory:')
    expect(sequelize.options.database).toEqual('DATABASE_NAME')
    expect(sequelize.options.username).toEqual('DATABASE_USER')
    expect(sequelize.options.password).toEqual('DATABASE_PASSWORD')
  })
})
