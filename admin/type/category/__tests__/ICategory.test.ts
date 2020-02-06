import ICategory from '../ICategory'

describe('ICategory Interface', () => {
  it('should contain two parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(2)
  })

  it('has a categoryId parameter', () => {
    expect(objectMock.categoryId).toEqual(1)
  })

  it('has a name parameter', () => {
    expect(objectMock.name).toEqual('Category name')
  })
})

const objectMock: ICategory = {
  categoryId: 1,
  name: 'Category name'
}