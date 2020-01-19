import Substitute, { Arg } from '@fluffy-spoon/substitute'

import UserResolver from '../index'

import UserService from '@service/UserService'

const _UserService = Substitute.for<UserService>()

let resolver: UserResolver

describe('UserResolver Resolver', () => {
  beforeEach(() => {
    resolver = new UserResolver(_UserService)
  })

  beforeAll(() => {
    _UserService.login(Arg.any()).mimicks(async () => LOGIN_METHOD_MOCK)
    _UserService.signup(Arg.any()).mimicks(async () => SIGNUP_METHOD_MOCK)
  })

  describe('login mutation', () => {
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

  describe('signup mutation', () => {
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
})

const LOGIN_METHOD_MOCK = {
  token: '123',
  user: {
    login: 'admin',
    password: 'admin',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

const SIGNUP_METHOD_MOCK = {
  token: '12345',
  user: {
    login: 'admin1',
    password: 'Pas#1',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}
