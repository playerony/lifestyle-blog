jest.mock('../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

import jwt from 'jsonwebtoken'

import getUserId from '../getUserId'

import keys from '@config/keys'

describe('getUserId Function', () => {
  describe('should throw an error', () => {
    it('if passed token does not exist', () => {
      try {
        getUserId({ token: '' })
      } catch (e) {
        expect(e.message).toEqual('Authentication Error.')
      }
    })

    it('if token prefix is wrong', () => {
      try {
        getUserId({ token: 'prefix token' })
      } catch (e) {
        expect(e.message).toEqual('Authentication Error.')
      }
    })

    it('if decoded token do not contain userId', () => {
      const token = jwt.sign({ userId: null }, keys.appSecret!)

      try {
        getUserId({ token: `Prefix ${token}` })
      } catch (e) {
        expect(e.message).toEqual('Authentication Error.')
      }
    })
  })

  it('should return userId', () => {
    const token = jwt.sign({ userId: 15 }, keys.appSecret!)

    const result = getUserId({ token: `Prefix ${token}` })

    expect(result).toEqual(15)
  })
})
