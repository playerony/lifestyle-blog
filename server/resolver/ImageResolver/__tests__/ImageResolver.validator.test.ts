import { uploadImageValidation } from '../ImageResolver.validator'

describe('ImageResolver.validator Functions', () => {
  describe('uploadImageValidation Function', () => {
    describe('filename Field', () => {
      it('should contain proper validators', () => {
        const data = {
          filename: null
        }

        try {
          uploadImageValidation(data as any)
        } catch (e) {
          const { filename } = JSON.parse(e.message)

          expect(filename).toEqual([
            'Provided value does not exist.',
            'Provided value is not a string.'
          ])
        }
      })
    })

    describe('mimetype Field', () => {
      it('should contain proper validators', () => {
        const data = {
          mimetype: null
        }

        try {
          uploadImageValidation(data as any)
        } catch (e) {
          const { mimetype } = JSON.parse(e.message)

          expect(mimetype).toEqual([
            'Provided value does not exist.',
            'Provided value is not a string.',
            'Provided values are not same.'
          ])
        }
      })
    })

    describe('encoding Field', () => {
      it('should contain proper validators', () => {
        const data = {
          encoding: null
        }

        try {
          uploadImageValidation(data as any)
        } catch (e) {
          const { encoding } = JSON.parse(e.message)

          expect(encoding).toEqual([
            'Provided value does not exist.',
            'Provided value is not a string.',
            'Provided values are not same.'
          ])
        }
      })
    })

    describe('encoding Field', () => {
      it('should contain proper validators', () => {
        const data = {
          createReadStream: null
        }

        try {
          uploadImageValidation(data as any)
        } catch (e) {
          const { createReadStream } = JSON.parse(e.message)

          expect(createReadStream).toEqual(['Provided value does not exist.'])
        }
      })
    })
  })
})
