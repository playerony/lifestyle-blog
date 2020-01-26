import TResponseError from '@type/common/TResponseError'

export default <T>(
  errorData: TResponseError<T>,
  fieldName: keyof T
): string => {
  const fieldErrorList = errorData[fieldName]

  if (Boolean(fieldErrorList!) && Array.isArray(fieldErrorList)) {
    return fieldErrorList[0] ? fieldErrorList[0] : ''
  }

  return ''
}
