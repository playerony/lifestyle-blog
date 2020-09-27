import { uploadImageValidation } from '../ImageResolver.validator'

describe('ImageResolver.validator Functions', () => {
  describe('uploadImageValidation Function', () => {
    it('import uploadImageValidation', () => {
      expect(typeof uploadImageValidation).toEqual('function')
    })

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
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest ciągiem znaków.'
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
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest ciągiem znaków.',
            'Podane wartości nie są takie same.'
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
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest ciągiem znaków.',
            'Podane wartości nie są takie same.'
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

          expect(createReadStream).toEqual(['Podana wartość nie istnieje.'])
        }
      })
    })
  })
})
