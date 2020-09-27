import jwt from 'jsonwebtoken'
import { FileUpload } from 'graphql-upload'
import Substitute, { Arg } from '@fluffy-spoon/substitute'

import ImageResolver from '../index'

import ImageService from '@service/ImageService'

import Context from '@type/Context'
import { ImageType } from '@type/Image'

jest.mock('../../../config/keys', () => ({
  jwtPrefix: 'Prefix',
  appSecret: 'Secret test'
}))

import keys from '@config/keys'

const _ImageService = Substitute.for<ImageService>()

let resolver: ImageResolver

describe('Image Resolver', () => {
  beforeEach(() => {
    resolver = new ImageResolver(_ImageService)
  })

  beforeAll(() => {
    _ImageService
      .upload(Arg.any(), Arg.any())
      .mimicks(async () => UPLOAD_METHOD_MOCK)
  })

  describe('uploadImage Mutation', () => {
    describe('should throw an error', () => {
      it('if token is wrong', async () => {
        const context: Context = {
          token: '',
          userAgent: '',
          ipAddress: ''
        }

        try {
          await resolver.uploadImage(context, FILE_MOCK)
        } catch (e) {
          expect(e.message).toEqual('Brak dostępu.')
        }
      })

      it('if passed image data is wrong', async () => {
        const token = jwt.sign({ userId: 1 }, keys.appSecret!)
        const context: Context = {
          userAgent: '',
          ipAddress: '',
          token: `${keys.jwtPrefix} ${token}`
        }

        try {
          await resolver.uploadImage(context, {
            ...FILE_MOCK,
            mimetype: 'wrong value'
          })
        } catch (e) {
          expect(e.message).toEqual(
            JSON.stringify({
              filename: [],
              mimetype: ['Podane wartości nie są takie same.'],
              encoding: [],
              createReadStream: []
            })
          )
        }
      })
    })

    it('should return proper data', async () => {
      const token = jwt.sign({ userId: 1 }, keys.appSecret!)
      const context: Context = {
        userAgent: '',
        ipAddress: '',
        token: `${keys.jwtPrefix} ${token}`
      }

      const result = await resolver.uploadImage(context, FILE_MOCK)

      expect(result).toEqual(UPLOAD_METHOD_MOCK)
    })
  })
})

const UPLOAD_METHOD_MOCK: ImageType = {
  imageId: 1,
  photoUrl: 'example.jpeg'
}

const FILE_MOCK: FileUpload = {
  encoding: '7bit',
  filename: 'test.jpeg',
  mimetype: 'image/jpeg',
  createReadStream: jest.fn()
}
