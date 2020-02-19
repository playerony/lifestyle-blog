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

    process.env.SERVER_PORT = '1000'
    process.env.ADMIN_URL = 'ADMIN_URL'

    appConfig = require('../app').default
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should set an app port defined as enviroment variable', async () => {
    await appConfig()

    expect(setMock).toHaveBeenCalledWith('port', '1000')
  })

  it('should use a compression middleware', async () => {
    await appConfig()

    expect(useMock).toHaveBeenCalledTimes(1)
  })

  it('should prepare a server configuration', async () => {
    await appConfig()

    await waitForExpect(() =>
      expect(applyMiddlewareMock).toHaveBeenCalledWith({
        app: { set: setMock, use: useMock },
        cors: { credentials: true, origin: 'ADMIN_URL' }
      })
    )
  })
})
