import { Express } from 'express'
import waitForExpect from 'wait-for-expect'

const setMock = jest.fn()
const useMock = jest.fn()
const applyMiddlewareMock = jest.fn()

jest.doMock('../apolloServer', () => {
  class Server {
    public applyMiddleware: Function = applyMiddlewareMock
  }

  return jest.fn().mockImplementation(() => new Server())
})

jest.doMock('express', () => () => ({
  set: setMock,
  use: useMock
}))

describe('app Configuration', () => {
  const OLD_ENV = process.env
  let appConfig: () => Express

  beforeEach(() => {
    jest.resetModules()
    jest.setTimeout(30000)

    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV

    process.env.PORT = '1000'
    process.env.ADMIN_URL = 'ADMIN_URL'
    process.env.CLIENT_URL = 'CLIENT_URL'

    appConfig = require('../app').default
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should use proper middlewares', async () => {
    await appConfig()

    expect(useMock).toHaveBeenCalled()
  })

  it('should prepare a server configuration', async () => {
    await appConfig()

    await waitForExpect(() =>
      expect(applyMiddlewareMock).toHaveBeenCalledWith({
        app: { set: setMock, use: useMock },
        cors: { credentials: true, origin: ['ADMIN_URL', 'CLIENT_URL'] }
      })
    )
  })
})
