jest.mock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}
  class Model {
    public static init = jest.fn()
  }

  Model.init = jest.fn()

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

describe('User Model', () => {
  it('should call User.init with the correct parameters', () => {
    const { User } = require('../User')

    expect(User.init).toBeCalledWith(
      {
        userId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        login: DataTypes.STRING(50),
        password: DataTypes.STRING(100)
      },
      {
        sequelize: new Sequelize()
      }
    )
  })
})
