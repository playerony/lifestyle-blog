import { extension } from 'mime-types'

import ValidationError from './ValidationError'

export default (mimetype: string): string => {
  const result = extension(mimetype)
  if (!result) {
    throw new ValidationError('Provided mimetype is wrong.')
  }

  return result
}
