import EToastType from '../EToastType'

describe('EToastType Enum', () => {
  it('should contain three options', () => {
    expect(Object.keys(EToastType)).toHaveLength(3)
  })

  it('should contain INFO property', () => {
    expect(EToastType.INFO).toEqual('INFO')
  })

  it('should contain ERROR property', () => {
    expect(EToastType.ERROR).toEqual('ERROR')
  })

  it('should contain SUCCESS property', () => {
    expect(EToastType.SUCCESS).toEqual('SUCCESS')
  })
})
