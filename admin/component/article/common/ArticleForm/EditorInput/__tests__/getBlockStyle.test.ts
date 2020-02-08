import { ContentBlock } from 'draft-js'

import getBlockStyle from '../getBlockStyle'

const getContentBlock = (type: string): ContentBlock => {
  const contentBlock = new ContentBlock()

  return new ContentBlock(contentBlock.set('type', type))
}

describe('getBlockStyle', () => {
  it('should return empty string', () => {
    expect(getBlockStyle(getContentBlock(''))).toEqual('')
    expect(getBlockStyle(getContentBlock('xd'))).toEqual('')
    expect(getBlockStyle(getContentBlock('type'))).toEqual('')
    expect(getBlockStyle(getContentBlock('test'))).toEqual('')
  })

  it('should return className', () => {
    expect(getBlockStyle(getContentBlock('blockquote'))).toEqual(
      'DraftEditor-blockquote'
    )
  })
})
