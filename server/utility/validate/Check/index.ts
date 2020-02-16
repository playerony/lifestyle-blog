import isArray from '../helper/isArray'
import isDigit from '../helper/isDigit'
import isExist from '../helper/isExist'
import isEqual from '../helper/isEqual'
import isString from '../helper/isString'
import isLetter from '../helper/isLetter'
import isNumber from '../helper/isNumber'
import isBigLetter from '../helper/isBigLetter'
import isMaxLength from '../helper/isMaxLength'
import isMinLength from '../helper/isMinLength'
import isSpecialCharacter from '../helper/isSpecialCharacter'

import getErrorMessage from './getErrorMessage'

interface IValidator {
  function: Function
  errorMessage: string
  argumentList?: Array<string | number>
}

class Check {
  private _fieldName: string
  private _validatorList: IValidator[] = []

  constructor(fieldName: string) {
    this._fieldName = fieldName
  }

  get fieldName(): string {
    return this._fieldName
  }

  get validatorList(): IValidator[] {
    return this._validatorList
  }

  public isArray(errorMessage?: string): Check {
    this._validatorList.push({
      function: isArray,
      errorMessage: getErrorMessage('isArray', errorMessage)
    })

    return this
  }

  public isDigit(errorMessage?: string): Check {
    this._validatorList.push({
      function: isDigit,
      errorMessage: getErrorMessage('isDigit', errorMessage)
    })

    return this
  }

  public isExist(errorMessage?: string): Check {
    this._validatorList.push({
      function: isExist,
      errorMessage: getErrorMessage('isExist', errorMessage)
    })

    return this
  }

  public isEqual(value: any, errorMessage?: string): Check {
    this._validatorList.push({
      function: isEqual,
      argumentList: [value],
      errorMessage: getErrorMessage('isEqual', errorMessage)
    })

    return this
  }

  public isString(errorMessage?: string): Check {
    this._validatorList.push({
      function: isString,
      errorMessage: getErrorMessage('isString', errorMessage)
    })

    return this
  }

  public isLetter(errorMessage?: string): Check {
    this._validatorList.push({
      function: isLetter,
      errorMessage: getErrorMessage('isLetter', errorMessage)
    })

    return this
  }

  public isNumber(errorMessage?: string): Check {
    this._validatorList.push({
      function: isNumber,
      errorMessage: getErrorMessage('isNumber', errorMessage)
    })

    return this
  }

  public isBigLetter(errorMessage?: string): Check {
    this._validatorList.push({
      function: isBigLetter,
      errorMessage: getErrorMessage('isBigLetter', errorMessage)
    })

    return this
  }

  public isMaxLength(length: number, errorMessage?: string): Check {
    this._validatorList.push({
      function: isMaxLength,
      argumentList: [length],
      errorMessage: getErrorMessage('isMaxLength', errorMessage, { length })
    })

    return this
  }

  public isMinLength(length: number, errorMessage?: string): Check {
    this._validatorList.push({
      function: isMinLength,
      argumentList: [length],
      errorMessage: getErrorMessage('isMinLength', errorMessage, { length })
    })

    return this
  }

  public isSpecialCharacter(errorMessage?: string): Check {
    this._validatorList.push({
      function: isSpecialCharacter,
      errorMessage: getErrorMessage('isSpecialCharacter', errorMessage)
    })

    return this
  }
}

export default Check
