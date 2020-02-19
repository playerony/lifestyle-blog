// @ts-nocheck
const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

const initMock = jest.fn()

jest.doMock('sequelize', () => {
  class Model {
    public static init = initMock
    public static belongsTo = jest.fn()
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('Image Model', () => {
  it('should call Image.init with the correct parameters', () => {
    require('../Image')
    const { User } = require('../User')

    expect(initMock).toBeCalledWith(
      {
        imageId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            key: 'userId',
            model: User
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        photoUrl: {
          type: DataTypes.STRING(100),
          unique: true,
          allowNull: false,
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
