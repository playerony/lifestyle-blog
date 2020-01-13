import Check from './Check'
import Validator, { IData, IError } from './Validator'

export const validate = (data: IData): Validator => new Validator(data)

export const check = (fieldName: string): Check => new Check(fieldName)

export const isValid = (data: IError): boolean =>
  Object.keys(data).every(key => !data[key]?.length)
