import { Express } from 'express'
import waitForExpect from 'wait-for-expect'

jest.mock('../apolloServer', () => {
  class Server {
    public applyMiddleware: Function = jest.fn()
  }

  return jest.fn().mockImplementation(() => new Server())
})

import apolloServer from '../apolloServer'

describe('app Configuration', () => {
  const OLD_ENV = process.env
  let appConfig: () => Express

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV

    process.env.APP_PORT = '3200'

    appConfig = require('../app').default
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('should set properly app port', async () => {
    const result = await appConfig()

    expect(result.locals.settings.port).toEqual('3200')
  })

  it('should prepare server configuration', async () => {
    appConfig()
    await apolloServer()

    await waitForExpect(() => {
      expect(apolloServer).toHaveBeenCalled()
    })
  })
})
