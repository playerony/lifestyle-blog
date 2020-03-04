import EToastType from '../EToastType'

describe('EToastType Enum', () => {
  it('should contain two options', () => {
    expect(Object.keys(EToastType)).toHaveLength(2)
  })

  it('should contain SUCCESS property', () => {
    expect(EToastType.SUCCESS).toEqual('SUCCESS')
  })

  it('should contain ERROR property', () => {
    expect(EToastType.ERROR).toEqual('ERROR')
  })
})
