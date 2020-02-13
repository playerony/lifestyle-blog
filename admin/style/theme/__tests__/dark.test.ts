import dark from '../dark'

describe('dark theme', () => {
  it('should return proper data', () => {
    expect(dark).toEqual(DARK_THEME)
  })
})

const DARK_THEME = {
  color: {
    background: '#111933',
    border: '#ffffff',
    card: '#33393e',
    icon: '#ffffff',
    input: '#33393e',
    text: '#ffffff'
  }
}
