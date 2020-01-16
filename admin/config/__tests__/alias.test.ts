import alias from '../alias'

describe('alias Configuration', () => {
  it('should return three defined paths', () => {
    expect(alias).toBeDefined()

    expect(Object.keys(alias)).toEqual([
      '@admin',
      '@page',
      '@style',
      '@config',
      '@service',
      '@component'
    ])
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

    it('should return proper value for @style property', () => {
      expect(alias['@style'].search('style')).toBeTruthy()
    })

    it('should return proper value for @service property', () => {
      expect(alias['@service'].search('service')).toBeTruthy()
    })

    it('should return proper value for @page property', () => {
      expect(alias['@page'].search('page')).toBeTruthy()
    })
  })
})
