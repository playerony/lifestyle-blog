import fileMock from '../fileMock'

describe('fileMock Configuration', () => {
  it('should import', () => {
    expect(typeof fileMock).toEqual('string')
  })

  it('should return proper string', () => {
    expect(fileMock).toEqual('file-mock')
  })
})
