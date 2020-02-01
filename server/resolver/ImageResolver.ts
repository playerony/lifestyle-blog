import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import ImageService from '@service/ImageService'

import Context from '@type/Context'
import { ImageAddResult } from '@type/Image'

import getUserId from '@utility/getUserId'

@Resolver()
export default class ImageResolver {
  constructor(private imageService: ImageService = new ImageService()) { }
  
  @Mutation(type => ImageAddResult)
  async upload(
    @Ctx() context: Context,
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<ImageAddResult> {
    const userId = getUserId(context)

    return await this.imageService.upload(file, userId)
  }
}
