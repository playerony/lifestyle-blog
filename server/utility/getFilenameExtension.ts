import ValidationError from './ValidationError'

const filenameExtensionRegexp = /(?:\.([^.]+))?$/

export default (filename: string): string => {
  if (!filename?.length) {
    throw new ValidationError('Provided filename value does not exist.')
  }

  const result = filenameExtensionRegexp.exec(filename)
  if (!result?.length || result.length != 2) {
    throw new ValidationError('Provided filename value do not contain extension.')
  }

  return result[1]
}