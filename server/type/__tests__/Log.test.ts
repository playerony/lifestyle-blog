import * as logTypeList from '../Log'
import { LogType, LogModel } from '../Log'

describe('Log Types', () => {
  it('should contain two objects', () => {
    expect(Object.keys(logTypeList)).toHaveLength(2)
  })

  describe('LogType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<LogType> = {
        logId: 1,
        level: 'level',
        message: 'message',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'logId',
        'level',
        'message',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('LogModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<LogModel> = {
        logId: 1,
        level: 'level',
        message: 'message',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'logId',
        'level',
        'message',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})
