jest.mock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}
  class Model {
    public static init = jest.fn()
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

describe('Log Model', () => {
  it('should call Log.init with the correct parameters', () => {
    const { Log } = require('../Log')

    expect(Log.init).toBeCalledWith(
      {
        logId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        level: DataTypes.STRING(10),
        message: DataTypes.STRING(3000)
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
