import ILoginRequest from '../ILoginRequest'

describe('ILoginRequest Interface', () => {
  it('should contain two parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(2)
  })

  it('has a login parameter', () => {
    expect(objectMock.login).toEqual('login')
  })

  it('has a password parameter', () => {
    expect(objectMock.password).toEqual('password')
  })
})

const objectMock: ILoginRequest = {
  login: 'login',
  password: 'password'
}
