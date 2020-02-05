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

describe('Category Model', () => {
  it('should call Category.init with the correct parameters', () => {
    require('../Category')

    expect(initMock).toBeCalledWith(
      {
        categoryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(20),
          unique: true,
          allowNull: false,
          validate: {
            max: 20,
            notEmpty: true
          }
        },
        description: {
          type: DataTypes.STRING(100),
          allowNull: true,
          validate: {
            max: 100,
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
