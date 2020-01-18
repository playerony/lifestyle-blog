const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

const initMock = jest.fn()

jest.doMock('sequelize', () => {
  class Model {
    public static init = initMock
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('Log Model', () => {
  it('should call Log.init with the correct parameters', () => {
    require('../Log')

    expect(initMock).toBeCalledWith(
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
