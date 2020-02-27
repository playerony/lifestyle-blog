import ILog from '../ILog'

describe('ILog Interface', () => {
  it('should contain four parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(4)
  })

  it('has a logId parameter', () => {
    expect(objectMock.logId).toEqual(1)
  })

  it('has a level parameter', () => {
    expect(objectMock.level).toEqual('level')
  })

  it('has a message parameter', () => {
    expect(objectMock.message).toEqual('message')
  })
})

const objectMock: Required<ILog> = {
  logId: 1,
  level: 'level',
  message: 'message',
  createdAt: new Date('2020')
}
