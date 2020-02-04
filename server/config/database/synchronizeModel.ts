import { Log } from '@model/Log'
import { User } from '@model/User'
import { Image } from '@model/Image'

import { Article } from '@model/Article'
import { Category } from '@model/Category'

export default async () => {
  await Log.sync()

  await User.sync()
  await Image.sync()

  await Article.sync()
  await Category.sync()

  const { ArticleCategory } = await import('@model/ArticleCategory')
  await ArticleCategory.sync()
}
