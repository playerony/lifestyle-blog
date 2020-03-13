import ICategory from '../ICategory'

describe('ICategory Interface', () => {
  it('should contain three parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(3)
  })

  it('has a categoryId parameter', () => {
    expect(objectMock.categoryId).toEqual(1)
  })

  it('has a name parameter', () => {
    expect(objectMock.name).toEqual('name')
  })

  it('has a description parameter', () => {
    expect(objectMock.description).toEqual('description')
  })
})

const objectMock: Required<ICategory> = {
  name: 'name',
  categoryId: 1,
  description: 'description'
}
