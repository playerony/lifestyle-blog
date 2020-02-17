import fs from 'fs'
import { FileUpload } from 'graphql-upload'

import { Image } from '@model/Image'

import { ImageModel, ImageType } from '@type/Image'

import imageMapping from '@mapping/imageMapping'

import generateString from '@utility/generateString'
import getMimetypeExtension from '@utility/getMimetypeExtension'

export default class ImageService {
  async upload(file: FileUpload, userId: number): Promise<ImageType> {
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

    return imageMapping(createdImage)!
  }
}
