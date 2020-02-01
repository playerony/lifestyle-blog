import { Log } from '@model/Log'
import { User } from '@model/User'
import { Image } from '@model/Image'

export default async () => {
  await Log.sync()
  
  await User.sync()
  await Image.sync()
}
