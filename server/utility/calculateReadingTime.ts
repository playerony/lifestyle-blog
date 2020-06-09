import { WORDS_PER_MINUTE } from '@config/constant'

import getArticleContentText from './getArticleContentText'

export default (content: string | null | undefined): number => {
  if (!content) {
    return 0
  }

  const contentText = getArticleContentText(content)

  return Math.ceil(contentText.split(' ').length / WORDS_PER_MINUTE)
}
