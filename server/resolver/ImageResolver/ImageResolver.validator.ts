import { FileUpload } from 'graphql-upload'

import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'

export const uploadImageValidation = (data: FileUpload): void => {
  const validationResult = validate(data)
    .setCheckList([
      check('filename')
        .isExist()
        .isString(),
      check('mimetype')
        .isExist()
        .isString()
        .isMinLength(5)
        .isMaxLength(10),
      check('encoding')
        .isExist()
        .isString()
        .isMinLength(4)
        .isMaxLength(4),
      check('createReadStream').isExist()
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}
