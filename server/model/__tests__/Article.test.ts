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

describe('Article Model', () => {
  it('should call Article.init with the correct parameters', () => {
    require('../Article')

    const { User } = require('../User')
    const { Image } = require('../Image')

    expect(initMock).toBeCalledWith(
      {
        articleId: {
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
        imageId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            key: 'imageId',
            model: Image
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        title: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
          validate: {
            max: 30,
            notEmpty: true
          }
        },
        description: {
          type: DataTypes.STRING(100),
          allowNull: false,
          validate: {
            max: 100,
            notEmpty: true
          }
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            min: 160
          }
        },
        isPublic: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        likes: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize: new Sequelize(),
        scopes: {
          withImage: {
            include: ['image']
          },
          withCategoryList: {
            include: ['categoryList']
          }
        }
      }
    )
  })
})
