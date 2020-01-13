import alias from '../alias'

describe('alias Configuration', () => {
  it('should return three defined paths', () => {
    expect(alias).toBeDefined()
    expect(Object.keys(alias)).toEqual(['@admin', '@component', '@config'])
  })

  describe('paths', () => {
    it('should return proper value for @admin property', () => {
      expect(alias['@admin'].search('admin')).toBeTruthy()
    })

    it('should return proper value for @config property', () => {
      expect(alias['@config'].search('config')).toBeTruthy()
    })

    it('should return proper value for @component property', () => {
      expect(alias['@component'].search('component')).toBeTruthy()
    })
  })
})
