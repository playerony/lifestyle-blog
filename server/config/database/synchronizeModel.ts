import { Log } from '@model/Log'
import { User } from '@model/User'
import { Image } from '@model/Image'
import { Category } from '@model/Category'

export default async () => {
  await Log.sync()
  await Category.sync()
  
  await User.sync()
  await Image.sync()
}
