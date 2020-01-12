import { Log } from '@model/Log'

class Logger {
  public static console(message: string, level?: 'info') {
    console.warn(`[${level}] ${message}`)
  }

  public static async database(message: string, level?: 'error') {
    await Log.create({ level, message })
  }
}

export default Logger
