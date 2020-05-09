import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'

export const visitorListByCategoryIdValidation = (categoryId: number): void => {
  const validationResult = validate({ categoryId })
    .setCheckList([
      check('categoryId')
        .isExist()
        .isNumber()
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}
