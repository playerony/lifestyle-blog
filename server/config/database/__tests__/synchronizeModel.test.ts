const syncMock = jest.fn()

jest.doMock('../sequelize', () => {
  class Sequelize {
    public sync = syncMock
  }

  return {
    sequelize: new Sequelize()
  }
})

describe('synchronizeModel Function', () => {
  it('should synchronize models with database', async () => {
    await require('../synchronizeModel').default()

    expect(syncMock).toHaveBeenCalled()
  })
})
