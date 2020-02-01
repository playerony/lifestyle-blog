import { FileUpload } from 'graphql-upload'
import fs from 'fs'

import { Image } from '@model/Image'

import { ImageModel, ImageUploadResult } from '@type/Image'

import generateString from '@utility/generateString'
import getFilenameExtension from '@utility/getFilenameExtension'

export default class UserService {
  async upload(file: FileUpload, userId: number): Promise<ImageUploadResult> {
    const { createReadStream, filename } = file

    const fileExtension = getFilenameExtension(filename)
    const newFilename = `${generateString()}_${new Date().getTime()}.${fileExtension}`

    const fileStream = createReadStream()
    fileStream.pipe(fs.createWriteStream(`${__dirname}/../../asset/upload/${newFilename}`))

    const createdImage: ImageModel = await Image.create<any>({ filename: newFilename, userId })

    return {
      imageId: createdImage.imageId,
      filename: createdImage.filename
    }
  }
}
