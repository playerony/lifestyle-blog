import { ArticleSaveRequest } from '@type/Article'

import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'

export const createArticleValidation = (data: ArticleSaveRequest): void => {
  const validationResult = validate(data)
    .setCheckList([
      check('imageId')
        .isExist()
        .isNumber(),
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

export const updateArticleValidation = (
  articleId: number,
  data: ArticleSaveRequest
): void => {
  const validationResult = validate({ articleId, ...data })
    .setCheckList([
      check('articleId')
        .isExist()
        .isNumber(),
      check('imageId')
        .isExist()
        .isNumber(),
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

export const toggleArticlePublicFlagValidation = (
  articleId: number,
  isPublic: boolean
): void => {
  const validationResult = validate({ articleId, isPublic })
    .setCheckList([
      check('articleId')
        .isExist()
        .isNumber()
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}

export const articleByIdValidation = (articleId: number): void => {
  const validationResult = validate({ articleId })
    .setCheckList([
      check('articleId')
        .isExist()
        .isNumber()
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}
