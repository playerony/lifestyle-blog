import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import ImageService from '@service/ImageService'

import { File } from '@type/File'
import Context from '@type/Context'

@Resolver()
export default class ImageResolver {
  constructor(private imageService: ImageService = new ImageService()) { }
  
  @Mutation(type => File)
  async upload(
    @Ctx() context: Context,
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<File> {
    console.warn(context)

    return await this.imageService.upload(file)
  }
}
