import isString from './isString'
import isArray from './isArray'

export default (data: any, minLength: number): boolean => {
  const isArrayObject = isArray(data)
  const isStringObject = isString(data)

  if ((!isStringObject && !isArrayObject) || !minLength) {
    return false
  }

  return data.length >= minLength
}
