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
        .isEqual('image/jpeg'),
      check('encoding')
        .isExist()
        .isString()
        .isEqual('7bit'),
      check('createReadStream').isExist()
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}
