import ILoginForm from '../ILoginForm'

describe('ILoginForm Interface', () => {
  it('should contain three parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(3)
  })

  it('has a errorData parameter', () => {
    expect(objectMock.errorData).toEqual({ login: [], password: [] })
  })

  it('has a onLoginDataChange parameter', () => {
    expect(objectMock.onLoginDataChange).toBeDefined()
  })

  it('has a preventNextRequest parameter', () => {
    expect(objectMock.preventNextRequest).toBeTruthy()
  })
})

const objectMock: ILoginForm = {
  preventNextRequest: true,
  onLoginDataChange: jest.fn(),
  errorData: { login: [], password: [] }
}
