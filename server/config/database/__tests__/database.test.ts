jest.mock('../synchronizeModel')
jest.mock('../createDatabaseConnection')

import waitForExpect from 'wait-for-expect'

import synchronizeModel from '../synchronizeModel'
import createDatabaseConnection from '../createDatabaseConnection'

describe('database Configuration', () => {
  it('should call the appropriate functions', async () => {
    require('../index').default()

    await waitForExpect(() => {
      expect(synchronizeModel).toHaveBeenCalled()
      expect(createDatabaseConnection).toHaveBeenCalled()
    })
  })
})
