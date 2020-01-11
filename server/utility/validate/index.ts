import Check from './Check'
import Validator, { IData } from './Validator'

export const validate = (data: IData): Validator => new Validator(data)

export const check = (fieldName: string): Check => new Check(fieldName)
