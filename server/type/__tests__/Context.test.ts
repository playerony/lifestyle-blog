import Context from '../Context'

describe('Context Type', () => {
  it('should contain three parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(3)
  })

  it('has a token parameter', () => {
    expect(objectMock.token).toEqual('token')
  })

  it('has a ipAddress parameter', () => {
    expect(objectMock.ipAddress).toEqual('ipAddress')
  })

  it('has a userAgent parameter', () => {
    expect(objectMock.userAgent).toEqual('userAgent')
  })
})

const objectMock: Required<Context> = {
  token: 'token',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent'
}
