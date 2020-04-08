import { WORDS_PER_MINUTE } from '@config/constant'

export default (content: string | null | undefined): number => {
  if (!content) {
    return 0
  }

  const contentText = JSON.parse(content)
    ['blocks'].map((element: any) => element.text)
    .join('')

  return Math.ceil(contentText.length / WORDS_PER_MINUTE)
}
