import { visitorListByCategoryIdValidation } from '../VisitorResolver.validator'

describe('VisitorResolver.validator Functions', () => {
  describe('visitorListByCategoryIdValidation Function', () => {
    it('import visitorListByCategoryIdValidation', () => {
      expect(typeof visitorListByCategoryIdValidation).toEqual('function')
    })

    describe('categoryId Field', () => {
      it('should contain proper validators', () => {
        try {
          visitorListByCategoryIdValidation(null as any)
        } catch (e) {
          const { categoryId } = JSON.parse(e.message)

          expect(categoryId).toEqual([
            'Podana wartość nie istnieje.',
            'Podana wartość nie jest liczbą.'
          ])
        }
      })
    })
  })
})
