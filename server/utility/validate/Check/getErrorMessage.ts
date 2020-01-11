type TFunctionName =
  | 'isArray'
  | 'isBigLetter'
  | 'isDigit'
  | 'isExist'
  | 'isLetter'
  | 'isMaxLength'
  | 'isMinLength'
  | 'isSpecialCharacter'
  | 'isString'

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
  isArray: 'Provided value is not an array.',
  isDigit: 'Provided value does not contain any digit.',
  isExist: 'Provided value does not exist.',
  isString: 'Provided value is not a string.',
  isLetter: 'Provided value does not contain any letter.',
  isBigLetter: 'Provided value does not contain any big letter.',
  isMaxLength: `Provided value's length is longer than ${functionParameters?.length}.`,
  isMinLength: `Provided value's length is shorter than ${functionParameters?.length}.`,
  isSpecialCharacter: 'Provided value does not contain any special character.'
})
