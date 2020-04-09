import { WORDS_PER_MINUTE } from '@config/constant'

import tryParseJSON from './tryParseJSON'

export default (content: string | null | undefined): number => {
  if (!content) {
    return 0
  }

  const contentObject = tryParseJSON<{ blocks: Array<any> }>(content)
  if (!contentObject || !contentObject['blocks']) {
    return 0
  }

  const contentText = contentObject['blocks']
    .map((element: any) => element.text)
    .join('')

  return Math.ceil(contentText.length / WORDS_PER_MINUTE)
}
