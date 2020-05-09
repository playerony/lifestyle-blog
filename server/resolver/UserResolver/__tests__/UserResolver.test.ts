import jwt from 'jsonwebtoken'
import Substitute, { Arg } from '@fluffy-spoon/substitute'

import UserResolver from '../index'

import UserService from '@service/UserService'

import Context from '@type/Context'

jest.mock('../../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

import keys from '@config/keys'

const _UserService = Substitute.for<UserService>()

let resolver: UserResolver

describe('User Resolver', () => {
  beforeEach(() => {
    resolver = new UserResolver(_UserService)
  })

  beforeAll(() => {
    _UserService.login(Arg.any()).mimicks(async () => LOGIN_METHOD_MOCK)
    _UserService.signup(Arg.any()).mimicks(async () => SIGNUP_METHOD_MOCK)
  })

  describe('login Mutation', () => {
    it('should not pass validation', async () => {
      try {
        await resolver.login('admin', 'Ma1@')
      } catch (e) {
        expect(e).toBeDefined()
      }
    })

    it('should pass validation and return proper data', async () => {
      const result = await resolver.login('admin', 'admin')

      expect(result).toEqual(LOGIN_METHOD_MOCK)
    })
  })

  describe('signup Mutation', () => {
    it('should not pass validation', async () => {
      try {
        await resolver.signup('admin', 'Ma1@')
      } catch (e) {
        expect(e).toBeDefined()
      }
    })

    it('should pass validation and return proper data', async () => {
      const result = await resolver.signup('admin1', 'Pas#1')

      expect(result).toEqual(SIGNUP_METHOD_MOCK)
    })
  })

  describe('isAuthenticated Query', () => {
    describe('should throw an error', () => {
      it('if token is wrong', async () => {
        const context: Context = {
          token: '',
          userAgent: '',
          ipAddress: ''
        }

        try {
          await resolver.isAuthenticated(context)
        } catch (e) {
          expect(e.message).toEqual('Forbidden Error.')
        }
      })
    })

    it('should return true when userId exist', async () => {
      const token = jwt.sign({ userId: 1 }, keys.appSecret!)
      const context: Context = {
        userAgent: '',
        ipAddress: '',
        token: `${keys.jwtPrefix} ${token}`
      }

      const result = await resolver.isAuthenticated(context)

      expect(result).toEqual(true)
    })
  })
})

const LOGIN_METHOD_MOCK = {
  token: 'token',
  user: {
    login: 'login',
    password: 'password',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

const SIGNUP_METHOD_MOCK = {
  token: 'token',
  user: {
    login: 'admin1',
    password: 'Pas#1',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}
