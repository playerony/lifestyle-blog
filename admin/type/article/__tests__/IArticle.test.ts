import IArticle from '../IArticle'

describe('IArticle Interface', () => {
  it('should contain ten parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(10)
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

  it('has a isPublic parameter', () => {
    expect(objectMock.isPublic).toBeTruthy()
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

const objectMock: IArticle = {
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: 'title',
  isPublic: true,
  categoryList: [],
  image: undefined,
  content: 'content',
  description: 'description',
  createdAt: new Date('2020')
}
