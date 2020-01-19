const { dataTypes: DataTypes } = require('sequelize-test-helpers')
import bcrypt from 'bcryptjs'

import { UserModel } from '@type/User'

let foundUserMock = jest.fn().mockImplementation(() => USER_MOCK)
let createUserMock = jest.fn().mockImplementation(() => USER_MOCK)

jest.mock('../../config/keys', () => ({ hashSalt: 12, appSecret: '123' }))

const setupSequelizeMock = (
  foundUser: Function = foundUserMock,
  createUser: Function = createUserMock
): typeof jest =>
  jest.doMock('sequelize', () => {
    class Sequelize {}

    class Model {
      public static init = jest.fn()
      public static findOne = foundUser
      public static create = createUser
    }

    return {
      Model,
      DataTypes,
      Sequelize
    }
  })

describe('UserService Service', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('signup Method', () => {
    it('should throw an error if user exist', async () => {
      setupSequelizeMock(foundUserMock, createUserMock)

      const UserService = require('../UserService').default
      const userService = new UserService()

      try {
        await userService.signup({ login: 'test', password: 'test' })
      } catch (e) {
        expect(e.message).toEqual(
          '{"login":["User with this login already exists."]}'
        )
      }
    })

    it('should return token and create user data', async () => {
      setupSequelizeMock(
        jest.fn().mockImplementation(() => undefined),
        createUserMock
      )

      const UserService = require('../UserService').default
      const userService = new UserService()

      const result = await userService.signup({
        login: 'test',
        password: 'test'
      })

      const isProperToken = bcrypt.compare(USER_MOCK.password, result.token)

      expect(isProperToken).toBeTruthy()
      expect(result.user).toEqual(USER_MOCK)
    })
  })
})

const USER_MOCK: UserModel = {
  userId: 1,
  login: 'admin',
  password: 'admin',
  createdAt: new Date(),
  updatedAt: new Date()
}
