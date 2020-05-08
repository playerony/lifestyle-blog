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

describe('Comment Model', () => {
  it('should call Comment.init with the correct parameters', () => {
    require('../Comment')

    expect(initMock).toBeCalledWith(
      {
        commentId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        parentCommentId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null
        },
        articleId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        creator: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        likes: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
