import IArticle from '../IArticle'

describe('IArticle Interface', () => {
  it('should contain nine parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(9)
  })

  it('has an userId parameter', () => {
    expect(objectMock.userId).toEqual(1)
  })

  it('has a imageId parameter', () => {
    expect(objectMock.imageId).toEqual(1)
  })

  it('has a articleId parameter', () => {
    expect(objectMock.articleId).toEqual(1)
  })

  it('has a title parameter', () => {
    expect(objectMock.title).toEqual('title')
  })

  it('has a categoryList parameter', () => {
    expect(objectMock.categoryList).toEqual([])
  })

  it('has a image parameter', () => {
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

const objectMock: IArticle = {
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: 'title',
  categoryList: [],
  image: undefined,
  content: 'content',
  description: 'description',
  createdAt: new Date('2020')
}
