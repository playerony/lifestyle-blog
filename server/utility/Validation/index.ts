import Check from './Check'

interface IData {
  [key: string]: any
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

  public check() {
    if (!this.checkList) {
      return new Error('Check list was not provided.')
    }

    return this.checkList.reduce((result, check) => {
      if (!this.data.hasOwnProperty(check.fieldName)) {
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
