import { FileUpload } from 'graphql-upload'
import fs from 'fs'

import { Image } from '@model/Image'

import { File } from '@type/File'

import generateString from '@utility/generateString'

export default class UserService {
  async upload(file: FileUpload, userId: number): Promise<File> {
    const filenameExtensionRegexp = /(?:\.([^.]+))?$/

    const { createReadStream, filename } = file

    const fileExtension = filenameExtensionRegexp.exec(filename)![1]
    const newFilename = `${generateString()}_${new Date().getTime()}.${fileExtension}`

    const fileStream = createReadStream()

    fileStream.pipe(fs.createWriteStream(`${__dirname}/../../asset/upload/${newFilename}`))

    await Image.create({ filename: newFilename, userId })

    return {
        id: 1,
        encoding: '',
        filename: '',
        mimetype: '',
        path: ''
      }
  }
}
