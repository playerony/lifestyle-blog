import light from '../light'

describe('light theme', () => {
  it('should return proper data', () => {
    expect(light).toEqual(LIGHT_THEME)
  })
})

const LIGHT_THEME = {
  color: {
    background: '#f8fbff',
    border: '#999999',
    card: '#ffffff',
    icon: '#274f6f',
    input: '#ffffff',
    text: '#274f6f'
  }
}
