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
          allowNull: false,
          validate: {
            min: 3,
            max: 50
          }
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
          validate: {
            min: 5,
            max: 100
          }
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
