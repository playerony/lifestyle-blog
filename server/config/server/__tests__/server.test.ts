jest.mock('../app', () => {
  class App {
    public listen = jest.fn()
    public get = jest.fn()
  }

  return jest.fn().mockImplementation(() => new App())
})

import waitForExpect from 'wait-for-expect'

import initializeApp from '../app'

describe('server Configuration', () => {
  it('import createDatabaseConnection', () => {
    expect(typeof initializeApp).toEqual('function')
  })

  it('should called an app configuration file', async () => {
    require('../index').default()

    await waitForExpect(() => {
      expect(initializeApp).toHaveBeenCalled()
    })
  })
})
