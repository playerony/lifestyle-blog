import { ArticleSaveRequest } from '@type/Article'

import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'
import getArticleContentText from '@utility/getArticleContentText'

export const createArticleValidation = (data: ArticleSaveRequest): void => {
  const validationResult = validate({
    ...data,
    content: getArticleContentText(data.content)
  })
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
  const validationResult = validate({
    articleId,
    ...data,
    content: getArticleContentText(data.content)
  })
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

export const incrementArticleLikesValidation = (articleId: number): void => {
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
