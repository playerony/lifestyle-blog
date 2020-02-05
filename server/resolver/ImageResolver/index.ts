import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import ImageService from '@service/ImageService'

import Context from '@type/Context'
import { ImageAddResult } from '@type/Image'

import getUserId from '@utility/getUserId'

import { uploadImageValidation } from './ImageResolver.validator'

@Resolver()
export default class ImageResolver {
  constructor(private imageService: ImageService = new ImageService()) {}

  @Mutation(type => ImageAddResult)
  async uploadImage(
    @Ctx() context: Context,
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<ImageAddResult> {
    const userId = getUserId(context)

    uploadImageValidation(file)

    return await this.imageService.upload(file, userId)
  }
}
