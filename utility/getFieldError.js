export default (errorData, fieldName) => {
  if (!errorData) {
    return ''
  }

  const fieldErrorList = errorData[fieldName]

  if (Boolean(fieldErrorList) && Array.isArray(fieldErrorList)) {
    return fieldErrorList[0] ? fieldErrorList[0] : ''
  }

  return ''
}
