type TFunctionName =
  | 'isArray'
  | 'isDigit'
  | 'isExist'
  | 'isEqual'
  | 'isString'
  | 'isLetter'
  | 'isNumber'
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
  isExist: 'Podana wartość nie istnieje.',
  isArray: 'Podana wartość nie jest tablicą.',
  isNumber: 'Podana wartość nie jest liczbą.',
  isEqual: 'Podane wartości nie są takie same.',
  isString: 'Podana wartość nie jest ciągiem znaków.',
  isDigit: 'Podana wartość nie zawiera żadnej cyfry.',
  isLetter: 'Podana wartość nie zawiera żadnej litery.',
  isBigLetter: 'Podana wartość nie zawiera żadnej dużej litery.',
  isSpecialCharacter: 'Podana wartość nie zawiera żadnych znaków specjalnych.',
  isMaxLength: `Podany ciąg znaków jest większy od ${functionParameters?.length}.`,
  isMinLength: `Podany ciąg znaków jest mniejszy od ${functionParameters?.length}.`
})
