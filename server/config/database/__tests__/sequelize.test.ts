describe('sequelize Instance', () => {
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
    process.env.DATABASE_NAME = 'database_name'
    process.env.DATABASE_USER = 'database_user'
    process.env.DATABASE_PASSWORD = 'database_password'
    process.env.DATABASE_SERVER = 'database_server'
    process.env.DATABASE_PORT = '3100'

    const { sequelize } = require('../sequelize')

    expect(sequelize.options).toBeDefined()
    expect(sequelize.options.port).toEqual(3100)
    expect(sequelize.options.dialect).toEqual('postgres')
    expect(sequelize.options.storage).toEqual(':memory:')
    expect(sequelize.options.database).toEqual('database_name')
    expect(sequelize.options.username).toEqual('database_user')
    expect(sequelize.options.password).toEqual('database_password')
  })
})
