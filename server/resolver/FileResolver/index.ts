import { Resolver, Mutation, Arg } from 'type-graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'

import { File } from '@type/File'

@Resolver()
export default class FileResolver {
  @Mutation(type => File)
  async upload(
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<File> {
    console.warn(file)
    // const { filename, mimetype, createReadStream } = file
    // const stream = createReadStream()

    return {
      id: 1,
      encoding: '',
      filename: '',
      mimetype: '',
      path: ''
    }
  }
}
