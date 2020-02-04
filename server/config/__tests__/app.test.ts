jest.mock('../server')
jest.mock('../database')
jest.mock('../checkEnvironment')

import waitForExpect from 'wait-for-expect'

import server from '../server'
import database from '../database'
import checkEnvironment from '../checkEnvironment'

describe('app Configuration', () => {
  it('should call the appropriate functions', async () => {
    require('../app').default

    await waitForExpect(() => {
      expect(server).toHaveBeenCalled()
      expect(database).toHaveBeenCalled()
      expect(checkEnvironment).toHaveBeenCalled()
    })
  })
})
