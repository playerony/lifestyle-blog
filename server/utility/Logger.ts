import { Log } from '@model/Log'

import keys from '@config/keys'

type TLevel = 'log' | 'info' | 'warn' | 'error'

class Logger {
  public static console(message: string, level: TLevel = 'warn'): void {
    if (keys.nodeEnv === 'development') {
      console[level](`[${level}] ${message}`)
    }
  }

  public static async database(
    message: string,
    level: TLevel = 'error'
  ): Promise<void> {
    await Log.create({ level, message })

    this.console(message, level)
  }
}

export default Logger
