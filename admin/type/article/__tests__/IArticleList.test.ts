import IArticleList from '../IArticleList'

describe('IArticleList Interface', () => {
  it('should contain eleven parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(11)
  })

  it('has a userId parameter', () => {
    expect(objectMock.userId).toEqual(1)
  })

  it('has an imageId parameter', () => {
    expect(objectMock.imageId).toEqual(1)
  })

  it('has an articleId parameter', () => {
    expect(objectMock.articleId).toEqual(1)
  })

  it('has a title parameter', () => {
    expect(objectMock.title).toEqual('title')
  })

  it('has a todayVisitor parameter', () => {
    expect(objectMock.todayVisitor).toEqual(1)
  })

  it('has a totalVisitor parameter', () => {
    expect(objectMock.totalVisitor).toEqual(1)
  })

  it('has a categoryList parameter', () => {
    expect(objectMock.categoryList).toEqual([])
  })

  it('has an image parameter', () => {
    expect(objectMock.image).not.toBeDefined()
  })

  it('has a content parameter', () => {
    expect(objectMock.content).toEqual('content')
  })

  it('has a description parameter', () => {
    expect(objectMock.description).toEqual('description')
  })

  it('has a createdAt parameter', () => {
    expect(objectMock.createdAt).toEqual(new Date('2020'))
  })
})

const objectMock: IArticleList = {
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: 'title',
  todayVisitor: 1,
  totalVisitor: 1,
  categoryList: [],
  image: undefined,
  content: 'content',
  description: 'description',
  createdAt: new Date('2020')
}
