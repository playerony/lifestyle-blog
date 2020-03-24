import jwt from 'jsonwebtoken'

import Context from '@type/Context'

import getUserId from '../getUserId'

jest.mock('../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

const getContext = (token: string): Context => ({
  token,
  ipAddress: '',
  userAgent: ''
})

describe('getUserId Function', () => {
  it('import getUserId', () => {
    expect(typeof getUserId).toEqual('function')
  })

  describe('should throw an error', () => {
    it('if passed token does not exist', () => {
      try {
        getUserId(getContext(''))
      } catch (e) {
        expect(e.message).toEqual('Forbidden Error.')
      }
    })

    it('if token prefix is wrong', () => {
      try {
        getUserId(getContext('prefix token'))
      } catch (e) {
        expect(e.message).toEqual('Forbidden Error.')
      }
    })

    it('if decoded token do not contain userId', () => {
      const keys = require('@config/keys')
      const token = jwt.sign({ userId: null }, keys.appSecret!)

      try {
        getUserId(getContext(`Prefix ${token}`))
      } catch (e) {
        expect(e.message).toEqual('Forbidden Error.')
      }
    })
  })

  it('should return userId', () => {
    const keys = require('@config/keys')
    const token = jwt.sign({ userId: 15 }, keys.appSecret!)

    const result = getUserId(getContext(`Prefix ${token}`))

    expect(result).toEqual(15)
  })
})
