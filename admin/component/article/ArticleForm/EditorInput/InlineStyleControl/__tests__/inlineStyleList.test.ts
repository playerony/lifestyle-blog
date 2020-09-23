import inlineStyleList from '../inlineStyleList'

describe('inlineStyleList Configuration', () => {
  it('should return proper object', () => {
    expect(inlineStyleList).toEqual(INLINE_STYLE_LIST)
  })
})

const INLINE_STYLE_LIST = [
  { label: 'Pogrubienie', style: 'BOLD' },
  { label: 'Kursywa', style: 'ITALIC' },
  { label: 'Podkreśl', style: 'UNDERLINE' },
  { label: 'Tekst do lewej', style: 'LEFT' },
  { label: 'Wyśrodkuj tekst', style: 'CENTER' },
  { label: 'Tekst do prawej', style: 'RIGHT' }
]
