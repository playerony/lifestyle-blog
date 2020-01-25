import IResponseError from '@type/IResponseError'

export default (errorData: IResponseError, fieldName: string): string => {
  const fieldErrorList = errorData[fieldName]

  if (Boolean(fieldErrorList) && Array.isArray(fieldErrorList)) {
    return fieldErrorList[0]
  }

  return ''
}
