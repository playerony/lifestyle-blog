import ICategory from '../ICategory'

describe('ICategory Interface', () => {
  it('should contain two parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(2)
  })

  it('has a categoryId parameter', () => {
    expect(objectMock.categoryId).toEqual(1)
  })

  it('has a name parameter', () => {
    expect(objectMock.name).toEqual('name')
  })
})

const objectMock: Required<ICategory> = {
  name: 'name',
  categoryId: 1
}
