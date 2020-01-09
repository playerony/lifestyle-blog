import isString from './isString'
import isArray from './isArray'

export default (data: any, maxLength: number): boolean => {
  const isArrayObject = isArray(data)
  const isStringObject = isString(data)

  if ((!isStringObject && !isArrayObject) || !maxLength) {
    return false
  }

  return data.length <= maxLength
}
