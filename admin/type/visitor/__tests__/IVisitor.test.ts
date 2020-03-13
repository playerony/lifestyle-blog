import IVisitor from '../IVisitor'

describe('IVisitor Interface', () => {
  it('should contain five parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(5)
  })

  it('has a articleId parameter', () => {
    expect(objectMock.articleId).toEqual(1)
  })

  it('has a visitorId parameter', () => {
    expect(objectMock.visitorId).toEqual(1)
  })

  it('has a ipAddress parameter', () => {
    expect(objectMock.ipAddress).toEqual('ipAddress')
  })

  it('has a userAgent parameter', () => {
    expect(objectMock.userAgent).toEqual('userAgent')
  })

  it('has a createdAt parameter', () => {
    expect(objectMock.createdAt).toEqual(new Date('2020'))
  })
})

const objectMock: Required<IVisitor> = {
  articleId: 1,
  visitorId: 1,
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  createdAt: new Date('2020')
}
