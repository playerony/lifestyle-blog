import { CommentSaveRequest } from '@type/Comment'

import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'

export const createCommentValidation = (data: CommentSaveRequest): void => {
  const validationResult = validate(data)
    .setCheckList([
      check('articleId')
        .isExist()
        .isNumber(),
      check('content')
        .isExist()
        .isMinLength(3),
      check('creator')
        .isExist()
        .isMinLength(2)
        .isMaxLength(20)
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}

export const updateCommentValidation = (
  commentId: number,
  data: CommentSaveRequest
): void => {
  const validationResult = validate({ commentId, ...data })
    .setCheckList([
      check('commentId')
        .isExist()
        .isNumber(),
      check('articleId')
        .isExist()
        .isNumber(),
      check('content')
        .isExist()
        .isMinLength(3),
      check('creator')
        .isExist()
        .isMinLength(2)
        .isMaxLength(20)
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}

export const commentListByArticleIdValidation = (articleId: number): void => {
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
