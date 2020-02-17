import { ImageType, ImageModel } from '@type/Image'

export default (record?: ImageModel): ImageType | null => {
  if (!record) {
    return null
  }

  return {
    userId: record.userId,
    imageId: record.imageId,
    filename: record.filename,
    updatedAt: record.updatedAt,
    createdAt: record.createdAt
  }
}
