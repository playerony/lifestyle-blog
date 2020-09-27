import dark from '../dark'

describe('dark theme', () => {
  it('should return proper data', () => {
    expect(dark).toEqual(DARK_THEME)
  })
})

const DARK_THEME = {
  color: {
    icon: '#979797',
    text: '#979797',
    card: '#26282b',
    input: '#26282b',
    border: '#979797',
    background: '#16161a'
  }
}
