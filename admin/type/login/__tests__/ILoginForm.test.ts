import ILoginForm from '../ILoginForm'

describe('ILoginForm Interface', () => {
  it('should contain two parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(2)
  })

  it('has a errorData parameter', () => {
    expect(objectMock.errorData).toEqual({ login: [], password: [] })
  })

  it('has a onClick parameter', () => {
    expect(objectMock.onLoginDataChange).toBeDefined()
  })
})

const objectMock: ILoginForm = {
  errorData: { login: [], password: [] },
  onLoginDataChange: jest.fn()
}
