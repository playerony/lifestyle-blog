import logMapping from '../logMapping'

import { LogType, LogModel } from '@type/Log'

describe('logMapping Mapping', () => {
  it('import logMapping', () => {
    expect(typeof logMapping).toEqual('function')
  })

  it('should return proper object', () => {
    expect(logMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: Partial<LogModel> = {
  logId: 1,
  level: 'level',
  message: 'message'
}

const OUTPUT_MOCK: LogType = {
  logId: 1,
  level: 'level',
  message: 'message',
  createdAt: undefined,
  updatedAt: undefined
}
