jest.mock('sequelize', () => {
  class Sequelize {
    public authenticate = jest.fn()
  }

  return {
    Sequelize
  }
})

import createDatabaseConnection from '../createDatabaseConnection'

describe('createDatabaseConnection Configuration', () => {
  beforeAll(() => {
    console.info = jest.fn()
  })

  it('import createDatabaseConnection', () => {
    expect(typeof createDatabaseConnection).toEqual('function')
  })

  it('should authenticate connection with database', async () => {
    await createDatabaseConnection()
    const { sequelize } = require('../sequelize')

    expect(sequelize.authenticate).toBeCalled()
  })
})
