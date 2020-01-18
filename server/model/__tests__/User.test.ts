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

describe('User Model', () => {
  it('should call User.init with the correct parameters', () => {
    require('../User')

    expect(initMock).toBeCalledWith(
      {
        userId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        login: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
