import isString from './isString'

export default (text: any): boolean =>
  isString(text) ? Boolean(text.match(/[0-9]/)) : false
