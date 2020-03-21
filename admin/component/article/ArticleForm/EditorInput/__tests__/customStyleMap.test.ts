import customStyleMap from '../customStyleMap'

describe('customStyleMap Configuration', () => {
  it('should return proper data', () => {
    expect(customStyleMap).toEqual(CUSTOM_STYLE_MAP)
  })
})

const CUSTOM_STYLE_MAP = {
  LEFT: {
    display: 'block',
    textAlign: 'left'
  },
  CENTER: {
    display: 'block',
    textAlign: 'center'
  },
  RIGHT: {
    display: 'block',
    textAlign: 'right'
  }
}
