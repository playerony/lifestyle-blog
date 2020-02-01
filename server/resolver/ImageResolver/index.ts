import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import ImageService from '@service/ImageService'

import Context from '@type/Context'
import { ImageUploadResult } from '@type/Image'

import Logger from '@utility/Logger'
import getUserId from '@utility/getUserId'
import ValidationError from '@utility/ValidationError'

@Resolver()
export default class ImageResolver {
  constructor(private imageService: ImageService = new ImageService()) { }
  
  @Mutation(type => ImageUploadResult)
  async upload(
    @Ctx() context: Context,
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<ImageUploadResult> {
    const userId = getUserId(context)

    return await this.imageService.upload(file, userId)
  }
}
