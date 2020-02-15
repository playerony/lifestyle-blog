const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

const initMock = jest.fn()

jest.doMock('sequelize', () => {
  class Model {
    public static init = initMock
    public static belongsTo = jest.fn()
    public static belongsToMany = jest.fn()
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

    expect(initMock).toHaveBeenNthCalledWith(
      5,
      {
        articleCategoryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        articleId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
