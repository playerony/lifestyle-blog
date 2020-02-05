type TFunctionName =
  | 'isArray'
  | 'isDigit'
  | 'isExist'
  | 'isEqual'
  | 'isString'
  | 'isLetter'
  | 'isBigLetter'
  | 'isMaxLength'
  | 'isMinLength'
  | 'isSpecialCharacter'

interface IFunctionParameterList {
  length: number
}

export default (
  functionName: TFunctionName,
  errorMessage?: string,
  functionParameters?: IFunctionParameterList
): string => {
  if (errorMessage) {
    return errorMessage
  }

  return messageList(functionParameters)[functionName]
}

const messageList = (
  functionParameters?: IFunctionParameterList
): { [key in TFunctionName]: string } => ({
  isEqual: 'Provided values are not same.',
  isExist: 'Provided value does not exist.',
  isArray: 'Provided value is not an array.',
  isString: 'Provided value is not a string.',
  isDigit: 'Provided value does not contain any digit.',
  isLetter: 'Provided value does not contain any letter.',
  isBigLetter: 'Provided value does not contain any big letter.',
  isSpecialCharacter: 'Provided value does not contain any special character.',
  isMaxLength: `Provided value's length is longer than ${functionParameters?.length}.`,
  isMinLength: `Provided value's length is shorter than ${functionParameters?.length}.`
})
