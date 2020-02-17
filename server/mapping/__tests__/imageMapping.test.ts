import imageMapping from '../imageMapping'

import { ImageType, ImageModel } from '@type/Image'

describe('imageMapping Mapping', () => {
  it('should return proper object', () => {
    expect(imageMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: Partial<ImageModel> = {
  userId: 1,
  imageId: 1,
  filename: 'file'
}

const OUTPUT_MOCK: ImageType = {
  userId: 1,
  imageId: 1,
  filename: 'file',
  createdAt: undefined,
  updatedAt: undefined
}
