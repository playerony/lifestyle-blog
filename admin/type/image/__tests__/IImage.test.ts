import IImage from '../IImage'

describe('IImage Interface', () => {
  it('should contain two parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(2)
  })

  it('has a imageId parameter', () => {
    expect(objectMock.imageId).toEqual(1)
  })

  it('has a photoUrl parameter', () => {
    expect(objectMock.photoUrl).toEqual('photoUrl')
  })
})

const objectMock: Required<IImage> = {
  imageId: 1,
  photoUrl: 'photoUrl'
}
