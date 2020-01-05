import flatArray from './flatArray'

export interface IInputData {
  [key: string]: string | number | object | null | undefined
}

export default (data?: IInputData | null): boolean => {
  if (!data) {
    return false
  }

  return flatArray(Object.values(data)).every(Boolean)
}
