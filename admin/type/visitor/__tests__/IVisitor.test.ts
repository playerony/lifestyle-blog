import IVisitor from '../IVisitor'

describe('IVisitor Interface', () => {
  it('should contain six parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(6)
  })

  it('has a articleId parameter', () => {
    expect(objectMock.articleId).toEqual(1)
  })

  it('has a visitorId parameter', () => {
    expect(objectMock.visitorId).toEqual(1)
  })

  it('has a ipAddress parameter', () => {
    expect(objectMock.ipAddress).toEqual('192')
  })

  it('has a userAgent parameter', () => {
    expect(objectMock.userAgent).toEqual('Mobile')
  })

  it('has a createdAt parameter', () => {
    expect(objectMock.createdAt).toBeDefined()
  })

  it('has a updatedAt parameter', () => {
    expect(objectMock.updatedAt).toBeDefined()
  })
})

const objectMock: Required<IVisitor> = {
  articleId: 1,
  visitorId: 1,
  ipAddress: '192',
  userAgent: 'Mobile',
  createdAt: new Date('2019'),
  updatedAt: new Date('2019')
}
