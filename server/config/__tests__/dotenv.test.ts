import dotenv from 'dotenv'

jest.mock('dotenv')

describe('dotenv Configuration', () => {
  beforeAll(() => {
    dotenv.config = jest.fn()
  })

  it('should call config function without parameters', () => {
    require('../dotenv')

    expect(dotenv.config).toBeCalledTimes(1)
    expect(dotenv.config).toBeCalledWith()
  })
})
