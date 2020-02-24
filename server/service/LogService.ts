import { Log } from '@model/Log'

import { LogModel, LogType } from '@type/Log'

import logMapping from '@mapping/logMapping'

export default class LogService {
  async findAll(): Promise<LogType[]> {
    const logList = await Log.findAll<LogModel>()

    return logList.map(logMapping)
  }
}
