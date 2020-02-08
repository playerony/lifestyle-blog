import inlineStyleList from '../inlineStyleList'

describe('inlineStyleList Configuration', () => {
  it('should return proper object', () => {
    expect(inlineStyleList).toEqual(INLINE_STYLE_LIST)
  })
})

const INLINE_STYLE_LIST = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
]
