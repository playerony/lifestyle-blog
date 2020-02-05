const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

const initMock = jest.fn()

jest.doMock('sequelize', () => {
  class Model {
    public static init = initMock
    public static hasMany = jest.fn()
    public static belongsTo = jest.fn()
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('ArticleCategory Model', () => {
  it('should call ArticleCategory.init with the correct parameters', () => {
    require('../ArticleCategory')
    const { Article } = require('../Article')
    const { Category } = require('../Category')

    expect(initMock).toBeCalledWith(
      {
        articleCategoryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        articleId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Article,
            key: 'articleId'
          }
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Category,
            key: 'categoryId'
          }
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
