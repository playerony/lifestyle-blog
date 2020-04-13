import * as userTypeList from '../User'
import { UserType, UserModel, UserAddResult } from '../User'

describe('User Types', () => {
  it('should contain three objects', () => {
    expect(Object.keys(userTypeList)).toHaveLength(3)
  })

  describe('UserType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<UserType> = {
        userId: 1,
        login: 'login',
        password: 'password',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'userId',
        'login',
        'password',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('UserAddResult Type', () => {
    it('should contain proper fields', () => {
      const data: Required<UserAddResult> = {
        token: 'token'
      }

      expect(Object.keys(data)).toEqual(['token'])
    })
  })

  describe('UserModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<UserModel> = {
        userId: 1,
        login: 'login',
        password: 'password',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'userId',
        'login',
        'password',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})
