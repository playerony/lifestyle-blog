import Transport from 'winston-transport'

import { Log } from '@model/Log'

interface IInfoType {
  level: string
  message: string
}

class DatabaseTransport extends Transport {
  async log({ level, message }: IInfoType): Promise<void> {
    await Log.create({ level, message })
  }
}

export default DatabaseTransport
