import cloudinary from 'cloudinary'
import { FileUpload } from 'graphql-upload'

import { Image } from '@model/Image'

import { ImageModel, ImageType } from '@type/Image'

import imageMapping from '@mapping/imageMapping'

// no-async-promise-executor
export default class ImageService {
  async upload(file: FileUpload, userId: number): Promise<ImageType> {
    const { createReadStream } = file

    const fileStream = createReadStream()

    const photoUrl = await new Promise(async resolve => {
      const uploadStream = await cloudinary.v2.uploader.upload_stream(
        {
          width: 1920,
          height: 1080,
          crop: 'thumb',
          format: 'jpeg'
        },
        (err, image) => {
          resolve(image.url)
        }
      )

      fileStream.pipe(uploadStream)
    })

    const createdImage = await Image.create<ImageModel>({
      userId,
      photoUrl
    })

    return imageMapping(createdImage)
  }
}
