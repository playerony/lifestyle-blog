import { ArticleCreateRequest } from '@type/Article'

import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'

export const createArticleValidation = (data: ArticleCreateRequest): void => {
  const validationResult = validate(data)
    .setCheckList([
      check('imageId').isExist(),
      check('title')
        .isExist()
        .isMaxLength(30),
      check('description')
        .isExist()
        .isMaxLength(100),
      check('content')
        .isExist()
        .isMinLength(160),
      check('categoryIdList')
        .isExist()
        .isArray()
        .isMinLength(1)
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}