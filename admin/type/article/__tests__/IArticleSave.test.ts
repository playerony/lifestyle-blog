import IArticleSave from '../IArticleSave'

describe('IArticleSave Interface', () => {
  it('should contain five parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(5)
  })

  it('has an imageId parameter', () => {
    expect(objectMock.imageId).toEqual(1)
  })

  it('has a title parameter', () => {
    expect(objectMock.title).toEqual('title')
  })

  it('has a categoryIdList parameter', () => {
    expect(objectMock.categoryIdList).toEqual([])
  })

  it('has a content parameter', () => {
    expect(objectMock.content).toEqual('content')
  })

  it('has a description parameter', () => {
    expect(objectMock.description).toEqual('description')
  })
})

const objectMock: IArticleSave = {
  imageId: 1,
  title: 'title',
  categoryIdList: [],
  content: 'content',
  description: 'description'
}
