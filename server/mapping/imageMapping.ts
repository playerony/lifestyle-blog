import { ImageType, ImageModel } from '@type/Image'

export default (record: ImageModel): ImageType => ({
  userId: record.userId,
  imageId: record.imageId,
  photoUrl: record.photoUrl,
  updatedAt: record.updatedAt,
  createdAt: record.createdAt
})
