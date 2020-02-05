import { isEqual } from 'lodash'

export default (firstValue: any, secondValue: any): boolean =>
  isEqual(firstValue, secondValue)
