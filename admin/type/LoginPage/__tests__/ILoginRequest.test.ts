import ILoginRequest from '../ILoginRequest'

describe('ILoginRequest Interface', () => {
  it('should contain two parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(2)
  })

  it('has a login parameter', () => {
    expect(objectMock.login).toEqual('testLogin')
  })

  it('has a password parameter', () => {
    expect(objectMock.password).toEqual('testPassword')
  })
})

const objectMock: ILoginRequest = {
  login: 'testLogin',
  password: 'testPassword'
}
