import bcrypt from 'bcryptjs'

import { UserModel } from '@type/User'

const foundUserMock = jest.fn().mockImplementation(() => USER_MOCK)
const createUserMock = jest.fn().mockImplementation(() => USER_MOCK)

jest.mock('../../config/keys', () => ({
  hashSalt: 12,
  appSecret: '123',
  jwtExpiresIn: 500
}))

const setupSequelizeMock = (
  foundUser: Function = foundUserMock,
  createUser: Function = createUserMock
): typeof jest =>
  jest.doMock('sequelize', () => {
    const { dataTypes: DataTypes } = require('sequelize-test-helpers')

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

const setUp = () => {
  const UserService = require('../UserService').default

  return new UserService()
}

describe('User Service', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('signup Method', () => {
    it('should throw an error if user exist', async () => {
      setupSequelizeMock()

      const userService = setUp()

      try {
        await userService.signup({ login: 'test', password: 'test' })
      } catch (e) {
        expect(e.message).toEqual(
          '{"login":["Użytkownik z tym loginem już istnieje."]}'
        )
      }
    })

    it('should return token and created user data', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const userService = setUp()

      const result = await userService.signup({
        login: 'test',
        password: 'test'
      })

      const isProperToken = bcrypt.compare(USER_MOCK.password!, result.token)

      expect(isProperToken).toBeTruthy()
    })
  })

  describe('login Method', () => {
    it('should throw an error if user does not exist', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const userService = setUp()

      try {
        await userService.login({ login: 'test', password: 'test' })
      } catch (e) {
        expect(e.message).toEqual(
          '{"login":["Nie znaleziono takiego użytkownika."]}'
        )
      }
    })

    it('should throw an error if user password is invalid', async () => {
      setupSequelizeMock(
        jest.fn().mockImplementation(() => ({ ...USER_MOCK, password: 'test' }))
      )

      const userService = setUp()

      try {
        await userService.login({ login: 'test', password: 'test' })
      } catch (e) {
        expect(e.message).toEqual('{"password":["Nieprawidłowe hasło."]}')
      }
    })

    it('should return token when user was logged correctly', async () => {
      setupSequelizeMock(() => ({
        ...USER_MOCK,
        password: '$2a$12$yvqyghC8.XQdKz7DYa9/XeUgErrNsUCA/RkpfyNFodLQPcw1i2bZ2'
      }))

      const userService = setUp()

      const result = await userService.login({
        login: 'test',
        password: 'test'
      })

      const isProperToken = bcrypt.compare(USER_MOCK.password!, result.token)

      expect(isProperToken).toBeTruthy()
    })
  })
})

const USER_MOCK: Partial<UserModel> = {
  userId: 1,
  login: 'login',
  password: 'password',
  createdAt: new Date(),
  updatedAt: new Date()
}
