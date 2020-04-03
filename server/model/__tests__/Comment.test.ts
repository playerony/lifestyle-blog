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
  beforeEach(() => {
    jest.resetModules()
  })

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
          allowNull: false
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        creator: {
          type: DataTypes.STRING(20),
          allowNull: false
        }
      },
      {
        sequelize: new Sequelize(),
        scopes: {
          withParentComment: {
            include: ['parentComment']
          }
        }
      }
    )
  })
})
