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

describe('Visitor Model', () => {
  it('should call Visitor.init with the correct parameters', () => {
    require('../Visitor')

    expect(initMock).toBeCalledWith(
      {
        visitorId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        articleId: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ipAddress: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            isIP: true,
            notEmpty: true
          }
        },
        userAgent: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
