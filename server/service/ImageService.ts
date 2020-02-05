import fs from 'fs'
import { FileUpload } from 'graphql-upload'

import { Image } from '@model/Image'

import { ImageModel, ImageAddResult } from '@type/Image'

import generateString from '@utility/generateString'
import getMimetypeExtension from '@utility/getMimetypeExtension'

export default class ImageService {
  async upload(file: FileUpload, userId: number): Promise<ImageAddResult> {
    const { createReadStream, mimetype } = file

    const extension = getMimetypeExtension(mimetype)
    const newFilename = `${generateString()}_${new Date().getTime()}.${extension}`

    const fileStream = createReadStream()
    fileStream.pipe(
      fs.createWriteStream(`${__dirname}/../../asset/upload/${newFilename}`)
    )

    const createdImage = await Image.create<ImageModel>({
      filename: newFilename,
      userId
    })

    return {
      imageId: createdImage.imageId!,
      filename: createdImage.filename!
    }
  }
}
