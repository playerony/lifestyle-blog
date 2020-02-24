import { LogType } from '@type/Log'

jest.doMock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static findAll = jest
      .fn()
      .mockImplementation(() => LOG_LIST_MOCK)
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('LogService Service', () => {
  describe('findAll Method', () => {
    it('should return a list with logs', async () => {
      const LogService = require('../LogService').default
      const logService = new LogService()

      const result = await logService.findAll()

      expect(result).toEqual(LOG_LIST_MOCK)
    })
  })
})

const LOG_LIST_MOCK: LogType[] = [
  {
    logId: 1,
    level: 'level 1',
    message: 'message 1',
    createdAt: new Date('2020'),
    updatedAt: new Date('2020')
  },
  {
    logId: 2,
    level: 'level 2',
    message: 'message 2',
    createdAt: new Date('2020'),
    updatedAt: new Date('2020')
  }
]
