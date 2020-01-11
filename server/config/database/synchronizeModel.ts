import { Log } from '@model/Log'
import { User } from '@model/User'

export default async () => {
  await Log.sync()
  await User.sync()
}
