import { FileUpload } from 'graphql-upload'
import fs from 'fs'

import { Image } from '@model/Image'

import { ImageModel, ImageAddResult } from '@type/Image'

import generateString from '@utility/generateString'
import getFilenameExtension from '@utility/getFilenameExtension'

export default class ImageService {
  async upload(file: FileUpload, userId: number): Promise<ImageAddResult> {
    const { createReadStream, filename } = file

    const fileExtension = getFilenameExtension(filename)
    const newFilename = `${generateString()}_${new Date().getTime()}.${fileExtension}`

    const fileStream = createReadStream()
    fileStream.pipe(fs.createWriteStream(`${__dirname}/../../asset/upload/${newFilename}`))

    const createdImage = await Image.create<ImageModel>({ filename: newFilename, userId })

    return {
      imageId: createdImage.imageId!,
      filename: createdImage.filename!
    }
  }
}
