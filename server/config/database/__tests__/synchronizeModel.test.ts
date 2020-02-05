jest.mock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {
    public sync = jest.fn()
  }

  class Model {
    public static init = jest.fn()
    public static sync = jest.fn()
    public static hasMany = jest.fn()
    public static belongsTo = jest.fn()
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

import synchronizeModel from '../synchronizeModel'

describe('synchronizeModel Configuration', () => {
  it('should synchronize models with database', async () => {
    await synchronizeModel()

    const { Log } = require('@model/Log')
    const { User } = require('@model/User')
    const { Image } = require('@model/Image')
    const { Article } = require('@model/Article')
    const { Category } = require('@model/Category')
    const { ArticleCategory } = require('@model/ArticleCategory')

    expect(Log.sync).toBeCalled()
    expect(User.sync).toBeCalled()
    expect(Image.sync).toBeCalled()
    expect(Article.sync).toBeCalled()
    expect(Category.sync).toBeCalled()
    expect(ArticleCategory.sync).toBeCalled()
  })
})
