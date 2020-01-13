jest.mock('../checkEnvironment')
jest.mock('../database')
jest.mock('../server')

import waitForExpect from 'wait-for-expect'

import server from '../server'
import database from '../database'
import checkEnvironment from '../checkEnvironment'

describe('app Configuration', () => {
  it('should call the appropriate functions', async () => {
    require('../app').default

    await waitForExpect(() => {
      expect(checkEnvironment).toHaveBeenCalled()
      expect(database).toHaveBeenCalled()
      expect(server).toHaveBeenCalled()
    })
  })
})
