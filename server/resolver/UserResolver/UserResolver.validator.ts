import { UserType } from '@type/User'

import ValidationError from '@utility/ValidationError'
import { check, validate, isValid } from '@utility/validate'

export const loginValidation = (data: UserType): void => {
  const validationResult = validate(data)
    .setCheckList([
      check('login')
        .isExist()
        .isMinLength(3)
        .isMaxLength(50),
      check('password')
        .isExist()
        .isMinLength(5)
        .isMaxLength(100)
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}

export const signupValidation = (data: UserType): void => {
  const validationResult = validate(data)
    .setCheckList([
      check('login')
        .isExist()
        .isMinLength(3)
        .isMaxLength(50),
      check('password')
        .isExist()
        .isMinLength(5)
        .isMaxLength(100)
        .isLetter()
        .isBigLetter()
        .isDigit()
        .isSpecialCharacter()
    ])
    .check()

  if (!isValid(validationResult)) {
    throw new ValidationError(validationResult)
  }
}
