jest.mock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {
    public sync = jest.fn()
  }

  class Model {
    public static init = jest.fn()
    public static sync = jest.fn()
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

import synchronizeModel from '../synchronizeModel'

describe('synchronizeModel Configuration', () => {
  it('should synchronize models with database', async () => {
    await synchronizeModel()

    const { User } = require('@model/User')
    const { Log } = require('@model/Log')

    expect(User.sync).toBeCalled()
    expect(Log.sync).toBeCalled()
  })
})
