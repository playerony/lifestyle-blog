jest.mock('../server')
jest.mock('../database')

import waitForExpect from 'wait-for-expect'

import server from '../server'
import database from '../database'

describe('app Configuration', () => {
  it('should call the appropriate functions', async () => {
    require('../app').default

    await waitForExpect(() => {
      expect(server).toHaveBeenCalled()
      expect(database).toHaveBeenCalled()
    })
  })
})
