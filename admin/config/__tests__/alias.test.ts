import alias from '../alias'

describe('alias Configuration', () => {
  it('should return six defined paths', () => {
    expect(alias).toBeDefined()

    expect(Object.keys(alias)).toEqual([
      '@admin',
      '@type',
      '@hook',
      '@page',
      '@style',
      '@config',
      '@asset',
      '@service',
      '@utility',
      '@component'
    ])
  })

  describe('paths', () => {
    it('should return proper value for @asset property', () => {
      expect(alias['@asset'].search('asset')).toBeTruthy()
    })

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

    it('should return proper value for @utility property', () => {
      expect(alias['@utility'].search('utility')).toBeTruthy()
    })

    it('should return proper value for @page property', () => {
      expect(alias['@page'].search('page')).toBeTruthy()
    })

    it('should return proper value for @hook property', () => {
      expect(alias['@hook'].search('hook')).toBeTruthy()
    })

    it('should return proper value for @type property', () => {
      expect(alias['@type'].search('type')).toBeTruthy()
    })
  })
})
