import jwt from 'jsonwebtoken'
import Substitute from '@fluffy-spoon/substitute'

import LogResolver from '../LogResolver'

import LogService from '@service/LogService'

import { LogType } from '@type/Log'
import Context from '@type/Context'

jest.mock('../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

import keys from '@config/keys'

const _LogService = Substitute.for<LogService>()

let resolver: LogResolver

describe('Log Resolver', () => {
  beforeEach(() => {
    resolver = new LogResolver(_LogService)
  })

  beforeAll(() => {
    _LogService.findAll().mimicks(async () => LOG_LIST_MOCK)
  })

  describe('categoryList Method', () => {
    it('should return proper data', async () => {
      const token = jwt.sign({ userId: 1 }, keys.appSecret!)
      const context: Context = {
        userAgent: '',
        ipAddress: '',
        token: `${keys.jwtPrefix} ${token}`
      }

      const result = await resolver.logList(context)

      expect(result).toEqual(LOG_LIST_MOCK)
    })

    it('should throw an error if token is wrong', async () => {
      const context: Context = {
        token: '',
        userAgent: '',
        ipAddress: ''
      }

      try {
        await resolver.logList(context)
      } catch (e) {
        expect(e.message).toEqual('Forbidden Error.')
      }
    })
  })
})

const LOG_LIST_MOCK: LogType[] = [
  {
    logId: 1,
    level: 'level',
    message: 'message',
    createdAt: new Date('2020'),
    updatedAt: new Date('2020')
  }
]
