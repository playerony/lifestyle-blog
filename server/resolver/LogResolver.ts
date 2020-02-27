import { Resolver, Query, Ctx } from 'type-graphql'

import LogService from '@service/LogService'

import Context from '@type/Context'
import { LogType } from '@type/Log'

import getUserId from '@utility/getUserId'

@Resolver()
export default class LogResolver {
  constructor(private logService: LogService = new LogService()) {}

  @Query(type => [LogType])
  async logList(@Ctx() context: Context): Promise<LogType[]> {
    getUserId(context)

    return this.logService.findAll()
  }
}
