import { Resolver, Mutation, Arg } from 'type-graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'

import ImageService from '@service/ImageService'

import { File } from '@type/File'

@Resolver()
export default class ImageResolver {
  constructor(private imageService: ImageService = new ImageService()) { }
  
  @Mutation(type => File)
  async upload(
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<File> {
    return await this.imageService.upload(file)
  }
}
