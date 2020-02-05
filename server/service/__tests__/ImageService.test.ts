import { FileUpload } from 'graphql-upload'
const { dataTypes: DataTypes } = require('sequelize-test-helpers')

import { ImageModel } from '@type/Image'

jest.mock('fs')
jest.doMock('sequelize', () => {
  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static belongsTo = jest.fn()
    public static create = jest.fn().mockImplementation(() => IMAGE_MOCK)
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

const pipeFunctionMock = jest.fn()

describe('ImageService Service', () => {
  describe('upload Method', () => {
    it('should return created image', async () => {
      const ImageService = require('../ImageService').default
      const imageService = new ImageService()

      const result = await imageService.upload(FILE_MOCK, 1)

      expect(pipeFunctionMock).toHaveBeenCalled()
      expect(result).toEqual({ imageId: 1, filename: 'example.jpeg' })
    })

    it('should throw an error', async () => {
      try {
        const ImageService = require('../ImageService').default
        const imageService = new ImageService()

        await imageService.upload(
          { ...FILE_MOCK, mimetype: 'wrong_mimtype' },
          1
        )
      } catch (e) {
        expect(e.message.includes('Provided mimetype is wrong.')).toBeTruthy()
      }
    })
  })
})

const FILE_MOCK: FileUpload = {
  encoding: '7bin',
  filename: 'test.jpeg',
  mimetype: 'image/jpeg',
  createReadStream: jest.fn().mockImplementation(() => ({
    pipe: pipeFunctionMock
  }))
}

const IMAGE_MOCK: Partial<ImageModel> = {
  userId: 1,
  imageId: 1,
  filename: 'example.jpeg'
}