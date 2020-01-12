import keys from '@config/keys'
import hasAllValuesDefined, { IInputData } from '@utility/hasAllValuesDefined'

export default (): void => {
  const result = hasAllValuesDefined(keys as IInputData)
  if (!result) {
    throw Error('Not all environment variables have been defined.')
  }

  console.info('Environment variables have been defined successfully.')
}
