import * as imageTypeList from '../Image'
import { ImageType, ImageModel } from '../Image'

describe('Image Types', () => {
  it('should contain two objects', () => {
    expect(Object.keys(imageTypeList)).toHaveLength(2)
  })

  describe('ImageType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<ImageType> = {
        userId: 1,
        imageId: 1,
        photoUrl: 'photoUrl',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'userId',
        'imageId',
        'photoUrl',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('ImageModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<ImageModel> = {
        userId: 1,
        imageId: 1,
        photoUrl: 'photoUrl',
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'userId',
        'imageId',
        'photoUrl',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})
