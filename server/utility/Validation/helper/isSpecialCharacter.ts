import isString from './isString'

export default (text: any): boolean =>
  isString(text) ? Boolean(text.match(/[!@#$%^&*?]/)) : false
