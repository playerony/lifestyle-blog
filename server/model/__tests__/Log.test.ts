// @ts-nocheck
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
        level: {
          type: DataTypes.STRING(10),
          allowNull: false,
          validate: {
            max: 10,
            notEmpty: true
          }
        },
        message: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
