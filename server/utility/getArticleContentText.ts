import tryParseJSON from './tryParseJSON'

export default (jsonContent: string | null | undefined): string => {
  if (!jsonContent) {
    return ''
  }

  const contentObject = tryParseJSON<{ blocks: Array<any> }>(jsonContent)
  if (!contentObject || !contentObject['blocks']) {
    return ''
  }

  return contentObject['blocks'].map((element: any) => element.text).join('')
}
