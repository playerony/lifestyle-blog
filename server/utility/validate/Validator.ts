import { ApolloError } from 'apollo-server-express'

import Check from './Check'

export interface IData {
  [key: string]: any
}

export interface IError {
  [key: string]: Array<string>
}

class Validation {
  private data: IData
  private checkList?: Check[]

  constructor(data: IData) {
    this.data = data
  }

  public setCheckList(checkList: Check[]): Validation {
    this.checkList = checkList

    return this
  }

  public check(): IError {
    if (!this.checkList) {
      throw new ApolloError('Check list was not provided.')
    }

    return this.checkList.reduce((result, check) => {
      if (!this.data[check.fieldName]) {
        return result
      }

      const status = check.validatorList
        .map(validator =>
          validator.function(
            this.data[check.fieldName],
            ...(validator.argumentList || [])
          )
            ? null
            : validator.errorMessage
        )
        .filter(Boolean)

      return Object.assign(result, { [check.fieldName]: status })
    }, {})
  }
}

export default Validation
