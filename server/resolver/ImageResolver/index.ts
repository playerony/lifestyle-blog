import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import ImageService from '@service/ImageService'

import Context from '@type/Context'
import { ImageType } from '@type/Image'

import getUserId from '@utility/getUserId'

import { uploadImageValidation } from './ImageResolver.validator'

@Resolver()
export default class ImageResolver {
  constructor(private imageService: ImageService = new ImageService()) {}

  @Mutation(type => ImageType)
  async uploadImage(
    @Ctx() context: Context,
    @Arg('file', type => GraphQLUpload) file: FileUpload
  ): Promise<ImageType> {
    const userId = getUserId(context)

    uploadImageValidation(file)

    return this.imageService.upload(file, userId)
  }
}
