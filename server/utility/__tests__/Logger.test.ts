// @ts-nocheck
const { dataTypes: DataTypes } = require('sequelize-test-helpers')

class Sequelize {}

const initMock = jest.fn()
const createMock = jest.fn()

jest.doMock('sequelize', () => {
  class Model {
    public static init = initMock
    public static create = createMock
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('Logger Class', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()

    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV

    process.env.NODE_ENV = 'development'
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  describe('Logger.console Function', () => {
    const consoleMock = jest.fn()
    console.warn = consoleMock

    it('should render a message', () => {
      const Logger = require('../Logger').default

      Logger.console('Test Message', 'warn')

      expect(consoleMock).toHaveBeenCalledWith('[warn] Test Message')
    })

    it('should not render a message', () => {
      process.env.NODE_ENV = 'xD'
      const Logger = require('../Logger').default

      Logger.console('Test Message', 'warn')

      expect(consoleMock).not.toHaveBeenCalled()
    })
  })

  describe('Logger.database Function', () => {
    it('should send db log', () => {
      const Logger = require('../Logger').default

      Logger.database('Test Message', 'warn')

      expect(createMock).toHaveBeenCalledWith({
        level: 'warn',
        message: 'Test Message'
      })
    })
  })
})
